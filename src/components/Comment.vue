<template>
  <div class="comment-container" v-if="comment.replies">
    <div :style="indent" class="comment" @click="toggleChildren">
      <div class="comment-header">
        {{ comment.user.name }}
      </div>
      <div class="comment-content">
        {{ comment.comment }}
      </div>
    </div>
    <template v-if="comment.replies && showChildren">
      <Comment
        v-for="childComment in comment.replies"
        :key="childComment.id"
        :comment="childComment"
        :depth="depth + 1"
      />
    </template>
  </div>
</template>

<script>
import { computed, ref } from "vue";

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
  setup(props) {
    const { depth } = props;

    const showChildren = ref(false);

    const indent = computed(() => {
      return {
        marginLeft: `${depth * 30}px`,
      };
    });

    const toggleChildren = () => {
      showChildren.value = !showChildren.value;
    };

    return { indent, depth, showChildren, toggleChildren };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.comment-container {
  .comment {
    margin-bottom: 0.25rem;
  }
  .comment-header {
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
  }
  .comment-content {
    color: $greyText;
    font-size: 0.75rem;
  }
}
</style>
