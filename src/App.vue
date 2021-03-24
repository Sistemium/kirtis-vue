<template lang="pug">

el-container#app(direction="vertical")
  app-header
  el-main
    router-view

</template>
<script>

import AppHeader from '@/components/AppHeader.vue';

export default {
  components: { AppHeader },
};

</script>
<style lang="scss" scoped>

@import "./styles/variables";

#app {
  max-width: 968px;
  margin: auto;
}

.el-main {
  padding: 0;
}

</style>
