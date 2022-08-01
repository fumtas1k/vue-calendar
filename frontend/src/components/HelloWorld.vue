<template lang="pug">
div
  div(v-if="visibility")
    p visibility: true
    p {{ message }}
  div(v-else)
    p visibility: false
  ul
    li(v-for="item in items" :key="item.id") {{ item.text }}
  button(@click="clickedEvent()") ボタン
  input(v-model="message")
  button(@click="increment") プラス
  p {{ value }}
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      message: "Hello World!",
      visibility: true,
      items: [
        { id: 1, text: "アイテム1" },
        { id: 2, text: "アイテム2" },
        { id: 3, text: "アイテム3" },
      ],
    };
  },
  methods: {
    clickedEvent() {
      console.log("clicked");
    },
    increment() {
      this.$emit("update:value", this.value + 1);
    },
  },
};
</script>
