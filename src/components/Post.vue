<template>
  <div class="post-container" v-if="post">
    <div class="post-title">
      <h3>{{ post.title }}</h3>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
    </div>
    <div class="post-comments">
      <h3 class="post-comments-title">Comments</h3>
      <Comment
        v-for="comment in post.comments_tree"
        :key="comment.id"
        :comment="comment"
      />
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
@import "@/styles/_variables.scss";

.post-container {
  border: 1px solid $grey;
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
      color: $greyText;
    }
  }

  .post-comments {
    margin-top: 2rem;
    > * {
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid $grey;
    }
    &-title {
      margin-bottom: 0.85rem;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid $grey;
    }
  }
}
</style>
