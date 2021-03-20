<template lang="pug">

.accentuation-results

  .result(v-for="result in results" :key="result.id")

    .word
      strong {{ result.word }}
      tip-tag.class(
        v-if="result.class"
        :tag="result.class"
        type="info"
        effect="plain"
      )

    .states

      tip-tag.state(
        v-for="item in result.state" :key="item"
        :tag="item"
      )

</template>
<script>

import TipTag from '@/components/TipTag.vue';

const NAME = 'AccentuationResults';

export default {
  name: NAME,
  components: { TipTag },
  props: {
    results: Array,
  },

};

</script>
<style scoped lang="scss">

@import "../styles/variables";

.result {
  margin: $margin-top;
}

.state, .class {
  margin: $margin-right;
  @include responsive-only(xxs) {
    margin: $margin-right/2;
  }
}

.el-tag {
  font-size: 13px;
}

</style>
