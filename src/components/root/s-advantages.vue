<template>
  <div class="s-advantages__wrapper">
    <div class="s-advantages">
      <base-heading color="color-primary">Преимущества</base-heading>
      <div class="s-advantages__list">
        <list-item image="stonks">Интеграция в вашу CRM или самостоятельное использование</list-item>
        <list-item image="coins">Бесплатный тестовый ключ для iOS, Kotlin и ReactJS</list-item>
        <list-item image="neutron">Вариативность фильтраций и выборок</list-item>
        <list-item image="branch">Детальная статистика и аналитика</list-item>
        <list-item image="time">Установка за 10 минут</list-item>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from '@/components/base/base-heading.vue'
import ListItem from '@/components/base/list-item.vue'

export default {
  components: {
    BaseHeading,
    ListItem,
  },
}
</script>

<style>
.s-advantages__wrapper {
  display: flex;
  justify-content: center;
}

.s-advantages {
  height: 566px;
  width: var(--content-width);
  padding-top: 80px;
}

.s-advantages__list {
  margin-top: 65px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 54px 0;
}
</style>
