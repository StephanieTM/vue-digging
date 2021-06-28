<template>
  <div class="container">
    <div class="info">
      <div>Name: {{ author.name }}</div>
      <div>
        Books:
        <ul>
          <li
            v-for="(book, index) in author.books"
            :key="book"
          >
            {{ book }}
            <el-button type="text" icon="el-icon-delete" @click="() => handleDelete(index)"></el-button>
          </li>
        </ul>
      </div>
      <el-button v-if="!publishedBooksNumber" @click="restoreBooks">Restore</el-button>
    </div>

    <div>
      <h3>在模板中计算</h3>
      <p>Number of published books:</p>
      <span>{{ author.books.length }}</span>
    </div>

    <div>
      <h3>使用计算属性</h3>
      <p>Number of published books:</p>
      <span>{{ publishedBooksNumber }}</span>
    </div>
  </div>
</template>

<script>
const initialBooks = [
  'Vue 2 - Advanced Guide',
  'Vue 3 - Basic Guide',
  'Vue 4 - The Mystery',
];

export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: initialBooks,
      },
    };
  },
  methods: {
    handleDelete(i) {
      this.author.books = this.author.books.filter((_item, index) => index !== i);
    },
    restoreBooks() {
      if (!this.publishedBooksNumber) {
        this.author.books = initialBooks;
      }
    }
  },
  computed: {
    publishedBooksNumber() {
      return this.author.books.length;
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
}

.info {
  margin: 10px;
}
</style>
