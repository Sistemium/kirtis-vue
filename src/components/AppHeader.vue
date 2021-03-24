<template lang="pug">

el-header.app-header(height="auto")

  el-button#history-toggle(
    type="primary"
    icon="el-icon-collection-tag"
    circle
    plain
    size="mini"
    @click="openDrawer"
  )

  app-menu

  el-drawer(
    title="Kirčiavimo Istorija"
    :visible.sync="drawer"
    direction="ltr"
    :destroy-on-close="true"
    :before-close="handleClose"
    :size="300"
  )
    resize()
      word-history(@click="onWord")

</template>
<script>

import { mapGetters, mapActions } from 'vuex';
import AppMenu from '@/components/AppMenu.vue';
import WordHistory from '@/components/WordHistory.vue';

import * as g from '@/store/kirtis/getters';
import * as a from '@/store/kirtis/actions';

const NAME = 'AppHeader';

export default {
  name: NAME,
  components: {
    AppMenu,
    WordHistory,
  },
  computed: {
    ...mapGetters({
      drawer: g.HISTORY_DRAWER,
    }),
  },
  methods: {

    ...mapActions({
      handleClose: a.HIDE_HISTORY,
      openDrawer: a.SHOW_HISTORY,
      // accentuate: a.ACCENTUATE_WORD,
    }),

    onWord(word) {
      this.$router.push({ path: `/krc/${word}` })
        .then(() => {
          this.handleClose();
        });
    },

  },
};

</script>
<style scoped lang="scss">

@import "../styles/variables";

.el-header {
  position: relative;
}

#history-toggle {
  position: absolute;
  left: 20px;
  top: 21px;
}

.word-history {
  padding: 0 $margin-right;
}

</style>
