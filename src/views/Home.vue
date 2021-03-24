<template lang="pug">

.home
  kirtis
  template(v-if="!results && !error")
    hello-world(msg="Kirčiavimas internetu")
    footer
      small &copy; Sistemium UAB

</template>

<script>

import Kirtis from '@/components/Kirtis.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { mapGetters } from 'vuex';
import * as g from '@/store/kirtis/getters';

export default {

  name: 'Home',

  components: {
    Kirtis,
    HelloWorld,
  },

  computed: mapGetters({
    results: g.ACCENTUATION_RESULTS,
    error: g.ACCENTUATION_ERROR,
  }),

};

</script>
<style lang="scss" scoped>

@import "../styles/variables";

.hello-world {
  margin: $margin-top + 10px auto;
}

small {
  color: $gray;
  font-size: 14px;
}

</style>
