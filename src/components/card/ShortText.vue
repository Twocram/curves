<script setup lang="ts">
import { TLongTextProps } from "@/types";
import { durationConverter } from "@/utils/converter";
import { onMounted, onUnmounted, ref } from "vue";

type TProps = {
  type: string;
} & TLongTextProps;

const props = defineProps<TProps>();
const video = ref<HTMLVideoElement | null>(null);

const isActive = ref(false);

const handleTimeUpdate = () => {
  if (video.value) {
    const currentTime = video.value!.currentTime;
    const endTime = props.start + props.duration;

    isActive.value = currentTime >= props.start && currentTime <= endTime;
  }
};

const setVideoTime = () => {
  if (video.value && props.type === "long") {
    video.value.currentTime = props.start;
  }
};

onMounted(() => {
  video.value = document.getElementById("code-video") as HTMLVideoElement;
  if (video.value) {
    video.value.addEventListener("timeupdate", handleTimeUpdate);
  }
});

onUnmounted(() => {
  if (video.value) {
    video.value!.removeEventListener("timeupdate", handleTimeUpdate);
  }
});
</script>

<template>
  <div class="card-item">
    <div
      class="card-item__speaker"
      v-if="props.speaker && props.type === 'long'"
    >
      Спикер {{ props.speaker }}
    </div>

    <div class="card-item__content">
      <div class="card-item__content-time">
        {{ durationConverter(props.start) }}
      </div>
      <div
        @click="setVideoTime"
        class="card-item__content-text"
        :class="[
          { 'long-text': props.type === 'long' },
          { active: isActive && props.type === 'long' },
        ]"
      >
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

.card-item__speaker {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 10px;
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

.long-text:hover {
  background: #ebe6d8;
  border-radius: 8px;
}

.active {
  background: #e1fe03;
  border-radius: 8px;
}
</style>
