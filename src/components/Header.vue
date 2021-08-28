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
