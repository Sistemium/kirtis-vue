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
    :modal="isModal"
  )

    resize()
      word-history(@click="onWord")

      el-button#clear-history(
        @click="clearHistory"
        type="warning"
        plain
        v-if="hasHistory"
      ) Trinti istoriją

</template>
<script>

import { mapGetters, mapActions } from 'vuex';
import VueScreenSize from 'vue-screen-size';
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
  mixins: [VueScreenSize.VueScreenSizeMixin],
  computed: {
    ...mapGetters({
      drawer: g.HISTORY_DRAWER,
      history: g.SAVED_WORDS,
    }),
    isModal() {
      return this.$vssWidth < 900;
    },
    hasHistory() {
      return !!this.history.length;
    },
  },
  methods: {

    ...mapActions({
      handleClose: a.HIDE_HISTORY,
      openDrawer: a.SHOW_HISTORY,
      clearHistory: a.CLEAR_HISTORY,
    }),

    onWord(word) {
      this.$router.push({ path: `/krc/${word}` })
        .then(() => {
          if (this.isModal) {
            this.handleClose();
          }
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
  left: 10px;
  top: 20px;
}

.word-history {
  padding: 0 $margin-right;
}

#clear-history {
  display: block;
  margin: $margin-right auto;
  min-width: 200px;
}

</style>
