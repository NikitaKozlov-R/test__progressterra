<template>
  <div class="company-item">
    <div class="company-item__image">
      <img :src="images[image]" />
    </div>
    <p class="company-item__title">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      required: false,
      type: String,
      default: '',
      validator: (v) =>
        [
          '',
          'swift',
          'yandex',
          'kotlin',
          'dotnet',
          'azure',
          'react',
          'gipfel',
          'zemmarket',
          'ripcurl',
          'lisa',
          'svoi',
          'keypharm',
        ].includes(v),
    },
  },
  data: () => ({
    images: {
      swift: require('@/assets/img/icons/technologies/swift.png'),
      yandex: require('@/assets/img/icons/technologies/yandex.png'),
      kotlin: require('@/assets/img/icons/technologies/kotlin.png'),
      dotnet: require('@/assets/img/icons/technologies/dotnet.png'),
      azure: require('@/assets/img/icons/technologies/azure.png'),
      react: require('@/assets/img/icons/technologies/react.png'),
      gipfel: require('@/assets/img/icons/client-companies/gipfel.png'),
      zemmarket: require('@/assets/img/icons/client-companies/zemmarket.png'),
      ripcurl: require('@/assets/img/icons/client-companies/ripcurl.png'),
      lisa: require('@/assets/img/icons/client-companies/lisa.png'),
      svoi: require('@/assets/img/icons/client-companies/svoi.png'),
      keypharm: require('@/assets/img/icons/client-companies/keypharm.png'),
    },
  }),
}
</script>

<style>
.company-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.company-item__image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 212px;
}
.company-item__title {
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  color: var(--color-primary);
  margin-top: 16px;
}
</style>
