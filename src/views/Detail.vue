<template>
  <PostDetail :post="post" @refresh-page="fetchPost" v-if="post" />
</template>

<script>
import PostDetail from "@/components/PostDetail";
import PostService from "@/services/PostService";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Detail",
  components: {
    PostDetail,
  },
  setup() {
    const route = useRoute();

    const post = ref(null);

    const fetchPost = async () => {
      const result = await PostService.get(route.params.id);

      post.value = result.data;
    };

    onMounted(() => {
      fetchPost();
    });

    return { fetchPost, post };
  },
};
</script>
