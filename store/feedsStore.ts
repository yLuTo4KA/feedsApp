import { defineStore } from "pinia";
import type { feedModel } from "~/models/feedModel";
import * as api from "~/api";

export const useFeedsStore = defineStore('mainStore', () => {
    const feeds = ref<feedModel[]>([]);
    const feedsLoading = ref<boolean>(false);

    const usersCache = ref<Record<number, object>>(process.client ? JSON.parse(localStorage.getItem('users') || '{}') : {});
    
    const postText = ref<string>('');

    async function getPosts() {
        console.log(usersCache);
        feedsLoading.value = true;
        try {
            const { data } = await api.posts.getPosts(feeds.value.length);
            await Promise.all(data.posts.map(async post => {
                await fetchUserInfo(post.userId);
                post.user = usersCache[post.userId];
            }));
            feeds.value?.push(...data.posts);
            console.log(feeds.value.length);
        } catch (e) {
            console.error(e);
        } finally {
            feedsLoading.value = false;
        }
    }

    async function fetchUserInfo(userId: number) {
        console.log('cache');
        console.log(!usersCache[userId]);
        if (!usersCache[userId]) {
            try {
                const { data } = await api.users.getUsers(userId);
                usersCache[userId] = data;
                process.client && localStorage.setItem('users', JSON.stringify(usersCache));
            } catch (e) {
                console.error(e);
            }
        } else {
            console.log('cache hit');
        }
    }

    async function newPost(text: string) {
        try {
            const { data } = await api.posts.addPost(text);
            await fetchUserInfo(data.userId);
            data.user = usersCache[data.userId];

            feeds.value.unshift(data);
        } catch (e) {
            console.error(e);
        }
    }

    return { feeds, feedsLoading, postText, getPosts, newPost, usersCache };
});
