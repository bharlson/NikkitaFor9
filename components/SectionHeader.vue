<template>
  <div class="w-100 p-4 bg-gray-300">
      <h2 class="text-center"> {{text}}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return{
            text:''
        }
    },
    props:{
        text: String
    }

}
</script>

<style>

</style>