<template>
  <router-link custom :to="to" v-slot="{ href, navigate }">
    <el-link
      :href="href"
      :underline="false"
      :type="$route.matched.findIndex(item => item.path === to) > -1 ? 'primary' : 'default'"
      @click="navigate"
      v-bind="$attrs"
    >
      <slot></slot>
    </el-link>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
  },
  data() {
    return {
      window,
    };
  },
}
</script>
