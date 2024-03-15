<template>
  <div class="container mx-auto p-8">
    <h2 class="text-2xl font-semibold mb-4">{{ location }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="day in forecastData" :key="day.date" class="card">
        <h3 class="text-xl font-semibold">{{ day.date }}</h3>
     
          <div class="mr-4">
            <span class="text-gray-600">Temperature:</span>
            <span class="ml-2">{{ day.temperature }}°C</span>
          </div>
          <div>
            <span class="text-gray-600">Weather:</span>
            <span class="ml-2">{{ day.weatherDescription }}</span>
          </div>
       <div>
            <span class="text-gray-600">humidity:</span>
            <span class="ml-2">{{ day. humidity}}</span>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'weatherForecast',
  props: {
    location: String,
    apiKey: String
  },
  data() {
    return {
      forecastData: [],
      showForecast: false
    };
  },
  methods: {
    async fetchForecastData(location) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${this.apiKey}`);
        const locationName = response.data.city.name;
        console.log('Location Name:', locationName); 
        this.forecastData = response.data.list
        
          .filter((item, index) => index % 8 === 0) // Filter data to get every 8th item (1 item per day)
          .map(item => ({
            date: item.dt_txt,
            temperature: item.main.temp,
            weatherDescription: item.weather[0].description,
            humidity: item.main.humidity
          }));
        this.showForecast = true;
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    },
    async fetchCurrentLocationForecastData() {
      try {
        navigator.geolocation.getCurrentPosition(async position => {
          const { latitude, longitude } = position.coords;
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`);
          this.forecastData = response.data.list
          const locationName = response.data.city.name
          console.log('kkk',response.data.city.name)
          console.log('kkk',locationName)

            .filter((item, index) => index % 8 === 0)
            .map(item => ({
              date: item.dt_txt,
              temperature: item.main.temp,
              weatherDescription: item.weather[0].description,
              humidity: item.main.humidity
            }));
          this.showForecast = true;
        });
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    }
  },
  mounted() {
    if (this.location && this.apiKey) {
      this.fetchForecastData(this.location);
    }
  },
  watch: {
    location(newLocation) {
      this.forecastData = [];
      if (newLocation) {
        this.fetchForecastData(newLocation);
      }
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #e2e8f0;
}

.card h3 {
  margin-bottom: 0.5rem;
}
</style>
