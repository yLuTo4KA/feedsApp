<template>
  <div :class="['icon', size]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  size?: string;
}>();
</script>

<style lang="scss" scoped>
.icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.small {
  width: 16px;
  height: 16px;
}
.medium {
  width: 40px;
  height: 40px;
}
.big {
  width: 64px;
  height: 64px;
}
</style>

<!-- <template>
  <i class="icon" v-bind="$attrs">
    <slot/>
  </i>
</template>

<script setup lang="ts">
import {addUnit} from '~/utils/addUnit'

const props = withDefaults(defineProps<{
  size?: string | number
}>(), {
  size: 24
})

const size = computed<string>(() => addUnit(props.size) as string)
</script>

<style scoped lang="scss">
.icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: v-bind(size);
  width: v-bind(size);
}
</style> -->