<template>
  <div class="container">
    <span class="title">选择类型</span>
    <el-radio-group v-model="type">
      <el-radio label="lollipop">棒棒糖</el-radio>
      <el-radio label="ice-cream">雪糕</el-radio>
    </el-radio-group>
  </div>

  <div class="container">
    <span class="title">选择颜色</span>
    <el-radio-group v-model="color">
      <el-radio label="pink"><div class="radio-item"><div class="pink-card" /><div class="radio-text">粉色</div></div></el-radio>
      <el-radio label="blue"><div class="radio-item"><div class="blue-card" /><div class="radio-text">蓝色</div></div></el-radio>
    </el-radio-group>
  </div>

  <div class="container">
    <span class="title">你会得到</span>
    <span v-show="type === 'lollipop'">
      <i class="el-icon-lollipop icon" :class="{ pink: color === 'pink', blue: color === 'blue' }"></i>
    </span>
    <span v-show="type === 'ice-cream'">
      <i class="el-icon-ice-cream-round icon" :class="{ pink: color === 'pink', blue: color === 'blue' }"></i>
    </span>
    <span v-show="type !== 'lollipop' && type !== 'ice-cream'">
      <i class="el-icon-apple icon" :class="{ pink: color === 'pink', blue: color === 'blue' }"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      color: '',
    };
  },
}
</script>

<style lang="scss" scoped>
.pink-card {
  display: inline-block;
  vertical-align: bottom;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  background: lightpink;
  border-radius: 5px;
}

.blue-card {
  display: inline-block;
  vertical-align: bottom;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  background: lightblue;
  border-radius: 5px;
}

.radio-item {
  display: inline-block;
}

.radio-text {
  display: inline-block;
}

.container {
  margin: 5px 0;

  .title {
    font-weight: 600;
    margin-right: 20px;
  }
}

.icon {
  font-size: 30px;
  vertical-align: middle;
  color: orangered;
}

.pink {
  color: lightpink;
}

.blue {
  color: lightblue;
}
</style>
