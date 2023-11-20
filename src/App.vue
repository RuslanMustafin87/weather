<script>
import axios from 'axios'
const API__KEY = '21fb40f9530f2f06808216ebc8193a4a'

export default {
  data() {
    return {
      weather: null,
      city: 'Chishmy',
      today: new Date().toLocaleString("ru-RU", {weekday: "short", day: "numeric", month: "long", year: "numeric"})
    }
  },
  mounted() {
    this.getWeather();
    setInterval(this.getWeather, 600000)
  },
  methods: {
    getWeather(){
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API__KEY}&units=metric`)
        .then(res => this.weather = res.data)
        .catch(err => this.weather = null)
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
<input class="input-city" type="text" v-model="city" @keyup.enter="getWeather">

<br>
<button type="button" style="margin: 20px;" @click="getWeather">Узнать погоду</button>
<div v-if="weather?.weather">
  <div class="temp">{{ Math.round(weather.main.temp) }} &deg C</div>
  <div class="city"> {{ weather.name }}</div>
  <div class="date"> {{ today }}</div>
  <div class="wind">Ветер:  {{ weather.wind.speed }} м/с</div>
  <!-- <div class="weather">{{ weather.weather[0].main }}</div> -->
  <img :src="src" alt="">
</div>
<div v-else>City not find</div>
</template>

<style scoped>
.input-city{
  width: 250px;
  height: 30px;
  padding-left: 10px;
}
.temp {
  font-size: 2rem;
}
</style>
