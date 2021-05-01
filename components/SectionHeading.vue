<template>
  <div 
    v-editable="blok" 
    class="section-header w-100 p-4 bg-white border-b-2 capitalize"
    :class="blok.class"
    >
    
      <h2 class="text-center pt-2"> {{blok.text}}</h2>
  </div>
</template>

<script>
export default {
    props:{
        // text: String,
        blok: {
          type: Object,
          required: true
        }
    }
}
</script>