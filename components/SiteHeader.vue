<template>
  <div v-editable="blok">
      <p>{{blok.text}}</p>
  </div>
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