<template>
  <div>
    <h3>事件监听</h3>
    <p>{{ message }}</p>
    <el-button @click="reverseMessage">反转 Message</el-button>

    <h3>双向绑定</h3>
    <p>{{ message }}</p>
    <el-input v-model="message"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js',
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
}
</script>
