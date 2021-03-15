<template lang="pug">

form.kirtis()

  search-input(
    v-model="word"
    @select="doKirtis"
    ref="inputWord"
    placeholder="Sukirčiuoti žodį"
    :fetch-suggestions="querySearch"
  )

  el-button(@click="onSubmit" type="primary" native-type="submit") Kirčiuoti

  accentuation-results(:results="results")

</template>
<script>

import SearchInput from '@/components/SearchInput.vue';
import AccentuationResults from '@/components/AccentuationResults.vue';

import * as kirtis from '@/services/kirtis';

const NAME = 'Kirtis';

export default {

  name: NAME,

  components: {
    AccentuationResults,
    SearchInput,
  },

  methods: {

    onSubmit(e) {
      e.preventDefault();
      this.doKirtis();
      e.returnValue = false;
      return false;
    },

    async doKirtis(word = this.word) {
      if (!word) {
        this.results = [];
        return;
      }
      this.results = await kirtis.accent(word);
    },

    querySearch(queryString, cb) {
      kirtis.suggestion(queryString)
        .then(cb)
        .catch(e => this.$error('querySearch', e));
    },

  },

  data() {
    return {
      word: '',
      results: [],
    };
  },

  mounted() {
    const { inputWord } = this.$refs;
    if (inputWord) {
      this.$nextTick(() => inputWord.$refs.input.focus());
    }
  },

};

</script>
<style scoped lang="scss">

@import "../styles/variables";

.el-button {
  margin-left: $margin-right;
}

</style>
