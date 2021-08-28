import http from "@/http";

export default {
  getAll() {
    return http.get("/post");
  },
  get(id) {
    return http.get(`/post/${id}`);
  },
};
