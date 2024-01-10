<template>
  <div class="newPostModal">
    <div class="newPostModal__header">Create a post</div>
    <div type="text" class="newPostModal__content">
      <textarea
        type="text"
        class="newPostModal__input"
        placeholder="Post text"
        v-model="store.postText"
      ></textarea>
    </div>
    <div class="newPostModal__footer">
      <nav class="newPostModal__footer-nav">
        <xButton text="Cancle" theme="light-green" class="nav-item" @click="$emit('closeModal')"></xButton>
        <xButton text="Send" theme="green" class="nav-item" @click="$emit('sendPost')"></xButton>
      </nav>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";
import { useFeedsStore } from "~/store/feedsStore";
const store = useFeedsStore();

const emit = defineEmits(["closeModal", "sendPost"]);
</script>

<style lang="scss" scoped>
@import "~/assets/styles/colors";
.newPostModal {
  max-width: 390px;
  width: 100%;
  max-height: 240px;
  height: 100%;
  border-radius: 20px;
  background: var(--modal);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  &__header {
    margin-bottom: 20px;
  }
  &__content {
    margin-bottom: 20px;
    width: 100%;
  }
  &__input {
    width: 100%;
    text-align: start;
    height: 100px;
    resize: none;
    border-radius: 10px;
    border: 1px solid var(--gray-border);
    background-color: var(--bg);
    color: var(--primaryColor);
    padding: 8px;
  }
  &__footer {
    align-self: flex-end;
    &-nav {
      display: flex;
    }
  }
}
.nav-item {
  margin-right: 10px;
  font-size: 14px;
  &:last-child {
    margin-right: 0;
  }
}
</style>