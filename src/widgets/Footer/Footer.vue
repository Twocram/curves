<script setup lang="ts">
import logo from "@assets/logo.svg";
import smile from "@assets/smile.svg";
</script>

<template>
  <section class="footer-container">
    <div class="footer-top">
      <div class="footer-logo">
        <img class="footer-logo__img" :src="logo" alt="footer-logo" />
      </div>

      <nav class="footer-nav">
        <a href="#" class="footer-nav__link">Тарифы</a>
        <a href="#" class="footer-nav__link">Связаться с нами</a>
        <a href="#" class="footer-nav__link">Политика обработки данных</a>
        <a href="#" class="footer-nav__link">Оставить обратную связь</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom__caption">
        Автоматическая расшифровка аудио и видео в текст
      </div>

      <div class="footer-bottom__copyright">
        &copy; Шöпот by
        <img class="footer-smile" :src="smile" alt="footer-smile" /> СURVES и
        LABirint
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer-container {
  height: 160px;
  width: 100%;
  background: #ebe6d8;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
}

.footer-logo {
  cursor: pointer;
}

.footer-nav {
  display: flex;
}

.footer-nav__link {
  display: block;
  color: #191b08;
  line-height: 16.8px;
  text-decoration: underline;
  margin-right: 40px;
  font-size: 14px;
}

.footer-nav__link:last-child {
  margin-right: 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
}

.footer-bottom__caption {
  color: #191b08;
  font-size: 14px;
  line-height: 21px;
  max-width: 210px;
  width: 100%;
}

.footer-bottom__copyright {
  align-self: end;
  font-size: 14px;
  color: #191b08;
  line-height: 19.6px;
  display: flex;
  align-items: center;
}

.footer-smile {
  margin: 0 6px;
}
</style>
