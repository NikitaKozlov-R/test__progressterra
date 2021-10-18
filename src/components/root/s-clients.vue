<template>
  <div class="s-clients__wrapper">
    <div class="s-clients">
      <base-heading color="color-primary">Сервис используют</base-heading>
      <div class="s-clients__items">
        <company-item image="gipfel" width="124px" height="auto">Gipfel</company-item>
        <company-item image="zemmarket" width="124px" height="auto">ZemZemMarket</company-item>
        <company-item image="ripcurl" width="124px" height="auto">RipCurl</company-item>
        <company-item image="lisa" width="124px" height="auto">Лиса</company-item>
        <div class="s-clients__items--gap">
          <company-item image="svoi" width="124px" height="auto">Свои</company-item>
          <company-item image="keypharm" width="124px" height="auto">KeyPharm</company-item>
        </div>
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
.s-clients__wrapper {
  padding: 160px 140px;
}
.s-clients {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.s-clients__items {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-top: 50px;
}
.s-clients__items--gap {
  display: flex;
  flex-wrap: wrap;
  gap: 112px;
  justify-content: center;
}
@media screen and (max-width: 900px) {
  .s-clients__wrapper {
    padding: 160px 0px;
    gap: 0px;
  }
  .s-clients__items {
    flex-flow: row wrap;
  }
  .s-clients__items--gap {
    flex-wrap: nowrap;
    gap: 50px;
  }
}
</style>
