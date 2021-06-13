<template>
  <div class="home row">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'homeView',
  components: {
    Home
  }
}
</script>
