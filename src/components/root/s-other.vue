<template>
  <div class="s-other__wrapper">
    <div class="s-other">
      <div class="base-heading__wrap">
        <base-heading color="color-primary" align="center">
          Другие сервисы облачной платформы лояльности iProBonus
        </base-heading>
      </div>
      <div class="s-other__inner">
        <s-substrate top="-8%" left="100%" :mode="true" radius="19px">
          <div class="s-other__item">
            <div class="s-other__article">
              <div>
                <h3 class="s-other__heading">Cгораемые рейтинги</h3>
                <p class="s-other__chapter">
                  С этим сервисом вы сможете составлять и присваивать рейтинги вашим клиентам или пользователям из
                  различных источников и назначать время жизни для каждого начисления рейтинга. Поощрайте ваших
                  пользователей или клиентов за стремление повысить рейтинг и получайте клентов на всю жизнь!
                </p>
              </div>
              <base-button width="414px">Попробовать бесплатно</base-button>
            </div>
            <div class="s-other__logo">
              <ratings-logo />
            </div>
          </div>
        </s-substrate>
      </div>
      <div class="s-other__inner">
        <s-substrate top="-20%" left="-75%" :mode="true" radius="19px">
          <div class="s-other__item">
            <div class="s-other__article">
              <div>
                <h3 class="s-other__heading">Мессенджер</h3>
                <p class="s-other__chapter">
                  Дайте возможность клиентам или пользователям общаться с вами. Наш мессенджер будет собирать все ваши
                  заявки и обращения в одном месте. Больше вы не пропустите ни одного сообщения, а также сможете
                  рассылать в месенжере полезную информацию об акциях и скидках!
                </p>
              </div>
              <base-button width="414px">Попробовать бесплатно</base-button>
            </div>
            <div class="s-other__logo">
              <messenger-logo />
            </div>
          </div>
        </s-substrate>
      </div>
      <div class="s-other__inner">
        <s-substrate top="0%" left="0%" :mode="true" radius="19px">
          <div class="s-other__item">
            <div class="s-other__article">
              <div>
                <h3 class="s-other__heading">Сгораемые бонусы</h3>
                <p class="s-other__chapter">
                  Бонусная программа лояльности с ограниченным периодом использования, мотивирует ваши клиентов
                  возвращаться к вам за покупками.
                </p>
              </div>
              <base-button width="414px">Попробовать бесплатно</base-button>
            </div>
            <div class="s-other__logo">
              <bonus-logo />
            </div>
          </div>
        </s-substrate>
      </div>
      <div class="s-other__button-wrapper">
        <base-button width="504px">Смотреть все сервисы компании</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from '@/components/base/base-heading.vue'
import SSubstrate from '@/components/helpers/s-substrate.vue'
import BaseButton from '@/components/base/base-button.vue'
import RatingsLogo from '../../assets/img/logos/ratings-logo.vue'
import MessengerLogo from '../../assets/img/logos/messenger-logo.vue'
import BonusLogo from '../../assets/img/logos/bonus-logo.vue'

export default {
  components: {
    BaseHeading,
    SSubstrate,
    BaseButton,
    RatingsLogo,
    MessengerLogo,
    BonusLogo,
  },
}
</script>

<style>
.s-other__wrapper {
  padding: 0 140px;
}
.s-other {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.base-heading__wrap {
  width: 524px;
  margin-bottom: 70px;
}
.s-other__inner {
  margin-bottom: 50px;
}
.s-other__item {
  display: flex;
  position: relative;
  z-index: 2;
  padding: 0 45px 50px 70px;
  height: 420px;
}
.s-other__article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.s-other__heading {
  font-size: 32px;
  line-height: 39px;
  font-weight: 700;
  color: #fff;
  margin-top: 58px;
  margin-bottom: 30px;
}
.s-other__chapter {
  font-weight: 300;
  font-size: 20px;
  line-height: 132%;
  color: #fff;
}
.s-other__logo {
  margin-top: 36px;
}
.s-other__button-wrapper {
  margin-bottom: 120px;
}
</style>
