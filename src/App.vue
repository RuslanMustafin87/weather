<script>
import axios from 'axios'
const API__KEY = '21fb40f9530f2f06808216ebc8193a4a'

export default {
  data() {
    return {
      weather: {},
      city: 'Chishmy',
    }
  },
  created() {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API__KEY}&units=metric`)
      .then(res => {this.weather = res.data; })

    setInterval(() => {
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API__KEY}&units=metric`)
      .then(res => {this.weather = res.data; })
    }, 5000)
  },
  methods: {
    getWeather(){
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API__KEY}&units=metric`)
        .then(res => this.weather = res.data)
    }
  },
  computed: {
    src(){
      return`https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
    }
  }
}
</script>

<template>
<input type="text" v-model="city" @keyup.enter="getWeather">
<br>
<button type="button" style="margin: 20px;" @click="getWeather">Get weather</button>
<div class="temp">Temperature: {{ weather.main.temp }} &deg</div>
<div class="wind">Wind: {{ weather.wind.speed }} m/s</div>
<div class="weather">{{ weather.weather[0].main }}</div>
<img :src="src" alt="">
</template>

<style scoped>

</style>
