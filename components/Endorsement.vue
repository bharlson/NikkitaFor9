<template>
    <article class="text-center bg-white" v-editable="blok">
      <div class="border-2">
        <h4 class="p-2 text-center bg-white text-2xl" v-if="blok.name">{{blok.name}}</h4>
      </div>
      <div class="p-4 border-2 lg:px-12 border-t-0" v-if="blok.title">
        <p class="mb-4" v-if="blok.title">{{blok.title}}</p>
        <img class="mx-auto max-h-24 object-contain" :src="blok.logo.filename" v-if="blok.logo"/>
      </div>
    </article>
</template>

<script>
export default {
  props: {
      blok: {
        type: Object,
        required: true
      }
  }
}
</script>