<template>
    <article class="text-center bg-white mb-4" v-editable="blok">
      <div class="border-2">
        <h3 class="px-5 pb-2 pt-4 float-left bg-black text-white" v-if="blok.number">{{blok.number}}</h3>
        <h3 class="p-2 pt-4 text-center bg-white" v-if="blok.title">{{blok.title}}</h3>
      </div>
      <div class="p-4 border-2 lg:px-12 border-t-0" v-if="blok.title || blok.text">
        <div class="text-left" v-if="blok.text">
          <rich-text-renderer
          :document="blok.text"
        />
        </div>
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
<style scoped>
    li > p {
        @apply text-base;
    }
    p {
        @apply text-xl;
    }
</style>