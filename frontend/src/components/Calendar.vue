<template lang="pug">
div
  v-sheet(height="6vh" class="d-flex align-center")
    v-btn(outlined small class="ma-4" @click="setToday()") 今日
    v-btn(icon)
      v-icon(@click="$refs.calendar.prev()") mdi-chevron-left
    v-btn(icon)
      v-icon(@click="$refs.calendar.next()") mdi-chevron-right
    v-toolbar-title {{ title }}
  v-sheet(height="94vh")
    v-calendar(
      ref="calendar"
      v-model="value"
      :events="events"
      @change="fetchEvents"
      locale="ja-JP"
      :day-format="timestamp => new Date(timestamp.date).getDate()"
      :month-format="timestamp => (new Date(timestamp.date).getMonth() + 1) + ' /'"
    )
</template>

<script>
import { format } from "date-fns";
import { mapGetters, mapActions } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Calendar",
  data() {
    return {
      value: format(new Date(), "yyyy/MM/dd"),
    };
  },
  computed: {
    ...mapGetters("events", ["events"]),
    title() {
      return format(new Date(this.value), "yyyy年M月");
    },
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
    setToday() {
      this.value = format(new Date(), "yyyy/MM/dd");
    },
  },
};
</script>
