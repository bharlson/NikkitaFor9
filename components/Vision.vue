<template>
  <section class="py-12" v-editable="blok" :style="cssProps">
    <article class="single-col-body lg:p-12">
      <div class="p-2 pt-4 border-2 bg-white">
        <h3 class="text-center">{{ blok.title }}</h3>
      </div>
      <div
        class="p-4 mb-4 border-2 lg:px-12 border-t-0 bg-gray"
        v-if="blok.body"
      >
        <rich-text-renderer :document="blok.body" />
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
      cssProps() {
          return {
              '--url': `url(${this.blok.background.filename})`
          }
      }
  }
};
</script>
<style scoped>
    section {
        background-image: var(--url);
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>