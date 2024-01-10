<template>
    <div class="post">
        <div class="post__header">
            <User :userType="'--posts'" :avatarUrl="data.user.users[0].image" :username="data.user.users[0].firstName + data.user.users[0].lastName" :login="'@' + data.user.users[0].username"/>
        </div>
        <div class="post__content">
            {{ data.body }}
        </div>
        <div class="post__footer">
            <ul class="tags__list">
                <li class="tags__item" v-for="(tag, i) in data.tags" :key="i">
                    <Tag :text="tag" />
                </li>
            </ul>
            <div class="post__footer-likes">
                <Likes :count="data.reactions" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import type { feedModel } from "~/models/feedModel";

interface Props {
    data: feedModel,
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/colors";
.post {
    background-color: var(--postBg);
    padding: 20px;
    border-radius: 10px;
    &__header {
        margin-bottom: 20px;
    }
    &__content {
        margin-bottom: 20px;
    }
    .tags__list {
        display: flex;
        flex-wrap: wrap;
        .tags__item {
            margin-right: 10px;
            margin-bottom: 5px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>