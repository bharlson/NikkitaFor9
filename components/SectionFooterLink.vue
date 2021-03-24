<template>
<div class="bg-gray p-12 border-t-2 border-b-2 lg:border-b-0">
    <nuxt-link 
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
</div>
</template>

<script>
export default {
    props:{
        text: String,
        path: String,
        left: Boolean
    },
}
</script>

<style scoped lang="scss">

</style>