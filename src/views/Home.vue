<template lang="pug">

.home
  kirtis(ref="kirtis" @input="onResults")
  hello-world(v-if="!results" msg="Kirčiavimas internetu")

</template>

<script>

import Kirtis from '@/components/Kirtis.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {

  name: 'Home',

  components: {
    Kirtis,
    HelloWorld,
  },

  data() {
    return { results: null };
  },

  methods: {
    onResults(results) {
      this.results = results;
    },
  },

};

</script>
<style lang="scss" scoped>

@import "../styles/variables";

.hello-world {
  margin-top: $margin-top + 10px;
}

</style>
