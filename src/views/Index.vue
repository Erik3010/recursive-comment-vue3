<template>
  <Post v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import Post from "@/components/Post";
import PostService from "@/services/PostService";

import { ref, onMounted } from "vue";

export default {
  name: "Index",
  components: {
    Post,
  },
  setup() {
    const posts = ref([]);

    const fetchPosts = async () => {
      const result = await PostService.getAll();

      posts.value = result.data;
    };

    onMounted(() => {
      fetchPosts();
    });

    return { fetchPosts, posts };
  },
};
</script>

<style lang="scss"></style>
