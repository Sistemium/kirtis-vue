<template lang="pug">

.app-info
  p This
    = ' '
    a(href="https://github.com/Sistemium/kirtis-vue" target="_blank") open-source
    = ' '
    | app is written in
    = ' '
    a(href="https://vuejs.org" target="_blank") VueJS
    = ' '
    | by
    = ' '
    a(href="https://sistemium.com" target="_blank") Sistemium UAB
    = ' '
    | courtesy of
    = ' '
    a(href="https://klc.vdu.lt" target="_blank") VDU KLC

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
