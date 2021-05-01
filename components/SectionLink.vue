<template>
<div v-editable="blok" class="bg-gray p-12 border-t-2 border-b-2 lg:border-b-0">
    <a v-if="blok.externalLink" :href="blok.path" class="normal-case flex flex-row justify-center" target="_blank">
        <h3 class="mt-2 text-center">
            {{blok.text}}
        </h3>
        <div class="material-icons hidden md:block text-5xl ml-3">
            arrow_right_alt
        </div>
    </a>
    <nuxt-link 
    v-if="!blok.externalLink"
    class="normal-case flex flex-row justify-center" 
    :to="'/'+blok.path"
    >
        <h3 class="mt-2 text-center lg:text-left">
            {{blok.text}}
        </h3>
        <div class="material-icons hidden md:block text-5xl ml-3">
            arrow_right_alt
        </div>
    </nuxt-link>
</div>
</template>

<script>
export default {
    props:{
        blok: {
          type: Object,
          required: true
        }
        // ,
        // external: {
        //     type:Boolean,
        //     default:false
        // }
    },
}
</script>