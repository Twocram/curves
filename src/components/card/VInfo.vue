<script setup lang="ts">
import { TCardInfoProps } from "@/types";

const props = defineProps<TCardInfoProps>();
</script>

<template>
  <div class="info-card">
    <div class="info-card__caption">{{ props.caption }}</div>

    <div class="info-card__list">
      <div class="info-card__item">{{ props.date }}</div>
      <div class="info-card__item">{{ props.size }} МБ</div>
      <div class="info-card__item">{{ props.duration }}</div>
      <div class="info-card__item">{{ props.type }}</div>
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
