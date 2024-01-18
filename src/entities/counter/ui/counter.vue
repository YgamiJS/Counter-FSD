<script setup lang="ts">
const props = defineProps<{
  count: number;
}>();
</script>

<template>
  <div class="count">{{ props.count }}</div>
</template>

<style scoped lang="scss">
@import "../../../app/styles/varibles.scss";

.count {
  background: $blue100;
  padding: 8px 10px;
  color: $black;
}
</style>
