<template lang="pug">

.about
  hello-world(msg="Welcome to Kirtis.info")
  app-info

</template>
<script>

import HelloWorld from '@/components/HelloWorld.vue';
import AppInfo from '@/components/AppInfo.vue';

export default {
  name: 'Home',
  components: {
    AppInfo,
    HelloWorld,
  },
};

</script>
<style lang="scss" scoped>

@import "../styles/variables";

.hello-world ::v-deep {
  img {
    margin: $margin-top auto;
  }
}

.app-info {
  margin: $margin-top auto;
}

</style>
