<template>
  <button class="base-button" :style="{ width: width }">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: '414px',
    },
  },
}
</script>

<style>
.base-button {
  height: 87px;
  font-size: 25px;
  line-height: 30px;
  font-weight: 300;
  color: #fff;
  border-radius: 20px;
  background: var(--gradient-primary);
  border: none;
  outline: none;
}
</style>
