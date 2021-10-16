<template>
  <div class="s-other__wrapper">
    <div class="s-other">
      <div class="base-heading__wrap">
        <base-heading color="color-primary">Другие сервисы облачной платформы лояльности iProBonus</base-heading>
      </div>
      <s-substrate top="-20%" left="80%" :mode="true" radius="19px">
        <div class="s-other__item">
          <div class="s-other__article">
            <h3 class="s-other__heading">Cгораемые рейтинги</h3>
            <p class="s-other__chapter">
              С этим сервисом вы сможете составлять и присваивать рейтинги вашим клиентам или пользователям из различных
              источников и назначать время жизни для каждого начисления рейтинга. Поощрайте ваших пользователей или
              клиентов за стремление повысить рейтинг и получайте клентов на всю жизнь!
            </p>
            <base-button width="414px">Попробовать бесплатно</base-button>
          </div>
          <div class="s-other__logo">
            <ratings-logo />
          </div>
        </div>
      </s-substrate>
    </div>
  </div>
</template>

<script>
import BaseHeading from '@/components/base/base-heading.vue'
import SSubstrate from '@/components/helpers/s-substrate.vue'
import BaseButton from '@/components/base/base-button.vue'
import RatingsLogo from '../../assets/img/logos/ratings-logo.vue'

export default {
  components: {
    BaseHeading,
    SSubstrate,
    BaseButton,
    RatingsLogo,
  },
}
</script>
