<script setup lang="ts">
import { TShortTextProps } from "@/types";
import { durationConverter } from "@/utils/converter";

const props = defineProps<TShortTextProps>();
</script>

<template>
  <div class="card-item">
    <div class="card-item__content">
      <div class="card-item__content-time">
        {{ durationConverter(props.start) }}
      </div>
      <div class="card-item__content-text">
        {{ props.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  margin-bottom: 16px;
}

.card-item:last-child {
  margin-bottom: 0;
}

.card-item__content {
  display: flex;
  gap: 12px;
}

.card-item__content-time {
  font-family: "CourierPrime", sans-serif;
  font-size: 15px;
  max-width: 64px;
  width: 100%;
  line-height: 22px;
  color: #aaaaaa;
}

.card-item__content-text {
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}
</style>
