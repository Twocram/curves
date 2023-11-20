<script setup lang="ts">
import { onMounted, ref } from "vue";
import logo from "@assets/logo.svg";
import smile from "@assets/smile.svg";

const dots = ref<string>("");

const dotsAnimation = () => {
  let count: number = 0;
  setInterval(() => {
    dots.value = ".".repeat(count);
    count = (count % 3) + 1;
  }, 500);
};

onMounted(() => {
  dotsAnimation();
});
</script>

<template>
  <div class="loader-container">
    <div class="loader-wrapper">
      <img alt="logo" :src="logo" class="loader-logo" />
      <span class="loader-text"
      ><img :src="smile" class="loader-smile" alt="smile" /> тсс, мы слушаем{{
          dots
        }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.loader-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader-logo {
  width: 256px;
  height: 128px;
}

.loader-text {
  width: 680px;
  font-weight: 600;
  font-size: 64px;
  display: flex;
  align-items: center;
}

.loader-smile {
  padding-top: 10px;
  margin-right: 8px;
  width: 64px;
  height: 32px;
}
</style>
