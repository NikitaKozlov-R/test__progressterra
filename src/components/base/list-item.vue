<template>
  <div v-if="image" class="list-item list-item--image">
    <div class="list-item__mark">
      <img :src="images[image]" rel="icon" />
    </div>
    <p class="list-item__text">
      <slot />
    </p>
  </div>
  <div v-else class="list-item list-item--number">
    <div class="list-item__number">
      {{ number }}
    </div>
    <p class="list-item__text">
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
      validator: (v) => ['', 'branch', 'coins', 'neutron', 'stonks', 'time'].includes(v),
    },

    number: {
      required: false,
      type: String,
      default: '',
    },
  },

  data: () => ({
    images: {
      branch: require('@/assets/img/icons/advantages/branch.png'),
      coins: require('@/assets/img/icons/advantages/coins.png'),
      neutron: require('@/assets/img/icons/advantages/neutron.png'),
      stonks: require('@/assets/img/icons/advantages/stonks.png'),
      time: require('@/assets/img/icons/advantages/time.png'),
    },
  }),
}
</script>

<style>
.list-item {
  display: flex;
}

.list-item--image {
  width: 33.3333%;
  gap: 20px;
}

.list-item--number {
  display: grid;
  grid-template-columns: 64px 1fr;
}

.list-item__number {
  font-weight: 300;
  font-size: 60px;
  color: var(--color-primary);
}

.list-item__text {
  font-weight: 300;
  font-size: 25px;
  color: var(--color-primary);
  line-height: 30px;
}
</style>
