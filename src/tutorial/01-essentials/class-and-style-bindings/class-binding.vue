<template>
  <el-button @click="toggleActive">{{isActive ? 'Deactivate' : 'Activate'}}</el-button>
  <el-button @click="toggleError">{{hasError ? 'Validate' : 'Invalidate'}}</el-button>

  <div class="container">
    <div class="item">
      <h3>对象语法</h3>
      <!-- 这一种是内联计算 -->
      <!--
        <div
          class="normal"
          :class="{ active: isActive, 'text-danger': hasError }"
        >
          Some text.
        </div>
      -->

      <!-- 这一种是计算属性 -->
      <div
        class="normal"
        :class="textClassObj"
      >
        Some text.
      </div>
    </div>

    <div class="item">
      <h3>数组语法</h3>
      <div :class="['normal', isActive && !hasError ? 'active' : '', { 'text-danger': hasError }]">
        Some other text.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    textClassObj() {
      return {
        active: this.isActive && !this.hasError,
        'text-danger': this.hasError,
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

.normal {
  color: rgb(46, 133, 133);
  background-color: rgb(152, 224, 224);
  font-weight: 400;
  font-size: 16px;
  margin: 16px 0;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.active {
  font-weight: 800;
  font-size: 18px;
}

.text-danger {
  color: rgb(204, 47, 47);
  background-color: rgb(228, 150, 150);
}
</style>
