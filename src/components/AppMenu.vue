<template lang="pug">

.app-menu

  //router-link(to="/") Home
  router-link(to="/") Kirtis
  span
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

  padding: $margin-top;
  font-size: 24px;

  a {
    font-weight: bold;
    color: $black;

    &.router-link-exact-active {
      color: $green;
    }
  }

}

span:before {
  content: "|";
  margin: 0 $margin-right;
}

</style>
