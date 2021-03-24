<template lang="pug">

el-container#app
  el-header(height="auto")
    app-menu
  el-main
    router-view

</template>
<script>

import AppMenu from '@/components/AppMenu.vue';

export default {
  components: { AppMenu },
};

</script>
<style lang="scss" scoped>

@import "./styles/variables";

.el-main {
  padding: 0;
}

</style>
