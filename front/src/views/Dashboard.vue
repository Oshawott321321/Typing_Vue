<template>
  <div class="container  h-100">
    <div class="row w-100">
      <div class="col-md-12 myheader">
        <h2>
          User Dashboard
        </h2>
      </div>
    </div>
    <div class="row h-50 dashboard">
      <div class="row my-auto" v-for="(x,y) in $store.state.auth.user">
        <template v-if="y !== 'password'">
          <div class="col-4" :class="y">
            <h3>
              {{y}}
            </h3>
          </div>
          <div class="col-4" :class="y">
            <h3>
              {{x}}
            </h3>
          </div>
          <div class="col-4" :class="y">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  mounted () {
    if (this.$store.state.auth.isAuthenticated === false) {
      this.$router.push('Login')
    } else {
      this.$router.push('Dashboard')
    }
  }
}
</script>

<style lang="scss" scoped>
  .myheader {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .error_rate {
    color: red;
  }
  .typing_speed {
    color: blue;
  }
  .dashboard {
    background-color: rgba(45, 209, 231, 0.39);
    border-radius: 5%;
  }
</style>
