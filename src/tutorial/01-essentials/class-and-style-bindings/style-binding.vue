<template>
  <el-button @click="toggleActive">{{isActive ? 'Deactivate' : 'Activate'}}</el-button>
  <el-button @click="toggleError">{{hasError ? 'Validate' : 'Invalidate'}}</el-button>

  <div class="container">
    <div class="item">
      <h3>对象语法</h3>
      <div
        :style="textStyleObject"
      >
        Some text.
      </div>
    </div>

    <div class="item">
      <h3>数组语法</h3>
      <div :style="[normalStyle, isActive && !hasError ? activeStyle : {}, hasError ? textDangerStyle : {}]">
        Some other text.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      normalStyle: {
        color: 'rgb(46, 133, 133)',
        backgroundColor: 'rgb(152, 224, 224)',
        fontWeight: 400,
        fontSize: '16px',
        margin: '16px 0',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
      },
      activeStyle: {
        fontWeight: 800,
        fontSize: '18px',
      },
      textDangerStyle: {
        color: 'rgb(204, 47, 47)',
        backgroundColor: 'rgb(228, 150, 150)',
      },
      isActive: false,
      hasError: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    toggleError() {
      this.hasError = !this.hasError;
    },
  },
  computed: {
    textStyleObject() {
      return {
        ...this.normalStyle,
        ...(this.isActive && !this.hasError ? this.activeStyle : {}),
        ...(this.hasError ? this.textDangerStyle : {})
      };
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  column-gap: 20px;

  .item {
    flex: 1;
  }
}
</style>
