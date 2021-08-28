<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header-title">
        <router-link to="/">
          <h2>OpenForum</h2>
        </router-link>
      </div>
      <transition name="menu-animation">
        <ul
          v-if="isDesktopScreen || isMobileNavOpen"
          :class="['app-header-menu-list', { 'is-mobile': isMobileNavOpen }]"
        >
          <li v-for="menu in menuList" :key="menu.link">
            <router-link :to="menu.link">{{ menu.label }}</router-link>
          </li>
        </ul>
      </transition>
      <HamburgerButton @click="isMobileNavOpen = true" />
    </div>
  </header>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";

import HamburgerButton from "@/components/HamburgerButton";

import { onBeforeRouteUpdate } from "vue-router";

import useScreenWidth from "@/composable/useScreenWidth";

export default {
  name: "Header",
  components: {
    HamburgerButton,
  },
  setup() {
    const { screenWidth } = useScreenWidth();

    const isMobileNavOpen = ref(false);
    const menuList = reactive([
      {
        label: "All Posts",
        link: "/",
      },
      {
        label: "Setting",
        link: "/setting",
      },
      {
        label: "Login",
        link: "/login",
      },
    ]);

    const isDesktopScreen = computed(() => screenWidth.value > 432);

    onBeforeRouteUpdate(() => {
      if (isMobileNavOpen.value) isMobileNavOpen.value = false;
    });

    return { isMobileNavOpen, menuList, isDesktopScreen };
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
  box-shadow: $shadow;
  .container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-title {
    a {
      color: $primary;
    }
    @media screen and (max-width: 432px) {
      width: 100%;
      text-align: center;
    }
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
    &.is-mobile {
      display: flex;
      position: fixed;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      inset: 0;
      background: #fff;
      z-index: 999;
      > * {
        font-weight: 600;
        font-size: 1.5rem;
      }
      > * + * {
        margin: 2rem 0 0;
      }
    }
  }
}
.menu-animation {
  &-enter-active,
  &-leave-active {
    transition: 0.3s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
}
</style>
