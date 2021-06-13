<template>
  <div class="row border border-dark">
    User Dashboard
    <div v-if="$store.state.auth.isAuthenticated">
      {{$store.state.auth.user}}
      {{$store.state.auth}}
    </div>
    <div v-else>
      Login
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  mounted () {
    if (this.$store.state.auth.isAuthenticated === false) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
