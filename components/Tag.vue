<template>
    <div class="tag">
        <p class="tag__text">{{ text }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
    text: string,
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/colors";
.tag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    background-color: var(--tag);
    color: var(--primaryText);
    border-radius: 25px;
    padding: 0 8px;
    height: 20px;
    font-size: 11px;
}
</style>