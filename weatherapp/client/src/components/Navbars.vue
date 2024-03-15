<template>
  <Disclosure as="nav" class="bg-gray-800" >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
           <i class='fas fa-cloud-sun' style='font-size:48px;color:white'></i>
          </div>
          
        </div>
       
              
               <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
  Logout
</button>

             
            </div>
           
         
        </div>
      
    

    
  </Disclosure>
</template>

<script setup>
import { Disclosure} from '@headlessui/vue'

import router from '@/router';


const logout = () => {
  localStorage.removeItem('token');
    router.push({ name: 'SignIn' });
}

</script>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader'
});
</script>
<style lang="">
    
</style>