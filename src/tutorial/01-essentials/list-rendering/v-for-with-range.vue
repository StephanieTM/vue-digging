<template>
  <div>
    1-10: <span v-for="n in 10" :key="n" class="number">{{n}}</span>
  </div>
</template>

<style lang="scss" scoped>
.number {
  margin: 5px;

  &:not(:last-child)::after {
    content: ',';
  }
}
</style>
