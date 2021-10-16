<template>
  <div class="s-company__wrapper">
    <div class="s-company">
      <base-heading color="color-primary">Технологии, которые мы используем</base-heading>
      <div class="s-company__items">
        <company-item image="swift">SwiftUI</company-item>
        <company-item image="yandex">ЯндексОблако</company-item>
        <company-item image="kotlin">Kotlin</company-item>
        <company-item image="dotnet">.NET Core</company-item>
        <company-item image="azure">MicrosoftAzure</company-item>
        <company-item image="react">ReactJS</company-item>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from '@/components/base/base-heading.vue'
import CompanyItem from '@/components/base/company-item.vue'

export default {
  components: {
    BaseHeading,
    CompanyItem,
  },
}
</script>

<style>
.s-company__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 118px;
}
.s-company {
  width: calc(var(--content-width) + 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.s-company__items {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
