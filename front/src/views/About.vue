<template>
  <div class="container-fluid w-100">
    <div id="aboutheader" class="row">
      <h1>About Typer</h1>
    </div>
    <div class="row mt-5">
      <aboutComponent />
    </div>
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

<style lang="scss" scoped>
#aboutheader {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
