<template>
  <div class="container">
    <div class="item">
      <h3>计算属性</h3>
      <div>展示 [1, 2, 3, 4, 5] 中的偶数</div>
      <ul>
        <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
      </ul>
    </div>

    <div class="item">
      <h3>方法</h3>
      <div>展示 [ [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] ] 中的偶数</div>
      <ul v-for="(numbers, index) in sets" :key="index">
        <li v-for="n in even(numbers)" :key="n">{{n}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(number => number % 2 === 0);
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter(number => number % 2 === 0);
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;

  .item {
    width: 40%;
  }
}
</style>
