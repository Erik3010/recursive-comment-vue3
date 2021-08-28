<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header-title">
        <h2>OpenForum</h2>
      </div>
      <ul class="app-header-menu-list">
        <li>
          <router-link to="/">All Posts</router-link>
        </li>
        <li>
          <router-link to="/setting">Setting</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.app-header {
  border-bottom: 1px solid $grey;
  padding: 1rem 0;
  background: white;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: $shadow;
  .container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-title {
    color: $primary;
  }
  &-menu-list {
    display: flex;
    > * + * {
      margin-left: 2rem;
    }
    li {
      &:hover {
        a {
          color: $primary;
        }
      }
      a.active-menu {
        color: $primary;
      }
    }
  }
}
</style>
