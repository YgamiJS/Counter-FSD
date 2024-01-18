import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref<number>(0);

  const incrementCount = () => {
    count.value += 1;
  };

  return { count, incrementCount };
});
