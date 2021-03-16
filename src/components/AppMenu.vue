<template lang="pug">

.app-menu

  //router-link(to="/") Home
  //= ' | '
  router-link(to="/") Kirtis
  = ' | '
  router-link(to="/about") Apie

</template>
<script>

const NAME = 'AppMenu';

export default {
  name: NAME,
};

</script>
<style scoped lang="scss">

@import "../styles/variables";

.app-menu {

  padding: 30px;

  a {
    font-weight: bold;
    color: $black;

    &.router-link-exact-active {
      color: $green;
    }
  }

}

</style>
