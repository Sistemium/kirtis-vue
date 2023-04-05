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
    :disabled="!word || busy"
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

import result from 'lodash/result';
import { mapActions, mapGetters } from 'vuex';
import trim from 'lodash/trim';
import SearchInput from '@/components/SearchInput.vue';
import AccentuationResults from '@/components/AccentuationResults.vue';
import * as kirtis from '@/services/kirtis';

import * as a from '@/store/kirtis/actions';
import * as g from '@/store/kirtis/getters';

const NAME = 'Kirtis';
const WORD_PATH = '$route.params.word';

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

      if ($route.params.word === word) {
        return;
      }

      const path = word ? `/krc/${word}` : '/';

      this.$router.push({ path })
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

    updateWord(word) {
      this.word = word;
      const { inputWord } = this.$refs;
      const input = result(inputWord, '$refs.input.$refs.input.getInput');
      if (input) {
        input.value = word || '';
      }
      this.doKirtis()
        .catch(e => this.$error(e));
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
    this.$watch(WORD_PATH, this.updateWord, { immediate: true });
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

.stm-resize {
  overflow-y: auto;
  > * {
    margin-top: $margin-top;
  }
}

</style>
