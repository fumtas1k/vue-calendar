<template lang="pug">
  #app
    HelloWorld(:value.sync="count")
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
