<script setup lang="ts">
import { TVideoProps } from "@/types";

const props = defineProps<TVideoProps>();
</script>

<template>
  <div class="video-container">
    <video v-if="props.src" controls class="video">
      <source :src="props.src" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.video-container {
  max-width: 430px;
  width: 100%;
  position: sticky;
  top: 80px;
  background: #ffffff;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
  padding: 20px 20px 11px 20px;
}

.video {
  width: 100%;
  border-radius: 10px;
}

.video:hover {
  cursor: auto;
}
</style>
