<template lang="pug">
div
  h1 Calendar
  ul
    li(v-for="event in events" :key="event.id") {{ event.name }}
  button(type="submit" @click="fetchEvents()") fetchEvents

  CalendarDetails
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CalendarDetails from "./CalendarDetails.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Calendar",
  components: {
    CalendarDetails,
  },
  computed: {
    ...mapGetters("events", ["events"]),
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
  },
};
</script>
