<template>
  <div class="post-container" v-if="post">
    <div class="post-title">
      <h3>{{ post.title }}</h3>
      <span class="post-subtitle">{{ DateTimeFormat(post.created_at) }}</span>
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
        :new-comment-handler="createComment"
      />
    </div>
  </div>
</template>

<script>
import http from "@/http";

import Comment from "@/components/Comment";
import DateTimeFormat from "@/utils/dateTime";

export default {
  name: "Post",
  components: {
    Comment,
  },
  props: ["post"],
  setup(props, { emit }) {
    const createComment = async ({ id, reply }) => {
      await http.post(`/post/${props.post.id}/comment`, {
        comment: reply,
        parent_id: id,
      });
      emit("refresh-page");
    };

    return { createComment, DateTimeFormat };
  },
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
    .post-subtitle {
      color: #5f5e5e;
      font-size: 0.8rem;
    }
  }

  .post-content {
    margin-top: 1rem;
    p {
      font-size: 0.9rem;
      color: $darkGrey;
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
