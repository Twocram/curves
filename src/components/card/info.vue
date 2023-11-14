<script setup lang="ts">
import { TCardInfoProps } from "@/types";

// const props = defineProps<TCardInfoProps>();
</script>

<template>
  <div class="info-card">
    <div class="info-card__caption">Игра престолов (7 сезон).mp4</div>

    <div class="info-card__list">
      <div class="info-card__item">5.05.2023</div>
      <div class="info-card__item">16.7 МБ</div>
      <div class="info-card__item">15:00</div>
      <div class="info-card__item">video</div>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  max-width: 785px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
  padding: 16px 24px 25px 24px;
  margin-bottom: 16px;
}

.info-card__caption {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 6px;
}

.info-card__list {
  display: flex;
}

.info-card__item {
  position: relative;
  margin-right: 21px;
  font-size: 14px;
  line-height: 16.8px;
  color: #aaaaaa;
}

.info-card__item:not(:last-child):after {
  content: "";
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background: #aaaaaa;
  right: -12px;
  top: 7px;
}
</style>
