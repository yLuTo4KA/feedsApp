import { makeRequest } from "../request";

export const getPosts = (skip: number = 0) => {
    return makeRequest({
        url: `/posts?limit=10&skip=${skip}`,
    })
};

export const addPost = (postText: string) => {
    return makeRequest({
        url: `posts/add`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            title: 'post',
            body: postText,
            userId: 1,
            reactions: 0,
            tags: ["english"],
        })

    })
}