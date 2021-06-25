<template>
  <div id="counter">
    Counter: {{ counter }}
  </div>
</template>

<script>
export default {
  name: 'declarative-rendering',
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
}
</script>
