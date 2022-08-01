<template lang="pug">
v-card(class="pb-12")
  v-card-actions(class="d-flex justify-end pa-2")
    v-btn(icon @click="closeDialog")
      v-icon(size="20px") mdi-close

  v-card-title
    DialogSection(icon="mdi-square" :color="event.color || 'blue'") {{ event.name }}
  v-card-text
    DialogSection(icon="mdi-clock-time-three-outline") {{ event.start.toLocaleString() }} ~ {{ event.end.toLocaleString() }}
  v-card-text
    DialogSection(icon="mdi-card-text-outline") {{ event.description || "no description" }}
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DialogSection from "./DialogSection.vue";

export default {
  name: "EventDetailDialog",
  components: {
    DialogSection,
  },
  computed: {
    ...mapGetters("events", ["event"]),
  },
  methods: {
    ...mapActions("events", ["setEvent"]),
    closeDialog() {
      this.setEvent(null);
    },
  },
};
</script>
