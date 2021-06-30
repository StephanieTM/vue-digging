<template>
  <ul>
    <li v-for="(value, key, index) in obj" :key="key">
      {{index+1}}. {{key}}: {{value}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        'published at': '2020-03-22',
      },
    };
  },
}
</script>
