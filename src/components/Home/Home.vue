<template>
  <div class="home">
    vue digging
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
}
</script>

<style scoped>
.home {
  background: lavender;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  font-weight: 600;
  font-size: 24px;
}
</style>
