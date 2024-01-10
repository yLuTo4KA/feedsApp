<template>
    <button :class="['xButton', size, theme]">
        <div class="xButton__icon" v-if="$slots.default">
            <slot />
        </div>
        <div class="xButton__text">
            {{ text }}
        </div>
    </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{size?: string, theme?: string, text: string}>();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/main";
.xButton {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 20px;
    &__icon {
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.purple {
    background-color: var(--purple);
    color: var(--primaryText);
}
.green {
    background: var(--link);
    color: var(--green);
}
.light-green {
    background: var(--light-green);
    color: var(--light-green-text);
}
</style>
