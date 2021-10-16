<template>
  <div class="s-substrate">
    <slot />
    <div class="s-substrate__circles">
      <big-blur-circles />
    </div>
  </div>
</template>

<script>
import BigBlurCircles from '@/assets/img/graphics/big-blur-circles.vue'

export default {
  components: {
    BigBlurCircles,
  },
}
</script>

<style>
.s-substrate {
  width: 100%;
  background-color: var(--color-background);
  position: relative;
}
.s-substrate__circles {
  position: absolute;
  top: 70px;
  left: 300px;
  z-index: 0;
}
</style>
