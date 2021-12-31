<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlargeText="onEnlargeText"
    />
  </div>
</template>

<script>
import BlogPost from './blog-post.vue';

export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'Vue component basics' },
      ],
      postFontSize: 1,
    };
  },
  methods: {
    onEnlargeText(amount) {
      this.postFontSize += amount;
    },
  },
}
</script>
