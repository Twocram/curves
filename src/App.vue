<script setup lang="ts">
// Vue
import { onMounted, ref } from "vue";

// Components
import Layout from "@widgets/Layout/Layout.vue";
import LinkButton from "@shared/ui/LinkButton/LinkButton.vue";
import CardInfo from "@shared/ui/Card/CardInfo.vue";
import CardAbout from "@shared/ui/Card/CardAbout.vue";
import VideoOutput from "@widgets/VideoOutput/VideoOutput.vue";
import Decode from "@widgets/Decode/Decode.vue";
import Loader from "@shared/ui/Loader/Loader.vue";
// Types
import { TCardInfoProps, TTextProps } from "@/types";

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

const shortTextData = ref<TTextProps[] | []>([]);

const longTextData = ref<TTextProps[] | []>([]);

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
  <Layout>
    <Loader v-if="isLoading" />
    <section class="container" v-else>
      <LinkButton :label="'На главную'" :url="'/'" />

      <div class="content">
        <div class="content-left">
          <CardInfo
            v-if="cardInfoData"
            :type="cardInfoData?.type"
            :size="cardInfoData?.size"
            :caption="cardInfoData?.caption"
            :date="cardInfoData?.date"
            :duration="cardInfoData?.duration"
          />

          <CardAbout v-if="cardAboutData" :desc="cardAboutData" />

          <Decode
            v-if="shortTextData.length"
            :type="'short'"
            :cards="shortTextData"
          />

          <Decode
            v-if="longTextData.length"
            :type="'long'"
            :cards="longTextData"
          />
        </div>

        <div class="content-right">
          <VideoOutput v-if="videoData" :src="`${shortApiUrl}${videoData}`" />
        </div>
      </div>
    </section>
  </Layout>
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
