<template>
    <article class="col-span-2 lg:col-span-1 text-center bg-white" v-editable="blok">
      <div class="border-2">
        <h3 class="p-2 text-center bg-white" v-if="blok.name">{{blok.name}}</h3>
      </div>
      <div class="p-4 border-2 lg:px-12 border-t-0" v-if="blok.title">
        <p class="mb-4" v-if="blok.title">{{blok.title}}</p>
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