<script setup>
import { ref } from 'vue';
import axios from 'axios'
const API__KEY = '21fb40f9530f2f06808216ebc8193a4a'

let weather = ref(null);
let city = ref('');
let today = ref(new Date().toLocaleString("ru-RU", {weekday: "short", day: "numeric", month: "long", year: "numeric"}));

const getWeather = () => {
  axios(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API__KEY}&units=metric`)
    .then(res => weather.value = res.data)
    .catch(err => weather.value = null)
}

</script>

<template>
<input class="input-city" type="text" placeholder="Введите город" v-model="city" @keyup.enter="getWeather">
<br>
<button type="button" style="margin: 20px;" @click="getWeather">Узнать погоду</button>
<div v-if="weather?.weather">
  <div class="temp">{{ Math.round(weather.main.temp) }} &deg C</div>
  <div class="city"> {{ weather.name }}</div>
  <div class="date"> {{ today }}</div>
  <div class="wind">Ветер:  {{ weather.wind.speed }} м/с</div>
  <div class="weather">{{ weather.weather[0].main }}</div>
  <img :src="`./assets/img/${weather.weather[0].icon}.svg`" alt="">
</div>
<div v-else>Город не найден</div>
</template>

<style scoped>
.input-city{
  border-radius: 8px;
  width: 250px;
  height: 30px;
  padding-left: 10px;

}
.temp {
  font-size: 2rem;
}
</style>
