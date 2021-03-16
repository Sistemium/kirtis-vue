<template lang="pug">

.hello

  h1 {{ msg }}

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

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};

</script>
<style scoped lang="scss">

@import "../styles/variables";

h1 {
  margin: 20px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $green;
}

</style>
