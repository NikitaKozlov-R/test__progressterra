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
        <img
          class="s-main__photo"
          src="../../assets/img/photos/s-intro-background.jpg"
          alt="Футуристический дизайн и рука"
        />
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
  width: 457px;
  height: 102px;
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
  position: relative;
  z-index: 1;
}
.s-main__photo {
  display: none;
}
@media screen and (max-width: 900px) {
  .s-intro {
    background-image: unset;
    overflow-x: hidden;
  }
  .s-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }
  .s-main__logo {
    margin-bottom: 7px;
    width: 234px;
    height: 78px;
  }
  .s-main__subtitle {
    text-align: center;
    width: 90%;
  }
  .s-main__button {
    width: 100%;
  }
  .s-main__photo {
    display: block;
    height: 410px;
    margin-left: -230px;
    margin-top: -10px;
    position: relative;
    z-index: 0;
  }
}
</style>
