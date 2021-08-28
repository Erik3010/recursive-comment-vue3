import http from "@/http";

export default {
  create(postId, payload) {
    return http.post(`/post/${postId}/comment`, payload);
  },
};
