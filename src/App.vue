<script setup lang="ts">
// Vue
import { onMounted, ref } from "vue";

// Components
import VLayout from "@components/VLayout.vue";
import VLinkButton from "@components/ui/VLinkButton.vue";
import VCardInfo from "@components/card/VInfo.vue";
import VCardAbout from "@components/card/VAbout.vue";
import VVideo from "@components/VVideo.vue";
import VDecode from "@components/VDecode.vue";
import VLoader from "@components/VLoader.vue";

// Types
import { TCardInfoProps, TShortTextProps, TLongTextProps } from "@/types";

// Utils
import {
  dateConverter,
  sizeConverter,
  durationConverter,
} from "@/utils/converter";

const apiUrl: string = import.meta.env.VITE_SHOPOT_API_URL;
const shortApiUrl: string = import.meta.env.VITE_SHOPOT_API_URL_SHORT;

const cardInfoData = ref<TCardInfoProps | null>(null);

const isLoading = ref<boolean>(false);

const cardAboutData = ref<string | null>(null);

const videoData = ref<string | null>(null);

const shortTextData = ref<TShortTextProps[] | []>([]);

const longTextData = ref<TLongTextProps[] | []>([]);

const getData = async () => {
  isLoading.value = true;
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

    shortTextData.value = data?.summaryScript;

    longTextData.value = data?.script;

    isLoading.value = false;
  } catch (e) {
    isLoading.value = false;
    console.log(e);
  }
};

onMounted(() => {
  getData();
});
</script>

<template>
  <v-layout>
    <v-loader v-if="isLoading" />
    <section class="container" v-else>
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

          <v-decode
            v-if="shortTextData.length"
            :type="'short'"
            :cards="shortTextData"
          />

          <v-decode
            v-if="longTextData.length"
            :type="'long'"
            :cards="longTextData"
          />
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
  margin-bottom: 76px;
}

.content-left {
  margin-right: 17px;
  max-width: 785px;
}

.content-right {
  position: relative;
}
</style>
