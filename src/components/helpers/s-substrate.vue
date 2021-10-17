<template>
  <div class="s-substrate" :style="{ borderRadius: radius }">
    <slot />
    <div class="s-substrate__circles">
      <div v-if="light" class="s-substrate__wrapper">
        <blur-circles v-if="mode" :style="{ marginLeft: left, marginTop: top }" />
        <big-blur-circles v-else :style="{ marginLeft: left, marginTop: top }" />
      </div>
    </div>
  </div>
</template>

<script>
import BigBlurCircles from '@/assets/img/graphics/big-blur-circles.vue'
import BlurCircles from '@/assets/img/graphics/blur-circles.vue'

export default {
  components: {
    BigBlurCircles,
    BlurCircles,
  },
  props: {
    top: {
      type: String,
      required: false,
      default: '',
    },
    left: {
      type: String,
      required: false,
      default: '',
    },
    mode: {
      type: Boolean,
      required: false,
      default: false,
    },
    radius: {
      type: String,
      required: false,
      default: '0px',
    },
    light: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>

<style>
.s-substrate {
  width: 100%;
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
}
.s-substrate__circles {
  position: absolute;
  top: 70px;
  left: 300px;
  z-index: 0;
}
</style>
