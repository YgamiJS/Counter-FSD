<script setup lang="ts">
import { useCounterStore } from "../../entities/counter";

const { incrementCount } = useCounterStore();
</script>

<template>
  <button class="incrementbutton button" @click="incrementCount">
    Increment count
  </button>
</template>

<style scoped lang="scss">
@import "../../app/styles/varibles.scss";

.button {
  background: $grey100;
  border-radius: 5px;
  padding: 4px 5px;
  cursor: pointer;
}
</style>
