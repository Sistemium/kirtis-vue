<template lang="pug">

form.kirtis()

  search-input(
    v-model="word"
    @select="doKirtis"
    ref="inputWord"
    placeholder="Sukirčiuoti žodį"
    :fetch-suggestions="querySearch"
    :prefix-icon="inputIcon"
    :debounce="400"
  )

  el-button(@click="onSubmit" type="primary" native-type="submit") Kirčiuoti

  resize(:padding="0")
    accentuation-results(v-if="results" :results="results")
    el-alert(
      type="error"
      v-if="error"
      show-icon
    )
      template(slot="title")
        span(v-html="error")

</template>
<script>

import trim from 'lodash/trim';
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
      e.returnValue = false;
      this.doKirtis()
        .then(() => {
          this.$nextTick(() => {
            this.$refs.inputWord.$refs.input.close();
          });
        });
      return false;
    },

    async doKirtis(input) {

      const word = trim(input || this.word);

      this.error = null;

      if (!word) {
        this.results = [];
        return;
      }

      this.busy = true;

      try {
        this.results = await kirtis.accent(word);
      } catch (e) {

        // TODO: error reporting UI
        this.$error(e.message);
        this.results = null;
        this.error = `Žodis <strong>${word}</strong> nerastas`;

      }

      this.busy = false;

    },

    querySearch(queryString, cb) {
      kirtis.suggestion(queryString)
        .then(cb)
        .then(() => {
          this.$refs.inputWord.$refs.input.activated = true;
        })
        .catch(e => this.$error('querySearch', e));
    },

  },

  computed: {
    inputIcon() {
      return this.busy ? 'el-icon-loading' : 'el-icon-search';
    },
  },

  data() {
    return {
      word: '',
      results: [],
      busy: false,
      error: null,
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

@include responsive-only(xxs) {

  form {
    display: flex;
    flex-direction: column;
    padding: 0 $margin-top;
    height: 100%;
  }

  .el-button {
    width: 100%;
    //display: block;
    margin: $margin-right auto;
  }

}

.el-alert {
  margin: 15px auto;
  max-width: 300px;
}

.stm-resize {
  margin-top: 15px;
}

</style>
