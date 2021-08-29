<template>
  <div class="loading"></div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.loading {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid $primary;
  border-top-color: #cacaca;
  animation: animate 1.25s linear infinite;
}
@keyframes animate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
