<template lang="pug">

#app

  #nav
    router-link(to="/") Home
    = ' | '
    router-link(to="/about") About

  router-view

</template>

<style lang="scss" scoped>

@import "./styles/variables";

#nav {
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
