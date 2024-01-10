<template>
  <div class="preloader">
    <div class="preloader__icon">
        <Icon size="small">
            <Clock />
        </Icon>
    </div>
    <div class="preloader__text">
        Loading...
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from "~/components/icons/Icon.vue";
import Clock from "~/components/icons/variants/Clock.vue";
</script>

<style lang="scss" scoped>
.preloader {
    display: flex;
    width: 100%;
    justify-content: center;
    &__icon {
        margin-right: 10px;
    }
}
</style>