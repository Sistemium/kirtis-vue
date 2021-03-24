<template lang="pug">

.word-history

  .list-group(v-if="words.length")
    .list-group-item(
      v-for="word in words" :key="word"
      @click="$emit('click', word)"
    ) {{ word }}

  el-alert(
    v-else
    title="Čia būs rodomas sukirčiuotų žodžių sąrašas"
    :closable="false"
  )

</template>
<script>

import { mapGetters } from 'vuex';
import { SAVED_WORDS } from '@/store/kirtis/getters';

const NAME = 'WordHistory';

export default {
  name: NAME,
  computed: mapGetters({
    words: SAVED_WORDS,
  }),
};

</script>
<style scoped lang="scss">

@import "../styles/variables";

</style>
