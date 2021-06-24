<template>
  <Header />

  <div class="router-link-container">
    <router-link class="router-link" to="/">Home</router-link>
    <router-link class="router-link" to="/hello-world">Hello World</router-link>
    <router-link class="router-link" to="/tutorial">Tutorial</router-link>
  </div>

  <router-view></router-view>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-link-container {
  display: flex;
  margin: 0 20px;
  padding: 0 10px;
  background: gainsboro;
  border-radius: 10px;
  flex-wrap: wrap;
}

.router-link-container .router-link {
  margin: 10px;
}

.content-container {
  border: 5px dashed lightblue;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
}
</style>
