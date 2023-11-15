<script setup lang="ts">
import { TCardAboutProps } from "@/types";
import VButton from "@components/ui/v-button.vue";

// const props = defineProps<TCardAboutProps>();
</script>

<template>
  <div class="about-card">
    <div class="about-card__header">
      <div class="about-card__header-caption">О чём файл?</div>
      <div class="about-card__header-copy">
        <v-button :size="'size-l'" :is-disabled="false" :type="'icon'">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0016 9.9001C10.394 9.9001 9.90156 10.3926 9.90156 11.0001V20.0001C9.90156 20.6076 10.394 21.1001 11.0016 21.1001H20.0016C20.6091 21.1001 21.1016 20.6076 21.1016 20.0001V11.0001C21.1016 10.3926 20.6091 9.9001 20.0016 9.9001H11.0016ZM8.10156 11.0001C8.10156 9.39847 9.39994 8.1001 11.0016 8.1001H20.0016C21.6032 8.1001 22.9016 9.39847 22.9016 11.0001V20.0001C22.9016 21.6017 21.6032 22.9001 20.0016 22.9001H11.0016C9.39994 22.9001 8.10156 21.6017 8.10156 20.0001V11.0001Z"
              fill="#191B08"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.00156 2.9001C3.70982 2.9001 3.43003 3.01599 3.22374 3.22228C3.01745 3.42857 2.90156 3.70836 2.90156 4.0001V13.0001C2.90156 13.2918 3.01745 13.5716 3.22374 13.7779C3.43004 13.9842 3.70982 14.1001 4.00156 14.1001H5.00156C5.49862 14.1001 5.90156 14.503 5.90156 15.0001C5.90156 15.4972 5.49862 15.9001 5.00156 15.9001H4.00156C3.23243 15.9001 2.49481 15.5946 1.95095 15.0507C1.4071 14.5069 1.10156 13.7692 1.10156 13.0001V4.0001C1.10156 3.23097 1.4071 2.49334 1.95095 1.94949C2.49481 1.40563 3.23243 1.1001 4.00156 1.1001H13.0016C13.7707 1.1001 14.5083 1.40563 15.0522 1.94949C15.596 2.49334 15.9016 3.23097 15.9016 4.0001V5.0001C15.9016 5.49715 15.4986 5.9001 15.0016 5.9001C14.5045 5.9001 14.1016 5.49715 14.1016 5.0001V4.0001C14.1016 3.70836 13.9857 3.42857 13.7794 3.22228C13.5731 3.01599 13.2933 2.9001 13.0016 2.9001H4.00156Z"
              fill="#191B08"
            />
          </svg>
        </v-button>
      </div>
    </div>

    <div class="about-card__desc">
      Силы эволюции и адаптации в популяциях - это тема, которая касается
      различных механизмов, которые определяют, какие особи выживают и
      размножаются в популяции, а какие нет.
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
