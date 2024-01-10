<template>
  <div :class="['avatar', avatarType]">
    <img :src="avatarUrl" alt="avatar" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  avatarType?: string;
  avatarUrl: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/colors";
.avatar {
  border-radius: 85px;
  border-start-start-radius: 35px;
  height: 44px;
  width: 44px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}
.--posts {
  border: 1px solid var(--link);
}
</style>