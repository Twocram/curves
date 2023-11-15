<script setup lang="ts">
import { onMounted } from "vue";
import VLayout from "@components/VLayout.vue";
import VLinkButton from "@components/ui/VLinkButton.vue";
import VCardInfo from "@components/card/Info.vue";
import VCardAbout from "@components/card/About.vue";

const apiUrl: string = import.meta.env.VITE_SHOPOT_API_URL;

const getData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    const data = await response.json();

    console.log(data);
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
          <v-card-info />

          <v-card-about />
        </div>

        <div class="content-right">

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
}
</style>
