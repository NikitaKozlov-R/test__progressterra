<template>
  <div class="s-intro">
    <header class="s-header">
      <div class="s-header__logo">
        <s-header-logo />
      </div>
      <div class="s-header__menu">
        <a href="#" class="s-header__link">О сервисе</a>
        <a href="#" class="s-header__link">Преимущества</a>
        <a href="#" class="s-header__link">Как использовать</a>
        <a href="#" class="s-header__link">IProBonus</a>
        <a href="#" class="s-header__link">Другие сервисы</a>
      </div>
    </header>
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
import SHeaderLogo from '@/assets/img/logos/s-header-logo.vue'
import SMainLogo from '@/assets/img/logos/s-main-logo.vue'

export default {
  components: {
    SHeaderLogo,
    SMainLogo,
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
.s-header {
  height: 109px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.s-header__logo {
  margin: 6px 0 0 45px;
}
.s-header__menu {
  display: flex;
  gap: 31px;
  margin-right: 50px;
}
.s-header__link {
  font-size: 18px;
  font-weight: 300;
  color: var(--color-primary);
  text-decoration: none;
  outline: none;
  border: none;
}
.s-header__link:focus {
  outline: none;
}
.s-header__link::-moz-focus-inner {
  border: 0;
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
