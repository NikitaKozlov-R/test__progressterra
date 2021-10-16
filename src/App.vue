<template>
  <s-intro />
  <s-about />
  <s-advantages />
  <s-manual />
  <s-company />
  <s-exemples />
</template>

<script>
import SIntro from '@/components/root/s-intro.vue'
import SAbout from '@/components/root/s-about.vue'
import SAdvantages from '@/components/root/s-advantages.vue'
import SManual from '@/components/root/s-manual.vue'
import SCompany from '@/components/root/s-company.vue'
import SExemples from '@/components/root/s-exemples.vue'

export default {
  name: 'App',
  components: {
    SIntro,
    SAbout,
    SAdvantages,
    SManual,
    SCompany,
    SExemples,
  },
}
</script>
