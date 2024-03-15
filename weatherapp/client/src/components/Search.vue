<template>
  <div >
    <div class="header container md:h-screen p-5 bg-gray-800 rounded-lg text-white text-center mt-5 ">
      <h1 class="mb-5 text-3xl">Weather App</h1>
      <div class="flex justify-center  ">
        <div class="searchbar w-full mx-2">
         <input type="text" v-model="city" name="location" id="location" class="block w-full text-black rounded-md border-2 border-gray-300 py-2 px-3 placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm">

        </div>
        <button @click="searchWeather" class="btn-search btn bg-gradient-to-r rounded-md from-cyan to-magenta text-white px-4 py-2 ">
          Search 
        </button>
      </div>
     <div class="or-line-container">
  <div class="or-line"></div>
  <span>or</span>
  <div class="or-line"></div>
</div>
 <button @click="searchCurrentLocationWeather" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full ">
          current location <i class="fas fa-location"></i>
        </button>
    </div>
    
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      city: "",
      showWeather: false,
      apiKey: '3fb88be94d55466ac863dba74951b1fc' // Replace 'YOUR_API_KEY' with your actual API key
    };
  },
  methods: {
   async searchWeather() {
      this.showWeather = false;
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        this.$emit('weather-updated', response.data);
       this.$emit('search-location', this.city);
        console.log(response.data); // Log the response data for now
        // Process the response data and update your UI accordingly
        this.showWeather = true;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  async searchCurrentLocationWeather() {
  this.showWeather = false;
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const { latitude, longitude } = position.coords;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`);
    this.$emit('weather-updated', response.data);
    this.$emit('search-location', response.data.name); // Emit the city name
    this.showWeather = true;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

    
  }
};
</script>

<style scoped>
body {
  background-color: #121212 !important;
}
.or-line-container {
    display: flex;
    align-items: center;
  }
  .or-line {
    flex: 1;
    height: 1px;
    background-color: gray;
    margin: 0 10px;
  }


.btn-search {
  background-image: linear-gradient(to right, cyan, magenta);
}
</style>

