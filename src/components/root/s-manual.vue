<template>
  <div class="s-manual__wrapper">
    <div class="s-manual">
      <base-heading color="color-primary">Как использовать</base-heading>
      <div class="s-manual__list">
        <list-item number="1">
          Нажмите на кнопку
          <br />
          “Попробовать бесплатно”
        </list-item>
        <list-item number="2">После нажатия копки, вы попадете на страницу с тестовым ключом доступа</list-item>
        <list-item number="3">
          Скачайте готовые компоненты
          <br />
          и передайте их в ваш отдел IT
        </list-item>
        <list-item number="4">На установку у вас уйдет 10 минут, после этого продуктом можно пользоваться</list-item>
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
.s-manual__wrapper {
  display: flex;
  justify-content: center;
}
.s-manual {
  height: 345px;
  width: var(--content-width);
}
.s-manual__list {
  margin-top: 79px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
@media screen and (max-width: 900px) {
  .s-manual__list {
    margin-top: 79px;
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
  .s-manual__wrapper {
    padding: 0 20px;
    margin-bottom: 160px;
  }
  .s-manual {
    height: auto;
    width: auto;
  }
}
</style>
