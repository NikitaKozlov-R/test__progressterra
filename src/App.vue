<template>
  <s-intro />
  <s-about />
  <s-advantages />
  <s-manual />
  <s-company />
  <s-exemples />
  <s-clients />
  <s-bonus />
  <s-practice />
  <s-other />
  <base-header />
</template>

<script>
import SIntro from '@/components/root/s-intro.vue'
import SAbout from '@/components/root/s-about.vue'
import SAdvantages from '@/components/root/s-advantages.vue'
import SManual from '@/components/root/s-manual.vue'
import SCompany from '@/components/root/s-company.vue'
import SExemples from '@/components/root/s-exemples.vue'
import SClients from '@/components/root/s-clients.vue'
import SBonus from '@/components/root/s-bonus.vue'
import SPractice from '@/components/root/s-practice.vue'
import SOther from '@/components/root/s-other.vue'
import BaseHeader from '@/components/base/base-header.vue'

export default {
  name: 'App',
  components: {
    SIntro,
    SAbout,
    SAdvantages,
    SManual,
    SCompany,
    SExemples,
    SClients,
    SBonus,
    SPractice,
    SOther,
    BaseHeader,
  },
}
</script>
