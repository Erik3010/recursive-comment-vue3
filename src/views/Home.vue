<template>
  <div class="container">
    <Post :post="post" @refresh-page="fetchPost" />
  </div>
</template>

<script>
import Post from "@/components/Post";

import http from "@/http";

import { ref, onMounted } from "vue";

export default {
  name: "Home",
  components: {
    Post,
  },
  setup() {
    const post = ref(null);

    const fetchPost = async () => {
      const result = await http.get("post/13");

      post.value = result.data;

      console.log(result.data);
    };

    onMounted(() => {
      fetchPost();
    });

    return { fetchPost, post };
  },
};
</script>

<style lang="scss"></style>
