<template>
  <div class="post-container">
    <div class="post-title">
      <h3>
        <router-link :to="{ name: 'post-detail', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
      </h3>
      <span class="post-subtitle">{{ DateTimeFormat(post.created_at) }}</span>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
import DateTimeFormat from "@/utils/dateTime";

export default {
  name: "Post",
  props: ["post"],
  setup() {
    return { DateTimeFormat };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.post-container {
  border: 1px solid $grey;
  border-radius: 5px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: $shadow;
  &:hover {
    border-color: $primary;
    box-shadow: $primaryShadow;
  }
  .post-title {
    h3 {
      a {
        transition: all 0.25s;
        &:hover {
          color: $primary;
        }
      }
      font-size: 1.2rem;
      line-height: 1.45;
      @media screen and (max-width: 432px) {
        font-size: 1rem;
      }
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
}
</style>
