<template>
  <div class="row border border-secondary">
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
    <div class="col-12">
      <h2>Clock : {{formattedElapsedTime}}</h2>
    </div>
    <div class="stats">
      <div class="row">
        <div class="border border-priamry col-6">
          <h3>Session Stats</h3>
          <h1>No of Sessions : {{no_session}}</h1>
          <h1>Errors : {{ no_error }}</h1>
          <h1>Speed : {{typing_speed.toFixed(2)}}</h1>
        </div>
        <div class="border border-priamry col-6">
          <h3>Overall</h3>
          <h2>Error Rate: {{$store.state.typing.error_rate.toFixed(2)}}</h2>
          <h2>Typing Speed: {{$store.state.typing.typing_speed.toFixed(2)}}</h2>
        </div>
        <div class="col-12">
          <button @click="reset_stats" class="btn btn-outline-secondary">Reset Stats</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex';
export default {
  name: "TypeBox",
  data () {
    return {
      inputText: "",
      typeString: "",
      no_error: 0,
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
    // check_input: function () {
    //   if
    // },
    // onTypingFinished: function () {
    //   console.log('in comopnetn changes')
    //   this.$store.commit('change_finished')
    // }
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
</style>
