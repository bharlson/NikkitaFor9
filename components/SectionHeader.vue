<template>
  <div 
    class="section-header w-100 p-4 bg-white border-b-2 capitalize">
      <h2 class="text-center pt-2"> {{text}}</h2>
      <!-- <p v-if="blok.text">{{blok.text}}</p> -->
  </div>
</template>

<script>
export default {
    props:{
        text: String,
        // blok: {
        //   type: Object,
        //   required: true
        // }
    }
}
</script>