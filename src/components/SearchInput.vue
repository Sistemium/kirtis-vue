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
  @keydown.esc.native="onEscape"
  @clear="$emit('clear')"
)

</template>
<script>

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

    onEscape() {
      this.$refs.input.close();
    },

    onSelect() {
      this.$nextTick(() => {
        this.$emit('select', this.searchText);
      });
    },

    blur() {
      this.$refs.input.$refs.input.blur();
    },

  },

  created() {
    this.$watch('searchText', value => this.$emit('input', value));
  },

};

</script>
<style scoped lang="scss">

@import "../styles/variables";

.el-input {
  width: unset;
}

</style>
