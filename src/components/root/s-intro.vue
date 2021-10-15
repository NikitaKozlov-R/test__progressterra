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
      <div class="s-welcome"></div>
    </div>
  </div>
</template>

<script>
import SHeaderLogo from '@/assets/img/logos/s-header-logo.vue'

export default {
  components: {
    SHeaderLogo,
  },
}
</script>

<style>
.s-intro {
  width: 100%;
  background-image: url('../../assets/img/photos/s-intro-background.jpg');
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
</style>
