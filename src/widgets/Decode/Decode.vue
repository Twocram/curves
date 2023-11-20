<script setup lang="ts">
import downloadIcon from "@assets/download.svg";
import copyIcon from "@assets/copy.svg";
import EventButton from "@shared/ui/EventButton/EventButton.vue";
import CardDecode from "@shared/ui/Card/CardDecode.vue";
import { TDecodeProps } from "@/types";
import { ref } from "vue";

const isHidden = ref<boolean>(true);

const toggleHidden = () => {
  isHidden.value = !isHidden.value;
};

const props = defineProps<TDecodeProps>();
</script>

<template>
  <div class="card-container">
    <div class="card-header">
      <div class="card-header__caption">
        <template v-if="props.type === 'short'">
          Краткое содержание текста
        </template>

        <template v-else> Полная расшифровка текста </template>
      </div>
      <div class="card-header__icons">
        <EventButton :size="'size-l'" :is-disabled="false" :type="'icon'">
          <img :src="downloadIcon" alt="download-icon" />
        </EventButton>

        <EventButton :size="'size-l'" :is-disabled="false" :type="'icon'">
          <img :src="copyIcon" alt="copy-icon" />
        </EventButton>
      </div>
    </div>

    <div
      class="card-content"
      :class="[{ hidden: props.cards.length > 2 && isHidden }]"
    >
      <CardDecode
        v-for="(item, index) in props.cards"
        :type="props.type"
        :duration="item.duration"
        :start="item.start"
        :text="item.text"
        :key="item.start"
        :speaker="
          index === 0 ||
          props.cards[index - 1].speaker !== item.speaker ||
          item.speaker === 0
            ? item.speaker
            : null!
        "
      />
    </div>

    <EventButton
      @click="toggleHidden"
      class="hide-btn"
      :size="'size-m'"
      :is-disabled="false"
      :type="'secondary'"
    >
      <template v-if="isHidden"> Развернуть </template>

      <template v-else> Свернуть </template>
    </EventButton>
  </div>
</template>

<style scoped>
.card-container {
  width: 100%;
  padding: 20px 24px;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
  margin-bottom: 12px;
}

.card-container:last-child {
  margin-bottom: 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-header__caption {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}

.card-header__icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-content {
  display: flex;
  flex-direction: column;
  position: relative;
}

.hidden {
  height: 260px;
  overflow: auto;
}

.hide-btn {
  width: fit-content;
  margin-top: 16px;
}
</style>
