<template lang="pug">

.about
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
