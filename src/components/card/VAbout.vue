<script setup lang="ts">
import { TCardAboutProps } from "@/types";
import VButton from "@components/ui/VButton.vue";
import copyIcon from "@assets/copy.svg";

const props = defineProps<TCardAboutProps>();
</script>

<template>
  <div class="about-card">
    <div class="about-card__header">
      <div class="about-card__header-caption">О чём файл?</div>
      <div class="about-card__header-copy">
        <v-button :size="'size-l'" :is-disabled="false" :type="'icon'">
          <img :src="copyIcon" alt="copy-icon" />
        </v-button>
      </div>
    </div>

    <div class="about-card__desc">
      {{ props.desc }}
    </div>
  </div>
</template>

<style scoped>
.about-card {
  max-width: 785px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
  padding: 16px 24px 25px 24px;
  margin-bottom: 16px;
}

.about-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.about-card__header-caption {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #191b08;
}

.about-card__desc {
  font-size: 16px;
  line-height: 22px;
  color: #191b08;
  max-width: 682px;
  width: 100%;
}
</style>
