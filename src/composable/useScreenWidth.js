import { ref, onMounted } from "vue";

export default () => {
  const screenWidth = ref(window.innerWidth);

  const handler = () => (screenWidth.value = window.innerWidth);

  window.addEventListener("resize", handler);

  return { screenWidth };
};
