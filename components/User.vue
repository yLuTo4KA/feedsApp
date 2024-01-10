<template>
    <div :class="['user', userType]">
        <NuxtLink to="#" class="user__avatar">
            <Avatar :avatarType="userType" :avatarUrl="avatarUrl"/>
        </NuxtLink>
        <div class="user__info">
            <div class="user__info-name">{{ username }}</div>
            <NuxtLink to="#" class="user__info-login">{{ login }}</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
    userType?: string,
    username: string,
    login: string,
    avatarUrl: string,
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/colors";
.user {
    display: flex;
    align-items: center;
    &__avatar {
        margin-right: 10px;
    }
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-login {
            font-size: 14px;
            color: var(--link);
            font-weight: 400;
            width: max-content;
        }
    }
}
</style>