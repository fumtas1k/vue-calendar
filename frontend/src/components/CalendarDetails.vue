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

export default {
  name: "CalendarDetails",
  computed: {
    ...mapGetters("events", ["events"]),
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
  },
};
</script>
