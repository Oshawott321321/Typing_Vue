<template>
  <div class="container">
    <div id='typerheader' class="row border border-dark justify-content-center">
      <div class="row">
        <h1 class="font-weight-bolder">
          Typer
        </h1>
      </div>
    </div>
    <div class="row border border-primary">
      <div class="col-md-12 typebox">
        <type-box />
      </div>
    </div>
  </div>
</template>

<script>
import typeBox from '../components/typeBox.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    typeBox
  },
  props: {
    msg: String
  },
  data () {
    return {
      message: ''
    }
  },
  created () {
    console.log('In created ')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#typerheader{
  height: 10vh;
  background-color: rgb(33, 39, 33);
  font-family: 'Stint Ultra Condensed', cursive;
  font-size: 100px;
  color: rgb(0, 81, 255);
  animation: forheader 2s;
}
@keyframes forheader {
  from {background-color: red;}
  to {background-color: yellow;}
}
.typebox{
  height: 85vh;
}
</style>
