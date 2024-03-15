<template>
  <div v-if="weatherData" class="bg-custom-image h-80 p-8 rounded-md shadow-md mt-5 text-white">
    <h2 v-if="weatherData.name" class="text-2xl font-semibold mb-4">{{ weatherData.name }} Weather</h2>
    <div class="flex items-center mb-4">
      <span v-if="weatherData.main.temp" class="text-4xl font-bold"><i class="fas fa-temperature-high"></i> {{ weatherData.main.temp }}°C</span>
      <div v-if="weatherData.weather && weatherData.weather.length" class="ml-4">
        <span class="text-white-600">{{ weatherData.weather[0].description }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex items-center mr-4">
        <span class="text-white-600">Humidity:</span>
        <span v-if="weatherData.main.humidity" class="ml-2">{{ weatherData.main.humidity }}%</span>
      </div>
      <div class="flex items-center">
        <span class="text-white-600">Wind:</span>
        <span v-if="weatherData.wind" class="ml-2">{{ weatherData.wind.speed }}km/h</span>
      </div>
    </div>
  </div>
 
</template>


<script>
export default {
  name: 'WeatherDetail', 
  props: {
    weatherData: Object
  }
};
</script>

<style scoped>
/* Add any custom styles here */
.bg-custom-image {
  background-image: url('C:\Users\Ardra.s\Desktop\vuejs\weatherapp\client\src\assets\images\weather.jpg'); 
  background-size: cover;
  background-position: center;
}
</style>

