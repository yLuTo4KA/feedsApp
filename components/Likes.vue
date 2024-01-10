<template>
    <button class="likes" @click="$emit('like')">
        <Icon class="likes__icon">
            <Like />
        </Icon>
        <div class="likes__count">
            {{ count }}
        </div>
    </button>
</template>

<script lang="ts" setup>
import Icon from '~/components/icons/Icon.vue';
import Like from "~/components/icons/variants/Like.vue";
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(['like']);
const props = defineProps<{count: number}>();

</script>

<style lang="scss" scoped>
@import "~/assets/styles/colors";
.likes {
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
       .likes__icon {
        color: red;
       }
    }
    &__icon {
        color: var(--likeColor);
        margin-right: 5px;
    }
}
</style>