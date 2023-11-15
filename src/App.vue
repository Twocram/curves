<script setup lang="ts">
// Vue
import { onMounted, ref } from "vue";

// Components
import VLayout from "@components/VLayout.vue";
import VLinkButton from "@components/ui/VLinkButton.vue";
import VCardInfo from "@components/card/Info.vue";
import VCardAbout from "@components/card/About.vue";
import VVideo from "@components/VVideo.vue";

// Types
import { TCardInfoProps } from "@/types";

// Utils
import {
  dateConverter,
  sizeConverter,
  durationConverter,
} from "@/utils/converter";

const apiUrl: string = import.meta.env.VITE_SHOPOT_API_URL;
const shortApiUrl: string = import.meta.env.VITE_SHOPOT_API_URL_SHORT;

const cardInfoData = ref<TCardInfoProps | null>(null);

const cardAboutData = ref<string | null>(null);

const videoData = ref<string | null>(null);

const getData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    const data = await response.json();

    cardInfoData.value = {
      date: dateConverter(data?.uploadAt),
      caption: data?.fileName,
      duration: durationConverter(data?.duration),
      size: sizeConverter(data?.fileSize),
      type: data?.type,
    };

    cardAboutData.value = data?.summary;

    videoData.value = data?.fileSrc;
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  getData();
});
</script>

<template>
  <v-layout>
    <section class="container">
      <v-link-button :label="'На главную'" :url="'/'" />

      <div class="content">
        <div class="content-left">
          <v-card-info
            v-if="cardInfoData"
            :type="cardInfoData?.type"
            :size="cardInfoData?.size"
            :caption="cardInfoData?.caption"
            :date="cardInfoData?.date"
            :duration="cardInfoData?.duration"
          />

          <v-card-about v-if="cardAboutData" :desc="cardAboutData" />
        </div>

        <div class="content-right">
          <v-video v-if="videoData" :src="`${shortApiUrl}${videoData}`" />
        </div>
      </div>
    </section>
  </v-layout>
</template>

<style>
.container {
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.content {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.content-left {
  margin-right: 17px;
}
</style>
