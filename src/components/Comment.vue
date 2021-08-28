<template>
  <div
    :class="['comment-container', { 'comment-first-parent': !depth }]"
    v-if="comment.replies"
  >
    <div class="comment-line" :style="lineWidth"></div>
    <div :style="indent" class="comment">
      <div class="comment-header" @click="toggleChildren">
        <span v-if="comment.replies.length">
          {{ childIndicator }}
        </span>
        {{ comment.user.name }}
      </div>
      <div class="comment-timestamp">
        {{ DateTimeFormat(comment.created_at) }}
      </div>
      <div class="comment-content">
        {{ comment.comment }}
      </div>
      <div class="comment-reply">
        <button class="comment-reply-button" @click="toggleCommentReply">
          Reply Comment
        </button>
        <form @submit.prevent="createComment(comment.id)" v-if="isReplyComment">
          <input
            class="comment-reply-input"
            type="text"
            v-model="reply"
            ref="replyInput"
          />
          <button class="btn-primary">Reply</button>
        </form>
      </div>
    </div>
    <template v-if="comment.replies && showChildren">
      <Comment
        v-for="childComment in comment.replies"
        :key="childComment.id"
        :comment="childComment"
        :depth="depth + 1"
        :new-comment-handler="newCommentHandler"
      />
    </template>
  </div>
</template>

<script>
import { computed, nextTick, ref } from "vue";
import DateTimeFormat from "@/utils/dateTime";

export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
    newCommentHandler: {
      type: Function,
    },
  },
  setup(props) {
    const { depth } = props;

    const showChildren = ref(false);
    const isReplyComment = ref(false);
    const reply = ref("");

    const replyInput = ref(null);

    const indent = computed(() => {
      return {
        marginLeft: `${depth * 30}px`,
      };
    });

    const lineWidth = computed(() => {
      return {
        width: `${(depth + 1) * 23}px`,
      };
    });

    const toggleChildren = () => {
      showChildren.value = !showChildren.value;
    };

    const childIndicator = computed(() => (showChildren.value ? "▲" : "▼"));

    const createComment = (id) => {
      props.newCommentHandler({ id, reply: reply.value });
      reply.value = "";
      isReplyComment.value = false;
      showChildren.value = true;
    };

    const toggleCommentReply = async () => {
      isReplyComment.value = !isReplyComment.value;
      if (isReplyComment.value) {
        await nextTick();
        replyInput.value.focus();
      }
    };

    return {
      indent,
      depth,
      showChildren,
      toggleChildren,
      DateTimeFormat,
      reply,
      childIndicator,
      createComment,
      isReplyComment,
      lineWidth,
      replyInput,
      toggleCommentReply,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.comment-container {
  position: relative;
  .comment {
    margin-bottom: 0.25rem;
    &-line {
      position: absolute;
      background: $grey;
      height: 1px;
      top: 10px;
      left: -25px;
    }
  }
  .comment-timestamp {
    font-size: 0.7rem;
    color: $lightGrey;
    margin-bottom: 0.1rem;
  }
  .comment-header {
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9rem;
  }
  .comment-content {
    color: $darkGrey;
    font-size: 0.85rem;
  }
  .comment-reply {
    form {
      display: flex;
      width: 100%;
      margin: 0.35rem 0 1.25rem;
    }
    &-button {
      font-size: 0.75rem;
      background: none;
      border: none;
      border-radius: 5px;
      color: $darkGrey;
      cursor: pointer;
      padding: 0.35rem 0.5rem;
      line-height: 100%;
      margin: 0.5rem 0;
      border: 1px solid #cac9c9;
      &:hover {
        background: #e6e6e6;
      }
    }
    &-input {
      width: 100%;
      outline: none;
      border-radius: 5px;
      background: rgb(248, 248, 248);
      border: 1.5px solid #bbbbbb;
      padding: 0.35rem 0.75rem;
      font-size: 0.875rem;
      margin-right: 0.75rem;
      color: $dark;
      &:focus {
        border-color: $primary;
        box-shadow: $primaryShadow;
      }
    }
  }
}
</style>
