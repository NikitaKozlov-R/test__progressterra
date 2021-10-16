<template>
  <s-substrate :mode="true">
    <div class="s-about">
      <div class="s-about__inner">
        <img :src="aboutImage" alt="Картинка с компьютером MacBook Pro и листом в стакане" class="s-about__image" />
        <div class="s-about__text">
          <base-heading color="color-light-about">О сервисе</base-heading>

          <div class="s-about__details-wrapper">
            <p class="s-about__details">
              Сервис работы с сегментами клиентов дает возможность более
              <strong class="s-about__details--bold">
                глубокого изучения
                <br />
                и фильтрации вашей аудитории.
              </strong>
              Предоставляет API для создания статических сегментов с четким набором клиентов и динамических сегментов
              <br />
              с изменяющимся пулом клиентов.
            </p>
            <p class="s-about__details">
              Благодаря ISmart вы сможете
              <strong class="s-about__details--bold">провести детальную аналитику вашей базы</strong>
              и использовать эти данные при создании рекламных кампаний и любых других маркетинговых активностей.
            </p>
            <p class="s-about__details">
              Протестируйте
              <strong class="s-about__details--bold">бесплатно</strong>
              уже
              <strong class="s-about__details--bold">сегодня</strong>
              !
            </p>
          </div>
        </div>
      </div>
    </div>
  </s-substrate>
</template>

<script>
import SSubstrate from '@/components/helpers/s-substrate.vue'
import BaseHeading from '@/components/base/base-heading.vue'

export default {
  components: {
    SSubstrate,
    BaseHeading,
  },

  data: () => ({
    aboutImage: require('@/assets/img/photos/about.jpg'),
  }),
}
</script>

<style>
.s-about {
  height: 601px;
  display: flex;
  position: relative;
  z-index: 1;
}

.s-about__inner {
  align-self: flex-end;
  display: flex;
  gap: 130px;
}

.s-about__text {
  padding: 16px 0;
}

.s-about__details-wrapper {
  margin-top: 70px;
  width: 553px;
}

.s-about__details {
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-light-about);
}

.s-about__details--bold {
  font-weight: 600;
}

.s-about__details:not(:last-of-type) {
  margin-bottom: 24px;
}

.s-about__image {
  border-radius: 0px 20px 20px 0px;
}
</style>
