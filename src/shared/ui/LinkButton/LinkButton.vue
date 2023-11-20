<script setup lang="ts">
import arrowLeft from "@assets/arrow-left.svg";
import { TLinkButtonProps } from "@/types";

const props = defineProps<TLinkButtonProps>();
</script>

<template>
  <a class="back-btn" :href="props.url">
    <div class="back-btn__container">
      <img :src="arrowLeft" class="back-btn__icon" alt="arrow-left" />
      <span class="back-btn__text">{{ props.label }}</span>
    </div>
  </a>
</template>

<style scoped>
.back-btn {
  display: block;
  padding: 12px 5px;
  text-decoration: none;
  margin-bottom: 12px;
}

.back-btn__container {
  display: flex;
  align-items: center;
}

.back-btn__text {
  font-size: 16px;
  line-height: 22px;
  color: #191b08;
  margin-left: 10px;
}
</style>
