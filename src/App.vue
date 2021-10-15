<template>
  <s-intro />
  <s-about />
</template>

<script>
import SIntro from '@/components/root/s-intro.vue'
import SAbout from '@/components/root/s-about.vue'

export default {
  name: 'App',
  components: {
    SIntro,
    SAbout,
  },
}
</script>
