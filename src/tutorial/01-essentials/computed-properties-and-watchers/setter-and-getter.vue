<template>
  <div class="input-container">
    <div class="item">First Name: <el-input v-model="firstName"></el-input></div>
    <div class="item">Last Name: <el-input v-model="lastName"></el-input></div>
    <div class="item">Full Name: <el-input v-model="fullName" :disabled="!firstName || !lastName"></el-input></div>
  </div>
  <div>
    <div>Full Name: {{ fullName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        const spacePos = newValue.indexOf(' ');
        this.firstName = newValue.slice(0, spacePos);
        this.lastName = newValue.slice(spacePos + 1);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  column-gap: 10px;

  .item {
    flex: 1;
  }
}
</style>
