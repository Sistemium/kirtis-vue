<template lang="pug">

el-tooltip.tip-tag(:content="tip || tag")
  el-tag(size="small" :type="type" :effect="effect") {{ tag }}

</template>
<script>

const NAME = 'TipTag';

export default {

  name: NAME,

  props: {
    tag: String,
    tip: String,
    type: {
      type: String,
    },
    effect: {
      type: String,
    },
  },

};

</script>
<style scoped lang="scss">

@import "../styles/variables";

</style>
