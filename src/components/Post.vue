<template>
  <div class="post-container" v-if="post">
    <div class="post-title">
      <h3>{{ post.title }}</h3>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
    </div>
    <div class="post-comments">
      <h4 class="post-comments-title">Comments</h4>
      <Comment />
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";

export default {
  name: "Post",
  components: {
    Comment,
  },
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.post-container {
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  padding: 1.25rem;

  .post-title {
    h3 {
      font-size: 1.2rem;
    }
  }

  .post-content {
    margin-top: 0.35rem;
    p {
      font-size: 0.85rem;
      color: #868686;
    }
  }

  .post-comments {
    margin-top: 2rem;
    &-title {
      margin-bottom: 0.15rem;
    }
  }
}
</style>
