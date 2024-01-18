<script setup lang="ts">
import { useCounterStore } from "../../entities/counter";
import { Counter } from "../../entities/counter";
import { CounterButton } from "../../features/counter-button";
import { storeToRefs } from "pinia";

const { count } = storeToRefs(useCounterStore());
</script>

<template>
  <div class="counter">
    <Counter :count="count" />
    <CounterButton />
  </div>
</template>

<style scoped lang="scss"></style>
