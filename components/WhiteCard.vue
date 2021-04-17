<template>
    <article class="text-center" v-editable="blok">
      <div class=" border-2">
        <h3 class="p-2 pt-4 bg-white">{{blok.name}}</h3>
      </div>
      <div class="p-4 border-2 lg:px-12 border-t-0 bg-white" v-if="blok.title">
        <p class="mb-4">{{blok.title}}</p>
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