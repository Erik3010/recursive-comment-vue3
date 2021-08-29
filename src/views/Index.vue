<template>
  <FadeTransition>
    <div class="loading-container" v-if="isLoadingPosts">
      <CircularLoading />
    </div>
    <div v-else>
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </FadeTransition>
</template>

<script>
import Post from "@/components/Post";
import PostService from "@/services/PostService";
import CircularLoading from "@/components/CircularLoading";

import { ref, onMounted } from "vue";

export default {
  name: "Index",
  components: {
    Post,
    CircularLoading,
  },
  setup() {
    const isLoadingPosts = ref(false);

    const posts = ref([]);

    const fetchPosts = async () => {
      isLoadingPosts.value = true;
      const result = await PostService.getAll();

      posts.value = result.data;
      isLoadingPosts.value = false;
    };

    onMounted(() => {
      fetchPosts();
    });

    return {
      fetchPosts,
      posts,
      isLoadingPosts,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.loading-container {
  min-height: $minHeight;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
