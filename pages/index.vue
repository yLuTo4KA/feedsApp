<template>
  <div class="page">
    <button class="btn btn-theme" @click="toggleTheme">
      <Icon :size="'medium'">
        <Sun v-if="currentTheme === 'night'" />
        <Moon v-else />
      </Icon>
    </button>
    <div class="x-Container">
      <div class="feeds">
        <ul class="feeds__list" v-if="store.feeds">
            <li class="feeds__item" v-for="feed in store.feeds" :key="feed.id">
            <Post :data="feed" />
          </li>
          <li class="feeds__item" v-if="store.feedsLoading">
            <Preloader />
          </li>
        </ul>
      </div>
    </div>
    <xButton
      text="New post"
      theme="purple"
      class="btn btn-new_post"
      @click="toggleModal"
    >
      <Icon>
        <Edit />
      </Icon>
    </xButton>
    <Modal v-if="isOpenModal">
      <newPostModal @closeModal="toggleModal" @sendPost="sendPost" />
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import Icon from "~/components/icons/Icon.vue";
import Sun from "~/components/icons/variants/Sun.vue";
import Moon from "~/components/icons/variants/Moon.vue";
import Edit from "~/components/icons/variants/Edit.vue";
import { ref, onMounted } from "vue";
import { useFeedsStore } from "~/store/feedsStore";
import newPostModal from "~/components/Modal/variants/newPostModal.vue";

const store = useFeedsStore();
const currentTheme = ref("night");
const isOpenModal = ref<boolean>(false);

useHead({
  title: 'feed',
  meta: [
    { name: 'feed app', content: 'The feed app' }
  ],
})

function toggleTheme() {
  currentTheme.value = currentTheme.value === "night" ? "white" : "night";
  document.body.dataset.theme = currentTheme.value;
}
function loadMore() {
  const scrollContainer = document.documentElement;
  if (!store.feedsLoading) {
    if (
      scrollContainer.scrollTop + scrollContainer.clientHeight >=
      scrollContainer.scrollHeight - 100
    ) {
      store.getPosts();
    }
  }
}
function toggleModal() {
  isOpenModal.value = !isOpenModal.value;
  document.body.classList.toggle("modal-open", isOpenModal.value);
}
function sendPost() {
  if (store.postText.trim() !== "") {
    toggleModal();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    store.newPost(store.postText);
    store.postText = "";

  }
}

onMounted(() => {
  store.getPosts();
  window.addEventListener("scroll", loadMore);
});
</script>

<style lang="scss" scoped>
.feeds__list {
  .feeds__item {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.btn-new_post {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>

