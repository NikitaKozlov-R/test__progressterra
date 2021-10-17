<template>
  <h3 class="base-heading" :style="{ color: `var(--${color})`, textAlign: align }">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  props: {
    color: {
      required: false,
      type: String,
      default: 'color-primary',
    },
    align: {
      required: false,
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.base-heading {
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
}
@media screen and (max-width: 900px) {
  .base-heading {
    text-align: center;
    font-size: 35px;
  }
}
</style>
