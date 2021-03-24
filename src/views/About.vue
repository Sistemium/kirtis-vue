<template lang="pug">

.about
  hello-world(msg="Sveiki atvykę į Kirtis.info")
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
  h1 {
    margin-top: 10px;
  }
}

.app-info {
  margin: $margin-top auto;
}

</style>
