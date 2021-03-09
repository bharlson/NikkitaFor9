<template>
  <div class="w-100 p-4 bg-white b-2-dark">
      <h2 class="text-center uppercase"> {{text}}</h2>
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