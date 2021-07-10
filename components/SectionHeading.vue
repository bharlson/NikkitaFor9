<template>
  <div v-editable="blok" :class="blok.class">
    <div class="section-header w-100 p-4 bg-white border-b-2 capitalize" v-if="!blok.subheading">
        <h2 class="text-center pt-2"> {{blok.text}}</h2>
    </div>
    <div v-else>
        <h3 class="my-6 text-center text-3xl">{{blok.text}}</h3>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        subheading: false,
        blok: {
          type: Object,
          required: true
        }
    },
}
</script>