<template>
  <div class="s-practice__wrapper">
    <div class="s-practice">
      <base-heading color="color-primary">Лучшие практики</base-heading>
      <div class="s-practice__inner">
        <s-substrate :light="false" radius="19px">
          <div class="s-practice__item">
            <h4 class="s-practice__heading">Интеграция в вашу CRM</h4>
            <p class="s-practice__chapter">
              У вас есть CRM система, которая полностью не удовлетворяет вашим требованиям, а переходить на другую долго
              и дорого. Интегрируйте любый наши облачные сервисы в свою CRM и увеличивайте продажи с минимальными
              затратами
            </p>
          </div>
        </s-substrate>
        <s-substrate :light="false" radius="19px">
          <div class="s-practice__item">
            <h4 class="s-practice__heading">Самостоятельное использование</h4>
            <p class="s-practice__chapter">
              Все наши сервисы представляют собой облачные коробочные решения. Мы можем создать вам брендированное
              приложение, сайт или CRM систему с нуля в кратчайшие сроки, используя уже разработанные макеты
            </p>
          </div>
        </s-substrate>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from '@/components/base/base-heading.vue'
import SSubstrate from '@/components/helpers/s-substrate.vue'

export default {
  components: {
    BaseHeading,
    SSubstrate,
  },
}
</script>

<style>
.s-practice__wrapper {
  padding: 0 140px 160px 140px;
}
.s-practice {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
}
.s-practice__inner {
  display: flex;
  gap: 40px;
}
.s-practice__item {
  padding: 0 45px;
  height: 274px;
}
.s-practice__heading {
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  color: #fff;
  padding-top: 40px;
}
.s-practice__chapter {
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  padding-top: 19px;
}
</style>
