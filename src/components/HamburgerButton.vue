<template>
  <div class="hamburger-button">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.hamburger-button {
  cursor: pointer;
  width: 25px;
  height: 20px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  > * {
    background: $dark;
    height: 2px;
    width: 100%;
  }
  &:hover {
    > * {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 432px) {
    display: flex;
  }
}
</style>
