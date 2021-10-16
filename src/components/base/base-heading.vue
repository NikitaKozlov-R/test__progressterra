<template>
  <h3 class="base-heading" :style="{ color: `var(--${color})` }">
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
  },
}
</script>

<style>
.base-heading {
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
}
</style>
