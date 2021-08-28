<template>
  <div class="post-container">
    <div class="post-title">
      <h3>{{ post.title }}</h3>
      <span class="post-subtitle">{{ DateTimeFormat(post.created_at) }}</span>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
    </div>
    <div class="post-comments" v-if="post.comments_tree.length">
      <div class="post-comments-line"></div>
      <h3 class="post-comments-title">Comments</h3>
      <div class="post-comments-wrapper">
        <Comment
          v-for="comment in post.comments_tree"
          :key="comment.id"
          :comment="comment"
          :new-comment-handler="createComment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";
import DateTimeFormat from "@/utils/dateTime";
import CommentService from "@/services/CommentService";

export default {
  name: "PostDetail",
  components: {
    Comment,
  },
  props: ["post"],
  setup(props, { emit }) {
    const createComment = async ({ id, reply }) => {
      await CommentService.create(props.post.id, {
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
  box-shadow: $shadow;
  .post-title {
    h3 {
      font-size: 1.2rem;
    }
    .post-subtitle {
      color: $subtitle;
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
    position: relative;
    overflow: hidden;
    margin-top: 2rem;
    &-line {
      position: absolute;
      background: $grey;
      width: 1px;
      top: 57px;
      bottom: 111px;
    }
    &-wrapper {
      padding-left: 1.5rem;
      > * {
        padding-bottom: 0.5rem;
        margin-bottom: 0.5rem;
        border-bottom: 1px solid $grey;
      }
    }
    &-title {
      margin-bottom: 0.85rem;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid $grey;
    }
  }
}
</style>
