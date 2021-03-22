<template lang="pug">

.app-info

  p Šią
    = ' '
    a(href="https://github.com/Sistemium/kirtis-vue" target="_blank") atvirojo kodo
    = ' '
    | programą su
    = ' '
    a(href="https://vuejs.org" target="_blank") VueJS
    = ' '
    | parašė
    = ' '
    a(href="https://sistemium.com" target="_blank") Sistemium UAB
    = ' '
    | naudodama
    = ' '
    a(href="https://klc.vdu.lt" target="_blank") VDU KLC
    = ' '
    | technologiją.

</template>
<script>

const NAME = 'AppInfo';

export default {
  name: NAME,
};

</script>
<style scoped lang="scss">

@import "../styles/variables";

</style>
