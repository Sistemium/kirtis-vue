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
    @clear="clearResults"
  )

  el-button(
    @click="onSubmit"
    type="primary"
    native-type="submit"
    :disabled="!word"
  ) Kirčiuoti

  resize(:padding="0")
    accentuation-results(:results="results" v-if="results && results.length")
    el-alert(
      type="error"
      v-if="error"
      show-icon
      @close="clearResults"
    )
      template(slot="title")
        span(v-html="error")

</template>
<script>

import { mapActions, mapGetters } from 'vuex';
import trim from 'lodash/trim';
import SearchInput from '@/components/SearchInput.vue';
import AccentuationResults from '@/components/AccentuationResults.vue';
import * as kirtis from '@/services/kirtis';

import * as a from '@/store/kirtis/actions';
import * as g from '@/store/kirtis/getters';

const NAME = 'Kirtis';

export default {

  name: NAME,

  components: {
    AccentuationResults,
    SearchInput,
  },

  methods: {

    ...mapActions({
      accentuateWord: a.ACCENTUATE_WORD,
      clearResults: a.CLEAR_RESULTS,
    }),

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

      if (!word) {
        this.clearResults();
        return;
      }

      this.busy = true;

      await this.accentuateWord(word);
      await this.updateRoute(word);
      this.focusInput();

      this.busy = false;

    },

    updateRoute(word) {

      const { $route } = this;

      if ($route.query.word === word) {
        return;
      }

      const query = word ? { word } : {};

      this.$router.push({
        ...$route,
        query,
      })
        .catch(e => this.$error(e));

    },

    querySearch(queryString, cb) {
      kirtis.suggestion(queryString)
        .then(cb)
        .then(() => {
          this.$refs.inputWord.$refs.input.activated = true;
        })
        .catch(e => this.$error('querySearch', e));
    },

    focusInput() {
      const { inputWord } = this.$refs;
      if (inputWord) {
        this.$nextTick(() => inputWord.$refs.input.focus());
      }
    },

  },

  computed: {

    ...mapGetters({
      results: g.ACCENTUATION_RESULTS,
      error: g.ACCENTUATION_ERROR,
    }),

    inputIcon() {
      return this.busy ? 'el-icon-loading' : 'el-icon-search';
    },

  },

  data() {
    return {
      word: '',
      busy: false,
    };
  },

  mounted() {
    this.focusInput();
  },

  created() {
    const { word } = this.$route.query;
    if (word) {
      this.word = word;
      this.doKirtis()
        .catch(e => this.$error(e));
    }
  },

  watch: {
    word(newWord, oldWord) {
      if (oldWord && !newWord) {
        this.updateRoute();
      }
    },
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
    padding: 0 $margin-right;
    height: 100%;
  }

  .el-button {
    width: 100%;
    //display: block;
    margin: $margin-right auto 0;
  }

}

.el-alert {
  margin: $margin-top auto;
  max-width: 300px;
}

.stm-resize > * {
  margin-top: $margin-top;
}

</style>
