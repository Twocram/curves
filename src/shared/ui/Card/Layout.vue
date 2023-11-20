<script setup lang="ts"></script>

<template>
  <div class="card-layout">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-layout {
  max-width: 785px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
  padding: 16px 24px 25px 24px;
  margin-bottom: 16px;
}
</style>
