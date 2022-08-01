<template lang="pug">
div
  h1 Calendar
  p events:
  p {{ events }}
  button(type="submit" @click="fetchEvents()") fetchEvents
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Calendar",
  data() {
    return {
      events: [],
    };
  },
  methods: {
    fetchEvents() {
      axios
        .get("http://localhost:3000/events")
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
