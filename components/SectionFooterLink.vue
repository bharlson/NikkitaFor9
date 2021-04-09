<template>
<div class="bg-gray p-12 border-t-2 border-b-2 lg:border-b-0">
    <nuxt-link 
    v-if="!external"
    class="normal-case flex flex-row justify-center" 
    :to="'/'+path"
    >
        <h3 class="mt-2 text-center lg:text-left">
            {{text}}
        </h3>
        <div class="material-icons hidden md:block text-5xl ml-3">
            arrow_right_alt
        </div>
    </nuxt-link>
    <a v-if="external" :href="path" class="normal-case flex flex-row justify-center">
        <h3 class="mt-2 text-center">
            {{text}}
        </h3>
        <div class="material-icons hidden md:block text-5xl ml-3">
            arrow_right_alt
        </div>
    </a>
</div>
</template>

<script>
export default {
    props:{
        text: String,
        path: String,
        external: Boolean
    },
}
</script>