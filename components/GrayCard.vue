<template>
    <article>
      <div class="p-2 pt-4 border-2 bg-white">
        <h3 class="text-center">{{title}}</h3>
      </div>
      <div class="p-4 border-2 lg:px-12 border-t-0 bg-gray" v-if="text.length>0">
        <p class="mb-4" v-html="text">
           
        </p>
      </div>
    </article>
</template>

<script>
export default {
    props: {
        title: String,
        text: String
    }

}
</script>