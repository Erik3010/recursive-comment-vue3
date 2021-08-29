<template>
  <div class="not-found-container">
    <h1 class="not-found-title">404</h1>
    <p class="not-found-subtitle">Page not found</p>
    <p class="not-found-content">
      Seems you have redirected to the wrong page. Use the button below to go
      back to the home page 😟
    </p>
    <router-link to="/" #="{ navigate }">
      <button @click="navigate" class="btn-primary">
        Back to Home
      </button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.not-found {
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: $minHeight;
  }
  &-title {
    color: $primary;
    font-size: 3.75rem;
  }
  &-subtitle {
    font-size: 1.15rem;
    margin: -0.75rem 0 0.5rem;
    color: $dark;
    font-weight: 700;
  }
  &-content {
    color: $lightGrey;
    font-size: 0.85rem;
    margin: 0 auto 2rem;
    width: 50%;
    text-align: center;
    @media screen and (max-width: 512px) {
      width: 80%;
    }
  }
}
</style>
