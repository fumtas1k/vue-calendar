<template lang="pug">
div
  h1 CalendarDetails
  div(v-for="event in events" :key="event.id")
    h2 {{ event.name }}
    p start: {{ event.start }}
    p end: {{ event.end }}
    p description: {{ event.description }}

  button(type="submit" @click="fetchEvents()") fetchEvents
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
    // events() {
    //   return this.$store.getters["events/events"];
    // },
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
    // fetchEvents() {
    //   this.$store.dispatch("events/fetchEvents");
    // },
  },
};
</script>
