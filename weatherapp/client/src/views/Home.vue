<template>
  <div class="container mx-auto p-4 bg-gray-400">
    <Navbars />
    <div class="flex flex-col md:flex-row ">
      <div class="md:w-1/3 mr-4">
        <Search @weather-updated="updateWeatherData"  @search-location="updateLocation"  />
      </div>
      <div class="md:w-2/3">
       <Weatherdetail :weatherData="weatherData"/>
      <Forecast :location="location" :apiKey="apiKey" />
      </div>
    </div>
  
  </div>
</template>

<script>
import Navbars from '../components/Navbars.vue'
import Search from '../components/Search.vue'
import Weatherdetail from '../components/Weatherdetail.vue'
import Forecast from '../components/Forecast.vue';


export default {
  name: 'HomeView',
  components: {
    Navbars,
    Search,
    Weatherdetail,
    Forecast,
  
  },
  data() {
    return {
      weatherData: null,
      location: '',
      apiKey: '3fb88be94d55466ac863dba74951b1fc'
    }
  },
  methods: {
    updateWeatherData(data) {
      this.weatherData = data;
    },
      updateLocation(location) {
      this.location = location;
    }
  }
}
</script>
