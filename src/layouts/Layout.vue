<template>
  <div>
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Layout",
  components: {
    Header,
  },
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
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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
