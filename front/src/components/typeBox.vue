<template>
  <div class="row">
    <h1 class="col-12">{{ typeString }}</h1>
    <div class="col-2 form-check form-switch justify-content-center">
      <input
        id="flexSwitchCheckDefault"
        class="form-check-input"
        type="checkbox"
        @change="case_sensitive=case_sensitive?false:true">
      <label class="form-check-label" for="flexSwitchCheckDefault">Case Sensitive</label>
    </div>
    <div class="input-group col-10">
      <span class="input-group-text">Type Here</span>
      <textarea v-model="inputText" id="myinputbox" class="form-control" aria-label="With textarea" />
    </div>
    <!-- stopwatch -->
    <div class="col-12 my-5 clock py-3">
      <h2>Clock : {{ formattedElapsedTime }}</h2>
    </div>
    <div class="stats">
      <div class="row">
        <div class="col-6">
          <h1 class="border-bottom border-dark">Session Stats</h1>
          <h3>No of Sessions : {{no_session}}</h3>
          <h3>Errors : {{ no_error }}</h3>
          <h3>Speed : {{ typing_speed.toFixed(2) }}</h3>
        </div>
        <div class="col-6">
          <h1 class="border-bottom border-dark">Overall</h1>
          <h3>Error Rate / EPM : {{$store.state.typing.error_rate.toFixed(2)}}</h3>
          <h3>Typing Speed: {{$store.state.typing.typing_speed.toFixed(2)}}</h3>
        </div>
        <div class="col-12">
          <button @click="reset_stats" class="btn btn-danger">Reset Stats</button>
        </div>
        <audio :src="error_sound" id="errorsound" preload="auto"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex';
import error from '../assets/error.mp3'
export default {
  name: "TypeBox",
  data () {
    return {
      inputText: "",
      typeString: "",
      no_error: 0,
      error_sound:  error,
      no_session: 0,
      typing_speed: 0,
      case_sensitive: false,
      apiendpoint: "",
      typingFinished: false,
      elapsedTime: 0,
      timer: undefined
    }
  },
  watch: {
    inputText (newInputText, oldInputText) {
      if (newInputText.length === 0) {
        return
      }
      if (newInputText.length === this.typeString.length) {
        this.typingFinished = true
      } else {
        if (this.case_sensitive) {
          console.log("in case")
          if (newInputText[newInputText.length - 1] !== this.typeString[this.inputText.length - 1]) {
            this.inputText = oldInputText
            this.no_error += 1
            document.getElementById('errorsound').play()
          }
        } else {
          if (newInputText[newInputText.length - 1].toLowerCase() !==this.typeString[this.inputText.length - 1].toLowerCase()) {
            this.inputText = oldInputText
            this.no_error += 1
          }
        }
      }
    },
    typingFinished (newOnTypingFinished, oldOnTypingFinished) {
      console.log('in finsished')
      if (newOnTypingFinished === true) {
        this.typingFinished = false
        this.no_session += 1
        console.log(this.elapsedTime)
        const min = this.elapsedTime / 1000 / 60
        const er = this.no_error / min
        const ty = this.typeString.length / min / 5
        const temp = this.typing_speed * (this.no_session - 1)
        this.typing_speed = ty
        console.log(er ,"dfdf" ,this.no_session , this.typing_speed/this.no_session, min, 'sdfasjf;')
        this.initializing_action({ er, ty:(this.typing_speed + ty / this.no_session) })
        this.inputText = ''
        this.no_error = 0
        axios.get(`http://localhost:8081/${this.apiendpoint}get/`)
          .then((res) => {
            console.log(res, "res")
            this.typeString = res.data.data.str
            this.reset()
          })
          .catch((err) => {
            console.log("erre", err);
          })
        console.log('ty finished')
      }
    },
  },
  created () {
    console.log("in created", this.$router.currentRoute._rawValue.name);
    switch (this.$router.currentRoute._rawValue.name) {
      case "Home":
        this.apiendpoint = "single/";
        break;
      case "Paragraphs":
        this.apiendpoint = "paragraph/";
        break;
      default:
        break;
    }
    this.start()
    axios
      .get(`http://localhost:8081/${this.apiendpoint}get/`)
      .then((res) => {
        console.log(res, "res");
        this.typeString = res.data.data.str;
      })
      .catch((err) => {
        console.log("erre", err);
      });
  },
  mounted () {
    document.getElementById('myinputbox').focus()
  },
  beforeUnmount () {
    console.log("un mounting");
  },
  methods: {
    ...mapActions({
      initializing_action: 'typing/initializing_action',
      reseting_stats: 'typing/reseting_stats'
    }),
    reset_stats () {
      this.no_error = 0
      this.typing_speed = 0
      this.reseting_stats()
    },
    start () {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop () {
      clearInterval(this.timer);
    },
    reset () {
      this.elapsedTime = 0;
    }
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: rgb(78, 70, 70);
}
#myinputbox {
  font-size: 150%;
}
#flexSwitchCheckDefault {
  height: 5vh;
  width: 10vh;
  justify-content: center;
}
h3{
  color: rgb(13, 43, 141);
}
.clock {
  background-color: #3fff62;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.51'%3E%3Cpolygon fill='%2354cc55' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%236a9948' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%237f663b' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%2395332e' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23aa0021' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
font-family: 'Stint Ultra Condensed', cursive;
  font-size: 100px;
  color: rgb(255, 255, 255);
}
</style>
