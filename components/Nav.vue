<template>
<nav class="bg-white px-8 shadow-md">
     <div class="flex justify-center">
         <nuxt-link
         to='/'
         exact
         class="no-underline text-teal-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8">
             Home
         </nuxt-link>
         <nuxt-link
         to='/our-values' 
         class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8">
             Our Values
         </nuxt-link>
         <nuxt-link
         to='/our-policies' 
         class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8">
             Our Policies
         </nuxt-link>
         <nuxt-link
         to='/about' 
         class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3">
             About
         </nuxt-link>
     </div>
</nav>
</template>

<script>
export default {
    data(){

    }

}
</script>

<style lang='scss'>
// @import '@/assets/css/tailwind.css';
.nuxt-link-active{
  @apply border-black;
}
</style>