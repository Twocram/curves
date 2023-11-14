<script setup lang="ts">
import logo from "@assets/logo.svg";
import profile from "@assets/profile.svg";
</script>

<template>
  <div class="header-container">
    <div class="header-logo">
      <img :src="logo" alt="logo" />
    </div>

    <div class="header-menu">
      <div class="tariff-container">
        <div class="tariff-item">
          <div class="tariff-item__title">Тариф</div>
          <div class="tariff-item__value">Начальный</div>
        </div>

        <div class="tariff-item">
          <div class="tariff-item__title">Остаток</div>
          <div class="tariff-item__value">15 мин</div>
        </div>
      </div>

      <div class="profile-container">
        <img :src="profile" alt="profile" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  background: #ffffff;
  width: 100%;
  border-bottom: 1px solid #c7c7c7;
  display: flex;
  justify-content: space-between;
}

.header-logo {
  cursor: pointer;
  padding: 20px 0 19px 20px;
}

.header-menu {
  display: flex;
  padding: 11px 12px 10px 0;
}

.tariff-container {
  display: flex;
  background: #191b08;
  border-radius: 72px;
  padding: 4px 24px;
  margin-right: 10px;
}

.tariff-item {
  margin-right: 16px;
  display: flex;
  flex-direction: column;
}

.tariff-item__title {
  color: #d9d9d9;
  font-size: 8px;
  line-height: 9.6px;
  margin-bottom: 2px;
}

.tariff-item__value {
  color: #e1fe03;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.4px;
}

.profile-container {
  cursor: pointer;
  width: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  border-radius: 72px;
  border: 1px solid #c7c7c7;
}

.profile-container:hover {
  background: #e1fe03;
  border: 1px solid #e1fe03;
  transition: 0.3s ease-in-out;
}
</style>
