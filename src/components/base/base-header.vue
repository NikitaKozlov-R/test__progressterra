<template>
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
    <div class="s-header__menu-mobile">
      <img src="../../assets/img/graphics/menu.png" />
    </div>
  </header>
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
.s-header__menu-mobile {
  display: none;
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
@media screen and (max-width: 900px) {
  .s-header {
    height: auto;
  }
  .s-header__logo {
    margin: 55px 0 0 20px;
  }
  .s-header__menu {
    display: none;
  }
  .s-header__menu-mobile {
    display: flex;
    margin-right: 20px;
    margin-top: 42px;
  }
}
</style>
