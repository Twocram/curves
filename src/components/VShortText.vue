<script setup lang="ts">
import downloadIcon from "@assets/download.svg";
import copyIcon from "@assets/copy.svg";
import VButton from "@components/ui/VButton.vue";
import { TShortTextProps } from "@/types";
import ShortTextCard from "@components/card/ShortText.vue";

type TProps = {
  cards: TShortTextProps[];
};

const props = defineProps<TProps>();
</script>

<template>
  <div class="card-container">
    <div class="card-header">
      <div class="card-header__caption">Краткое содержание текста</div>
      <div class="card-header__icons">
        <v-button :size="'size-l'" :is-disabled="false" :type="'icon'">
          <img :src="downloadIcon" alt="download-icon" />
        </v-button>

        <v-button :size="'size-l'" :is-disabled="false" :type="'icon'">
          <img :src="copyIcon" alt="copy-icon" />
        </v-button>
      </div>
    </div>

    <short-text-card
      :duration="item.duration"
      :start="item.start"
      :text="item.text"
      v-for="item in props.cards"
      :key="item.start"
    />
  </div>
</template>

<style scoped>
.card-container {
  width: 100%;
  padding: 20px 24px;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
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
</style>
