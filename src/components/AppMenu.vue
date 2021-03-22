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
  font-weight: 500;

  a {
    color: $light-gray;

    &.router-link-exact-active {
      color: $dark-gray;
    }
  }

}

span:before {
  content: "|";
  margin: 0 $margin-right;
  color: $light-gray;
}

</style>
