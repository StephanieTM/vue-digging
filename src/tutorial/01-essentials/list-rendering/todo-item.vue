<template>
  <li>
    [ID: {{ id }}] {{title}}
    <el-button type="text" icon="el-icon-delete" @click="$emit('remove')"></el-button>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    id: Number,
  },
  emits: ['remove'],
}
</script>
