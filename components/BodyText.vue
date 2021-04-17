<template>
  <rich-text-renderer 
    v-editable="blok"
    :document="blok.text"

  />
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

<style>
</style>