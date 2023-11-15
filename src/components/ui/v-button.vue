<script setup lang="ts">
import { TButtonProps } from "@/types";

const props = defineProps<TButtonProps>();
</script>

<template>
  <button :class="[props.size, props.type, { disabled: props.isDisabled }]">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

.secondary {
  background: #ffffff;
  border: 1px solid #191b08;
  color: #191b08;
  border-radius: 72px;
  display: flex;
  align-items: center;
}

.secondary:hover {
  background: #191b08;
  transition: 0.3s ease-in-out;
}

.secondary:hover path {
  fill: #ffffff;
}

.secondary.size-l {
  padding: 12px 48px;
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 500;
}

.secondary.size-m {
  padding: 10px 30px;
  font-size: 16px;
  line-height: 19.2px;
}

.secondary.size-s {
  padding: 8px 24px;
  font-size: 14px;
  line-height: 16.8px;
}

.secondary.disabled {
  background: #f4f4f4;
  cursor: not-allowed;
}

.icon {
  padding: 4px;
  border-radius: 72px;
  display: flex;
  align-items: center;
  background: #ffffff;
}

.icon.disabled {
  background: #f4f4f4;
  cursor: not-allowed;
}

.icon:hover {
  background: #e1fe03;
}

.icon.size-m {
  width: 32px;
  height: 32px;
}

.icon.size-m {
  width: 24px;
  height: 24px;
}
</style>
