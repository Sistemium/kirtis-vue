<template lang="pug">

#app
  app-menu
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

</style>
