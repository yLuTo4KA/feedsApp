<template>
  <div class="modal">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000040;
  overflow: hidden;
}
</style>