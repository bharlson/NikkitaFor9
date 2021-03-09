<template>
  <div class="section-header w-100 p-4 bg-white border-b-2 capitalize">
      <h2 class="text-center pt-2"> {{text}}</h2>
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

<style lang='scss'>
</style>