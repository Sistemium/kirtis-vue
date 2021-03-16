<template lang="pug">

.hello
  h1 {{ msg }}
  p This project is written in
    = ' '
    a(href="https://vuejs.org" target="_blank" rel="noopener") VueJS

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
