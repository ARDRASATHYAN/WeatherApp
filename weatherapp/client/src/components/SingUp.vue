<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="px-6 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Sign Up</h2>
        <form @submit.prevent="signup" class="space-y-4"> <!-- Changed method name to signup -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" v-model="username" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input type="text" v-model="email" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email">
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone No</label>
            <input type="text" v-model="phone" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Phone No">
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" v-model="password" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password">
          </div>
          
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up <!-- Changed button text to "Sign Up" -->
          </button>
        </form>
        <router-link :to="{ name: 'SignIn' }" class="block text-sm font-medium text-gray-700 mt-2">Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      email: '',
      phone: '',
      password: ''
    };
  },
  methods: {
    async signup() {
      try {
        const userData = {
          username: this.username,
          email: this.email,
          phone: this.phone,
          password: this.password
        };

        console.log("form", userData);

        const response = await axios.post('http://localhost:8081/auth/signup', userData);

        if (!response.data) {
          throw new Error('Failed to sign up');
        }
        if (response.status === 201) {
          router.push({ name: 'SignIn' });
        } 

        // Optionally, handle successful sign-up (e.g., show a success message)
      } catch (error) {
        console.error('Error signing up:', error.message);
        // Optionally, handle sign-up error (e.g., show an error message to the user)
      }
    }
  }
};
</script>


<style scoped>
/* Add any custom scoped styles here */
</style>
