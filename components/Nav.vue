<template>
<nav class="bg-white shadow-md">
    <div
        @click="mobileMenu = !mobileMenu" 
        class="nav-link mobile-menu-toggle md:hidden md:flex-1 text-center no-underline text-dark border-b-2 border-r-2 border-transparent uppercase tracking-wide font-bold p-3">
        <span class="material-icons">
            {{menuIcon}}
        </span>
    </div>
     <div :class="{'hidden md:flex' : mobileMenu}" 
     class="flex flex-col md:flex-row">
         <nuxt-link
         to='/about' 
         class="nav-link md:flex-1 text-center no-underline text-dark border-b-2 border-r-2 border-transparent uppercase tracking-wide font-bold p-3">
             About Nikkita
         </nuxt-link>
        <nuxt-link
         to='/our-values' 
         class="nav-link md:flex-1 text-center no-underline text-dark border-b-2 border-r-2 border-transparent uppercase tracking-wide font-bold p-3">
             Vision
         </nuxt-link>
         <nuxt-link
         to='/our-policies' 
         class="nav-link md:flex-1 text-center no-underline text-dark border-b-2 border-r-2 border-transparent uppercase tracking-wide font-bold p-3">
             Policies
         </nuxt-link>
         <nuxt-link
         to='/'
         exact
         class="nav-link md:flex-1 text-center no-underline text-dark border-b-2 border-r-2 border-transparent uppercase tracking-wide font-bold p-3">
             Home
         </nuxt-link>
     </div>
</nav>
</template>

<script>
export default {
    data(){
        return{
            mobileMenu:true
        }
    },
    computed:{
        menuIcon(){
            if(this.mobileMenu){
                return 'menu'
            }
            else{
                return 'close'
            }
        }
    }

}
</script>

<style lang='scss'>
// @import '@/assets/css/tailwind.css';

.nuxt-link-active{
  @apply border-black;
}
$blue:#00e6ed;
$dark:#272727;
$white:#ffffff;

.nav-link{
    &:hover, &:active{
        cursor:pointer;
        background-color:$dark;
        color:$white;
        font-weight:600;
        
    }
}
.mobile-menu-toggle{
    &:hover, &:active{
        cursor:pointer;
    }
}
nav{
    a{
       font-family: 'Open Sans', Verdana, Arial, sans-serif;  
    }
}
</style>