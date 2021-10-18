<template>
  <div class="s-bonus__wrapper">
    <s-substrate top="0%" left="-20%" :mode="false" radius="20px">
      <div class="s-bonus">
        <div class="s-bonus__text">
          <h3 class="s-bonus__heading">iProBonus - это</h3>
          <p class="s-bonus__chapter">
            <strong class="s-about__details--bold">
              облачная платформа лояльности со сгораемыми бонусами. Один из сервисов компании ProgressTerra.
            </strong>
          </p>
          <p class="s-bonus__chapter">
            IProBonus – представляет собой
            <strong class="s-about__details--bold">мобильное приложение</strong>
            , брендированное под ваш магазин. Кроме того, iProBonus имеет
            <strong class="s-about__details--bold">открытые API</strong>
            , которые позволяют встраивать ее эффективный функционал в готовые мобильные приложения.
          </p>
          <p class="s-bonus__chapter--mrtop">
            <strong class="s-about__details--bold">Общайтесь с вашими покупателями</strong>
            с помощью рассылок и Push-уведомлений, дарите бонусы и проводите акции,
            <strong class="s-about__details--bold">собирайте анкетные данные и создавайте опросы</strong>
            , предоставляйте каталог и возможность совершать покупки онлайн.
          </p>
        </div>
        <div class="s-bonus__photo">
          <img
            class="s-bonus__img"
            src="../../assets/img/photos/iPad.jpg"
            alt="iPad, iPhone, SWatch и стилус на белом фоне"
          />
        </div>
      </div>
    </s-substrate>
  </div>
</template>

<script>
import SSubstrate from '@/components/helpers/s-substrate.vue'

export default {
  components: {
    SSubstrate,
  },
}
</script>

<style>
.s-bonus__wrapper {
  padding: 0 140px;
  margin-bottom: 80px;
}
.s-bonus {
  padding: 80px 62px 86px 58px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  z-index: 2;
}
.s-bonus__text {
  display: flex;
  flex-direction: column;
}
.s-bonus__heading {
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
  color: #fff;
  margin-bottom: 29px;
}
.s-bonus__chapter {
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  margin-top: 11px;
}
.s-bonus__chapter--mrtop {
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  margin-top: 20px;
}
.s-bonus__img {
  border-radius: 20px;
  margin-top: 64px;
}
@media screen and (max-width: 900px) {
  .s-bonus__wrapper {
    padding: 0 0;
    margin-bottom: 160px;
  }
  .s-bonus {
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
  }
  .s-bonus__img {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
}
</style>
