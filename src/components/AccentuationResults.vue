<template lang="pug">

.accentuation-results

  .result(v-for="result in results" :key="result.id")

    strong.word {{ result.word }}

    .states

      el-tag.class(
        v-if="result.class"
        size="small"
        type="success"
      ) {{ result.class }}

      el-tag.state(
        v-for="item in result.state" :key="item"
        size="small"
        type=""
      ) {{ item }}

</template>
<script>

const NAME = 'AccentuationResults';

export default {
  name: NAME,

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

</style>
