<template lang="pug">

.home
  img(alt="Vue logo" src="../assets/kirtis-180.png")
  HelloWorld(msg="Welcome to Kirtis.info App")

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
