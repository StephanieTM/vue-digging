<template>
  <div>
    <span class="counter-text">Counter: {{ counter }}</span>
    <el-button @click="toggleCounter">{{isCounting ? 'Stop' : 'Start'}}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      intervalHandle: undefined,
      isCounting: false,
    };
  },
  mounted() {
    this.startCounter();
  },
  beforeUnmount() {
    this.stopCounter();
  },
  methods: {
    stopCounter() {
      if (this.isCounting) {
        clearInterval(this.intervalHandle);
        this.isCounting = false;
      }
    },
    startCounter() {
      if (!this.isCounting) {
        this.intervalHandle = setInterval(() => {
          this.counter++;
        }, 1000);
        this.isCounting = true;
      }
    },
    toggleCounter() {
      if (this.isCounting) {
        this.stopCounter();
      } else {
        this.startCounter();
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.counter-text {
  margin-right: 20px;
}
</style>
