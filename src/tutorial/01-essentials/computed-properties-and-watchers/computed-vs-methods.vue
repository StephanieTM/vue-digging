<template>
  <div class="container">
    <div>
      Render Flag: {{ renderFlag }}
      <el-button style="margin-left: 10px" @click="rerender">re-render</el-button>
    </div>

    <div>
      <h3>computed 计算属性缓存</h3>
      <div>now: {{ now }}</div>
    </div>

    <div>
      <h3>methods 方法</h3>
      <div>now: {{ calcNow() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderFlag: 0,
    };
  },
  computed: {
    now() {
      return Date.now();
    },
  },
  methods: {
    calcNow() {
      return Date.now();
    },
    rerender() {
      this.renderFlag += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
