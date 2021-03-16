<template lang="pug">

el-autocomplete.search-input(
  ref="input"
  :prefix-icon="prefixIcon"
  v-model="searchText"
  :clearable="true"
  :placeholder="placeholder"
  :size="size"
  :fetch-suggestions="fetchSuggestions"
  @select="onSelect"
  :trigger-on-focus="false"
  :debounce="debounce"
)

</template>
<script>

import debounce from 'lodash/debounce';

export default {

  name: 'SearchInput',

  props: {
    size: {
      type: String,
      default: 'normal',
    },
    prefixIcon: {
      type: String,
      default: 'el-icon-search',
    },
    value: String,
    placeholder: {
      default: 'paieška',
      type: String,
    },
    debounce: {
      type: Number,
      default: 600,
    },
    fetchSuggestions: {
      type: Function,
      default: undefined,
    },
  },

  data() {
    return { searchText: this.value };
  },

  methods: {

    onSelect() {
      this.$nextTick(() => {
        this.$emit('select', this.searchText);
      });
    },

  },

  computed: {

    onFetchSuggestions() {
      return debounce(this.fetchSuggestions, this.debounce);
    },

  },

  created() {
    this.$watch('searchText', debounce(value => this.$emit('input', value), this.debounce));
  },

};

</script>
<style scoped lang="scss">

@import "../styles/variables";

.el-input {
  width: unset;
}

</style>
