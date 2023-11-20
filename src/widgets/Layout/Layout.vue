<script setup lang="ts">
import Header from "@widgets/Header/Header.vue";
import Footer from "@widgets/Footer/Footer.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  padding: 80px 0 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
