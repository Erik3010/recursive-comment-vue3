<template>
  <div class="comment-container" v-if="comment.replies">
    <div :style="indent" class="comment">
      <div class="comment-header" @click="toggleChildren">
        {{ comment.user.name }}
      </div>
      <div class="comment-timestamp">
        {{ DateTimeFormat(comment.created_at) }}
      </div>
      <div class="comment-content">
        {{ comment.comment }}
      </div>
      <div class="comment-reply">
        <form @submit.prevent="createComment(comment.id)">
          <input type="text" v-model="reply" />
          <button>Reply</button>
        </form>
      </div>
    </div>
    <template v-if="comment.replies">
      <Comment
        v-for="childComment in comment.replies"
        :key="childComment.id"
        :comment="childComment"
        :depth="depth + 1"
        @create-comment="createComment(childComment.id)"
      />
    </template>
  </div>
</template>

<script>
import { computed, ref } from "vue";
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
  },
  setup(props, { emit }) {
    const { depth } = props;

    const showChildren = ref(false);
    const reply = ref("");

    const indent = computed(() => {
      return {
        marginLeft: `${depth * 30}px`,
      };
    });

    const toggleChildren = () => {
      showChildren.value = !showChildren.value;
    };

    const createComment = (id) => {
      emit("create-comment", { id, reply: reply.value });
      reply.value = "";
    };

    return {
      indent,
      depth,
      showChildren,
      toggleChildren,
      DateTimeFormat,
      createComment,
      reply,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.comment-container {
  .comment {
    margin-bottom: 0.25rem;
  }
  .comment-timestamp {
    font-size: 0.7rem;
    color: #9d9d9d;
    margin-bottom: 0.1rem;
  }
  .comment-header {
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9rem;
  }
  .comment-content {
    color: $greyText;
    font-size: 0.85rem;
  }
  .comment-reply {
    form {
      display: flex;
      width: 100%;
      margin: 0.35rem 0 1.25rem;
    }
    input {
      width: 100%;
      outline: none;
      border-radius: 5px;
      background: rgb(248, 248, 248);
      border: 1.5px solid $greyText;
      padding: 0.35rem 0.75rem;
      font-size: 14px;
      margin-right: 0.75rem;
      &:focus {
        border-color: $primary;
      }
    }
    button {
      cursor: pointer;
      padding: 0.35rem 1rem;
      background: $primary;
      border: 1px solid transparent;
      color: white;
      border-radius: 5px;
      &:hover {
        background: $hover;
      }
    }
  }
}
</style>
