<template>
  <div class="blog-post">
    <h4>{{title}}</h4>
    <el-button @click="$emit('enlargeText', 0.1)">Enlarge text</el-button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  emits: ['enlargeText'],
}
</script>
