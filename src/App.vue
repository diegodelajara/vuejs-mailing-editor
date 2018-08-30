<template>
  <div id="app">
    <mail></mail>
  </div>
</template>

<script>
import Mail from './components/Mail'
export default {
  name: 'app',
  components: {
    Mail
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
    display: block;
    margin: 22px auto 8px;
    text-align: left;
}
.radios li {
    display: inline-block;
}

a {
  color: #42b983;
}
</style>
