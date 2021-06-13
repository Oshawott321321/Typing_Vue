<template>
  <div id="mybackground" class="row h-100 border border-primary">
    <!-- <div class="justify-content-center mydiv my-auto border border-danger myform">
      <h1>Register Page</h1>
      <form>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="email"><br>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password"><br>
        <button @click.prevent="register_data()" class="btn btn-outline-primary" >Login</button>
        <h1>{{ email }}-{{ password }}</h1>
      </form>
    </div> -->
    <div class="my-auto">
      <form autocomplete='off' class='form'>
        <div class='control'>
          <h1 class="fs-1">
            Register
          </h1>
        </div>
        <div class='control block-cube block-input'>
          <input type="text" name="email" id="email" placeholder="Email" v-model="email">
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
        </div>
        <div class='control block-cube block-input'>
          <input name='password' placeholder='Password' type='password' id="password" v-model="password">
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
        </div>
        <button @click.prevent="register_data()" class='btn block-cube block-cube-hover' type='submit'>
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
          <div class='text'>
            Register
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    validateEmail (email) {
      var re = /\S+@\S+\.\S+/
      return re.test(email)
    },
    register_data () {
      if (this.email === '' || this.password === '') {
        alert('Please Enter Data')
        return
      }
      this.email = this.email.toLowerCase()
      if (!this.validateEmail(this.email)) {
        alert('Please Enter Email in correct Format')
        this.email = ''
        this.password = ''
        return
      }
      this.register_action({
        email: this.email,
        password: this.password
      })
    },
    ...mapActions({
      register_action: 'auth/register_action'
    })
  }
}
</script>

<style lang="scss" scoped>

// #mybackground{background-color: #9d00ff;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23d486d2'/%3E%3Cstop offset='1' stop-color='%23d486d2' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%236fb4b6'/%3E%3Cstop offset='1' stop-color='%236fb4b6' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23b4e16e'/%3E%3Cstop offset='1' stop-color='%23b4e16e' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239d00ff'/%3E%3Cstop offset='1' stop-color='%239d00ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffbe98'/%3E%3Cstop offset='1' stop-color='%23ffbe98' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230aff1e'/%3E%3Cstop offset='1' stop-color='%230aff1e' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
// background-attachment: fixed;
// background-size: cover;
// }
*, ::after, ::before {
    box-sizing: border-box;
}

$bg_body: #212121; 
$bg_gradient_last_color: rgba(0,212,255,1);
$bg_gradient: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(52,9,121,1) 37%, $bg_gradient_last_color 94%);; 

body {
  background-color: $bg_body;
  color: #fff;
  font-family: monospace, serif;
  letter-spacing: 0.05em;
}

.form {
  width: 300px;
  padding: 0px 15px 24px;
  margin: 0 auto;
  .control {
    margin: 0 0 24px;
    input {
      width: 100%;
      padding: 14px 16px;
      border: 0;
      background: transparent;
      color: #fff;
      font-family: monospace, serif;
      letter-spacing: 0.05em;
      font-size: 16px;
      &:hover,
      &:focus {
        outline: none;
        border: 0;
      }
    }
  }
  .btn {
    width: 100%;
    display: block;
    padding: 14px 16px;
    background: transparent;
    outline: none;
    border: 0;
    color: #fff;
    letter-spacing: 0.1em;
    font-weight: bold;
    font-family: monospace;
    font-size: 16px;
  }
  
}

.block-cube {
  position: relative;
  .bg-top {
    position: absolute;
    height: 10px;
    background: rgb(2,0,36);
    background: $bg_gradient;
    bottom: 100%;
    left: 5px;
    right: -5px;
    transform: skew(-45deg, 0);
    margin: 0;
    .bg-inner{
      bottom: 0;
    }
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgb(2,0,36);
    background: $bg_gradient;
  }
  .bg-right {
    position: absolute;
    background: rgb(2,0,36);
    background: rgba(0,212,255,1);
    top: -5px;
    z-index: 0;
    bottom: 5px;
    width: 10px;
    left: 100%;
    transform: skew(0, -45deg);
    .bg-inner {
      left: 0;
    }
  }
  .bg {
    .bg-inner {
      transition: all 0.2s ease-in-out;
    }
  }
  .bg-inner {
    background: $bg_body;
    position: absolute;
    left: 2px;
    top: 2px;
    right: 2px;
    bottom: 2px;
  }
  .text {
    position: relative;
    z-index: 2;
  }  
  &.block-input {
    input {
      position: relative;
      z-index: 2;
      &:focus ~ .bg-right .bg-inner,
      &:focus ~ .bg-top .bg-inner,
      &:focus ~ .bg-inner .bg-inner {
        top: 100%;
        background: rgba(255, 255, 255, 0.5)
      }    
    }
    .bg-top,
    .bg-right,
    .bg {
      background: rgba(255, 255, 255, 0.5);
      transition: background 0.2s ease-in-out;
    }
    .bg-right,
    .bg-top {
      .bg-inner {
        transition: all 0.2s ease-in-out;
      }
    }
    &:focus,
    &:hover {
        .bg-top,
        .bg-right,
        .bg {
          background: rgb(0, 255, 0);
          }
    }
  }
  // State hover, focus
  &.block-cube-hover:focus,
  &.block-cube-hover:hover {
    .bg {
      .bg-inner {
        top: 100%;
      }
    }
  }
}

.credits {
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 15px 15px;
    width: 100%;
    z-index: 111;

    a {
        opacity: 0.6;
        color: #fff;
        font-size: 11px;
        text-decoration: none;
        &:hover {
          opacity: 1;
      }
    }
}
</style>
