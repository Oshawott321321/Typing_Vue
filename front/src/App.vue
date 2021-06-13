<template>
  <div id="nav" class="container-fluid border border-dark">
    <div class="row h-100">

      <nav class="col-md-2 d-none d-md-block sidebar-wrapper sidebar h-100 mybackground">
          <div class="sidebar-sticky mysidebar h-100">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  <span class="sr-only"> </span>
                  Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/paragraphs" class="nav-link active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  <span class="sr-only"> </span>
                    Paragraphs
                </router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/dashboard" class="nav-link active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  Dashboard
                </router-link>
              </li>
              <!-- <li class="nav-item">
                  <router-link to="/charts" class="nav-link active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  Charts
                </router-link>
              </li> -->
              <li class="nav-item">
                  <router-link to="/about" class="nav-link active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  About
                </router-link>
              </li>
              <li v-if="$store.state.auth.isAuthenticated === false" class="nav-item">
                  <router-link to="/login" class="nav-link active">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" class="feather feather-bar-chart-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.16429 22.125H2.84522C2.445 22.125 2.20354 21.9016 2.09526 21.7685C1.90833 21.5385 1.8359 21.2393 1.8967 20.9473C2.87025 16.271 6.99712 12.8559 11.7613 12.7451C11.8407 12.748 11.9202 12.75 12.0002 12.75C12.081 12.75 12.1612 12.748 12.2413 12.745C13.4062 12.7716 14.5442 12.9906 15.6273 13.3973C16.112 13.5795 16.6525 13.334 16.8345 12.8492C17.0166 12.3645 16.7712 11.824 16.2864 11.642C16.1312 11.5837 15.975 11.5291 15.8179 11.4774C17.3695 10.3135 18.3752 8.45948 18.3752 6.375C18.3752 2.85984 15.5154 0 12.0002 0C8.48503 0 5.62523 2.85984 5.62523 6.375C5.62523 8.46136 6.63267 10.3168 8.18662 11.4805C6.76298 11.9492 5.42704 12.678 4.25789 13.6397C2.1142 15.403 0.623716 17.8625 0.0610756 20.5651C-0.115268 21.412 0.0959506 22.2818 0.640591 22.9515C1.18247 23.6178 1.98604 24 2.84522 24H6.16429C6.68208 24 7.10179 23.5803 7.10179 23.0625C7.10179 22.5447 6.68208 22.125 6.16429 22.125ZM7.50023 6.375C7.50023 3.89367 9.5189 1.875 12.0002 1.875C14.4816 1.875 16.5002 3.89367 16.5002 6.375C16.5002 8.78283 14.5993 10.7549 12.2193 10.8696C12.1463 10.8683 12.0734 10.8672 12.0002 10.8672C11.9269 10.8672 11.8537 10.8683 11.7804 10.8696C9.40083 10.7545 7.50023 8.78259 7.50023 6.375Z" fill="black"/>
                  <path d="M23.2823 16.1535C22.881 15.2558 21.9771 14.6742 20.9772 14.6719H18.0535C18.0514 14.6719 18.0494 14.6719 18.0473 14.6719C16.9926 14.6719 16.0724 15.2934 15.7022 16.2566C15.6529 16.3847 15.5927 16.5462 15.5298 16.7344H9.39171C9.13826 16.7344 8.89563 16.837 8.71905 17.0188L7.10862 18.6776C6.75391 19.043 6.75569 19.6246 7.1126 19.9878L8.75322 21.6571C8.92947 21.8364 9.17041 21.9375 9.42185 21.9375H12.4687C12.9865 21.9375 13.4062 21.5177 13.4062 21C13.4062 20.4822 12.9865 20.0625 12.4687 20.0625H9.81494L9.09176 19.3266L9.78818 18.6094H16.2331C16.665 18.6094 17.041 18.3143 17.1437 17.8948C17.2195 17.5851 17.3147 17.2874 17.4523 16.9294C17.543 16.6933 17.7709 16.5469 18.0495 16.5469C18.0501 16.5469 18.0507 16.5469 18.0513 16.5469H20.975C21.2401 16.5475 21.4683 16.69 21.5705 16.9187C21.8222 17.4817 22.1227 18.3534 22.125 19.3087C22.1272 20.271 21.827 21.1626 21.5747 21.7412C21.473 21.9745 21.2429 22.125 20.986 22.125C20.9854 22.125 20.9849 22.125 20.9844 22.125H18.0254C17.7661 22.1244 17.5231 21.9575 17.4209 21.7098C17.3113 21.444 17.2163 21.1404 17.1304 20.7818C17.0099 20.2783 16.5039 19.9678 16.0005 20.0882C15.4969 20.2087 15.1864 20.7147 15.307 21.2182C15.4158 21.6728 15.5403 22.0675 15.6876 22.4247C16.0813 23.3792 16.9973 23.9976 18.0233 24H20.9823C20.9843 24 20.9861 24 20.9882 24C21.989 23.9999 22.8935 23.4079 23.2935 22.4905C23.6175 21.7475 24.003 20.5916 24 19.3042C23.997 18.0203 23.608 16.8822 23.2823 16.1535Z" fill="black"/>
                  <path d="M20.2031 20.25C20.7209 20.25 21.1406 19.8303 21.1406 19.3125C21.1406 18.7947 20.7209 18.375 20.2031 18.375C19.6854 18.375 19.2656 18.7947 19.2656 19.3125C19.2656 19.8303 19.6854 20.25 20.2031 20.25Z" fill="black"/>
                  </svg>

                  <!-- <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 -17294)" gradientUnits="userSpaceOnUse" x1="0" x2="512" y1="-17550" y2="-17550"><stop offset="0" stop-color="#00f1ff"/><stop offset=".231" stop-color="#00d8ff"/><stop offset=".5138" stop-color="#00c0ff"/><stop offset=".7773" stop-color="#00b2ff"/><stop offset="1" stop-color="#00adff"/></linearGradient><path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="url(#a)"/><g fill="#fff"><path d="m389.855469 347.085938c0 7.582031-6.144531 13.726562-13.726563 13.726562-7.585937 0-13.730468-6.144531-13.730468-13.726562 0-7.585938 6.144531-13.730469 13.730468-13.730469 7.582032 0 13.726563 6.144531 13.726563 13.730469zm0 0"/><path d="m422.378906 300.304688c-6.082031-13.601563-19.773437-22.414063-34.917968-22.449219h-42.808594c-.035156 0-.0625 0-.097656 0-15.976563 0-29.914063 9.421875-35.527344 24.023437-.648438 1.6875-1.429688 3.773438-2.25 6.179688h-88.972656c-4.054688 0-7.9375 1.640625-10.761719 4.550781l-23.585938 24.292969c-5.675781 5.84375-5.644531 15.152344.066407 20.964844l24.023437 24.445312c2.820313 2.867188 6.675781 4.484375 10.699219 4.484375h44.617187c8.285157 0 15-6.71875 15-15 0-8.285156-6.714843-15-15-15h-38.328125l-9.347656-9.511719 8.960938-9.226562h93.839843c6.910157 0 12.925781-4.722656 14.570313-11.433594 1.097656-4.476562 2.476562-8.789062 4.472656-13.984375 1.132812-2.953125 4.019531-4.785156 7.5625-4.785156h.023438 42.8125c3.375.007812 6.269531 1.804687 7.5625 4.691406 3.636718 8.132813 7.976562 20.71875 8.007812 34.480469.03125 13.875-4.304688 26.75-7.953125 35.113281-1.285156 2.953125-4.199219 4.855469-7.457031 4.855469-.007813 0-.015625 0-.023438 0h-43.328125c-3.289062-.007813-6.375-2.136719-7.679687-5.292969-1.578125-3.832031-2.949219-8.214844-4.191406-13.402344-1.929688-8.054687-10.023438-13.023437-18.082032-11.09375-8.054687 1.929688-13.023437 10.023438-11.09375 18.078125 1.609375 6.726563 3.453125 12.566406 5.632813 17.855469 5.964843 14.453125 19.835937 23.820313 35.378906 23.855469h43.328125.089844c15.164062 0 28.863281-8.96875 34.925781-22.867188 4.792969-10.992187 10.496094-28.101562 10.453125-47.171875-.046875-19.019531-5.800781-35.867187-10.621094-46.652343zm0 0"/><path d="m170.539062 387h-48.605468c-5.335938 0-8.550782-2.980469-9.996094-4.753906-2.496094-3.066406-3.460938-7.0625-2.648438-10.964844 14.132813-67.894531 74.046876-117.476562 143.214844-119.101562 1.160156.042968 2.324219.074218 3.496094.074218 1.179688 0 2.355469-.03125 3.527344-.074218 16.90625.386718 33.421875 3.566406 49.140625 9.46875 7.757812 2.914062 16.402343-1.015626 19.316406-8.769532 2.910156-7.757812-1.015625-16.402344-8.769531-19.316406-1.542969-.578125-3.097656-1.128906-4.652344-1.664062 21.953125-17.34375 36.0625-44.191407 36.0625-74.273438 0-52.179688-42.449219-94.628906-94.625-94.628906-52.179688 0-94.628906 42.449218-94.628906 94.628906 0 30.109375 14.136718 56.976562 36.121094 74.320312-20.148438 6.929688-39.058594 17.410157-55.679688 31.082032-31.617188 26.003906-53.597656 62.277344-61.898438 102.140625-2.65625 12.777343.527344 25.902343 8.746094 36.007812 8.179688 10.054688 20.304688 15.820313 33.273438 15.820313h48.601562c8.285156 0 15-6.714844 15-15 0-8.28125-6.714844-14.996094-14.996094-14.996094zm20.832032-229.375c0-35.636719 28.992187-64.625 64.628906-64.625s64.628906 28.988281 64.628906 64.625c0 34.585938-27.308594 62.90625-61.492187 64.546875-1.042969-.015625-2.089844-.035156-3.136719-.035156-1.050781 0-2.101562.015625-3.148438.035156-34.179687-1.648437-61.480468-29.96875-61.480468-64.546875zm0 0"/></g></svg> -->
                  Login
                </router-link>
              </li>
              <li v-else class="nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  <button class="btn btn-secondary" @click="log_out_action()">LogOut</button>
              </li>
              <li class="nav-item">
                  <router-link to="/register" class="nav-link active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  Register
                </router-link>
              </li>
              
            </ul>

          </div>
        </nav>

 <!-- Main view -->
        <div class="col-md-10 mybackground2">
          <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from 'axios'
import { mapActions } from 'vuex'
document.title = 'App'
export default {
  created () {
    console.log('Only First Time')
    this.auth_initialize_user()
  },
  // beforeMount () {
  //   window.addEventListener("beforeunload", () => {
  //     // if (this.$store.state.auth.isAuthenticated) {

  //       const body = {
  //         error_rate: this.$store.state.typing.error_rate,
  //         typing_speed: this.$store.state.typing.typing_speed
  //       }
  //       const config = {
  //         headers: {
  //           'content-type': 'application/json',
  //           "Authorization": `Bearer ${this.$store.state.user.token}`
  //         }
  //       }
  //       axios.post('http://localhost:8081/user/updatebasicstats', body, config)
  //         .then(res => alert(res))
  //         .catch(err => console.log(err))
  //     // }
  //   })
  // },
  async beforeUnmount () {
    console.log('in unmountnf app');
    alert('asjfdlkdf')
    const body = JSON.stringify({
      "error_rate":  this.$store.state.typing.error_rate,
      "typing_speed":  this.$store.state.typing.typing_speed
    })
        const config = {
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMzOTUzMGY5MGM1OTRmYWM4MThlZDYiLCJpYXQiOjE2MjM0OTExODAsImV4cCI6MTYyMzQ5MTc4MH0.ZvmoVAbtHK_4yXG_qXbWNBGcjo1PZcg6Wyhpc3eUb9k`
            // 'Authorization': `Bearer ${this.$store.state.auth.token}`
          }
        }
        await axios.post('http://localhost:8081/user/updatebasicstats', body, config)
          .then(res => alert(res))
          .catch(err => console.log(err))
  },
  methods: {
    ...mapActions({
      auth_initialize_user: 'auth/initialize_user',
      log_out_action: 'auth/log_out_action'
    })
  }
}
</script>
<style lang="scss">
$sidebar-background-color: #1976d2;
$text-color:#ffffff;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 100vh;
  a {
    font-weight: bold;
    color: $text-color;

    &.router-link-exact-active {
      color: #bbff00;
    }
  }
}
.mynav  {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.mysidebar {
  // background: $sidebar-background-color;
  padding: 10vh 0 0 0;
  border-top: #ff0707 1px;
  align-items: center;
}
.sidebar-wrapper {
  background: $sidebar-background-color;
}

.mybackground{
  background-color: #000a57;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 1600 800'%3E%3Cpath fill='%23FF7' d='M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z'/%3E%3Cpath fill='%235ff' d='M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z'/%3E%3Cg fill='%23FFF'%3E%3Cpath d='M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z'/%3E%3Ccircle cx='1013.7' cy='153.9' r='7.1'/%3E%3Ccircle cx='1024.3' cy='132.1' r='7.1'/%3E%3Ccircle cx='1037.3' cy='148.9' r='7.1'/%3E%3Cpath d='M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
}
// .mybackground{
// background-color: #cc5577;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23cc5577' width='11' height='11'/%3E%3Crect fill='%23ce5776' x='10' width='11' height='11'/%3E%3Crect fill='%23d05a76' y='10' width='11' height='11'/%3E%3Crect fill='%23d15c75' x='20' width='11' height='11'/%3E%3Crect fill='%23d35f74' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23d46174' y='20' width='11' height='11'/%3E%3Crect fill='%23d66473' x='30' width='11' height='11'/%3E%3Crect fill='%23d76673' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d96972' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23da6c72' y='30' width='11' height='11'/%3E%3Crect fill='%23db6e71' x='40' width='11' height='11'/%3E%3Crect fill='%23dc7171' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23dd7471' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23de7671' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23df7971' y='40' width='11' height='11'/%3E%3Crect fill='%23e07c71' x='50' width='11' height='11'/%3E%3Crect fill='%23e17e71' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23e28171' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23e38471' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23e38771' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23e48972' y='50' width='11' height='11'/%3E%3Crect fill='%23e58c72' x='60' width='11' height='11'/%3E%3Crect fill='%23e58f73' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23e69173' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23e69474' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23e79775' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23e79a75' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23e89c76' x='70' width='11' height='11'/%3E%3Crect fill='%23e89f77' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23e8a278' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23e9a47a' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23e9a77b' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23e9aa7c' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23e9ac7e' x='80' width='11' height='11'/%3E%3Crect fill='%23eaaf7f' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23eab281' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23eab482' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23eab784' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23eaba86' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ebbc88' x='90' width='11' height='11'/%3E%3Crect fill='%23ebbf8a' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23ebc18c' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23ebc48e' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23ebc790' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23ebc992' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23ebcc94' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23ebce97' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23ebd199' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23ecd39c' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23ecd69e' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23ecd8a1' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23ecdba4' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23ecdda6' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23ece0a9' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23ede2ac' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23ede4af' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23ede7b2' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23ede9b5' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23eeecb8' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
// background-attachment: fixed;
// background-size: cover;
// }
.mybackground2 {
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(54.05) translate(-981.5 -736.12)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(54.05) translate(-981.5 -736.12)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(54.05) translate(-981.5 -736.12)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(54.05) translate(-981.5 -736.12)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(54.05) translate(-981.5 -736.12)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(54.05) translate(-981.5 -736.12)'%3E%3Cg fill='%239930ff'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(54.05) translate(-981.5 -736.12)'%3E%3Cg fill='%239930ff'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(54.05) translate(-981.5 -736.12)'%3E%3Cg fill='%239930ff'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
</style>
