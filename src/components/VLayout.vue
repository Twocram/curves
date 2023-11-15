<script setup lang="ts">
import VFooter from "@components/VFooter.vue";
import VHeader from "@components/VHeader.vue";
</script>

<template>
  <div class="layout">
    <VHeader />
    <slot></slot>
    <VFooter />
  </div>
</template>

<style scoped>
.layout {
  padding: 80px 0 236px 0;
}
</style>
