<template>
<div class="bg-gray p-12 border-t-2 border-b-2 lg:border-b-0">
    <nuxt-link 
    class="normal-case flex flex-row" 
    :to="'/'+path"
    :class="justify"
    :left="false"
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
    data(){
        return{
            text:'',
            path:'',
            left: false
        }
    },
    props:{
        text: String,
        path: String,
        left: Boolean
    },
    computed: {
        justify(){
            if(this.left){
                return 'justify-center lg:justify-left'
            }
            else{
                return 'justify-center'
            }
        }
    }

}
</script>

<style scoped lang="scss">

</style>