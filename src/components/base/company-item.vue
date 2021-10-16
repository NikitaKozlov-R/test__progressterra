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
      validator: (v) => ['', 'swift', 'yandex', 'kotlin', 'dotnet', 'azure', 'react'].includes(v),
    },
  },
  data: () => ({
    images: {
      swift: require('@/assets/img/icons/client-companies/swift.png'),
      yandex: require('@/assets/img/icons/client-companies/yandex.png'),
      kotlin: require('@/assets/img/icons/client-companies/kotlin.png'),
      dotnet: require('@/assets/img/icons/client-companies/dotnet.png'),
      azure: require('@/assets/img/icons/client-companies/azure.png'),
      react: require('@/assets/img/icons/client-companies/react.png'),
    },
  }),
}
</script>

<style>
.company-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.company-item__title {
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  color: var(--color-primary);
  margin-top: 33px;
}
</style>
