<template>
  <div class="s-intro">
    <base-header />
    <div class="wrapper">
      <div class="s-main">
        <div class="s-main__logo">
          <s-main-logo />
        </div>
        <h2 class="s-main__subtitle">
          Получайте дательную глубокую аналитику
          <br />
          с помощью сегментации клиентских баз
        </h2>
        <button class="s-main__button">Попробовать бесплатно</button>
      </div>
    </div>
  </div>
</template>

<script>
import SMainLogo from '@/assets/img/logos/s-main-logo.vue'
import BaseHeader from '@/components/base/base-header.vue'

export default {
  components: {
    SMainLogo,
    BaseHeader,
  },
}
</script>

<style>
.s-intro {
  width: 100%;
  background-image: url('~@/assets/img/photos/s-intro-background.jpg');
  background-position: right;
  background-repeat: no-repeat;
}
.s-main {
  padding: 88px 0 218px 0;
}
.s-main__logo {
  margin-bottom: 7px;
}
.s-main__subtitle {
  font-size: 22px;
  font-weight: 400;
  color: var(--color-primary);
  line-height: 26.82px;
  margin-bottom: 46px;
}
.s-main__button {
  width: 414px;
  height: 87px;
  border-radius: 20px;
  background: var(--gradient-primary);
  outline: none;
  border: none;
  font-size: 25px;
  font-weight: normal;
  color: #fff;
}
</style>
