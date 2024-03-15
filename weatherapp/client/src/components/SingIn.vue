<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="px-6 py-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Sign In</h2>
        <form @submit.prevent="signIn" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input type="text" name="email" v-model="email" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="username">
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" v-model="password" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="password">
          </div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign In
          </button>
           <router-link to="/signup" class="block text-sm font-medium text-gray-700 mt-2">Sign Up</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'SignIn',
  methods: {
  async signIn() {
    try {
      const formData = {
        email: this.email,
        password: this.password
      };

      const response = await axios.post('http://localhost:8081/auth/login', formData);

      if (response.data && response.data.token) {
        // Optionally, you can store the token in local storage or Vuex state for future use
        localStorage.setItem('token', response.data.token);

        // Navigate to the home page after successful login
        this.$router.push('/home');
      } else {
        throw new Error('Failed to sign in');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Optionally, handle sign-in error (e.g., show an error message to the user)
    }
  }
}
}
</script>

<style scoped>
/* Add any custom scoped styles here */
</style>
