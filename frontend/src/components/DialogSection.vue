<template lang="pug">
v-row
  v-col(cols=2 class="d-flex justify-center align-center")
    v-icon(size="20px" :color="color") {{ icon }}
  v-col(class="d-flex align-center")
    slot
</template>

<script>
export default {
  name: "DialogSection",
  props: ["icon", "color"],
};
</script>
