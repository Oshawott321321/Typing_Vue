<template>
  <div class="about row border">
    <h1>This is an about page</h1>
    <aboutComponent />
  </div>
</template>

<script>
import aboutComponent from '../components/About/aboutComponent.vue'
export default {
  components: {
    aboutComponent
  }
}
</script>
