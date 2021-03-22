<template lang="pug">

.hello-world

  h1(v-if="msg") {{ msg }}

  img(alt="Vue logo" src="../assets/kirtis-180.png")

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
  margin: $margin-top auto;
}

img {
  margin: 10px auto;
}

h1 {
  font-size: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 $margin-right;
}

a {
  color: $green;
}

</style>
