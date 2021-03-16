<template lang="pug">

.about
  img(alt="Vue logo" src="../assets/kirtis-180.png")
  hello-world(msg="Welcome to Kirtis.info")

</template>
<script>

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};

</script>
