<script setup lang="ts">
import Layout from "./Layout.vue";
import copyIcon from "@assets/copy.svg";
import EventButton from "@shared/ui/EventButton/EventButton.vue";
import { TCardAboutProps } from "@/types";

const props = defineProps<TCardAboutProps>();
</script>

<template>
  <Layout>
    <div class="about-card__header">
      <div class="about-card__header-caption">О чём файл?</div>
      <div class="about-card__header-copy">
        <EventButton :size="'size-l'" :is-disabled="false" :type="'icon'">
          <img :src="copyIcon" alt="copy-icon" />
        </EventButton>
      </div>
    </div>

    <div class="about-card__desc">
      {{ props.desc }}
    </div>
  </Layout>
</template>

<style scoped>
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
