<template>
    <article>
      <div class=" border-2">
        <h3 v-if="number > 0" class="px-5 pb-2 pt-4 float-left bg-black text-white">{{number}}</h3>
        <h3 class="p-2 pt-4 text-center bg-white">{{title}}</h3>
      </div>
      <div class="p-4 border-2 lg:px-12 border-t-0 bg-white" v-if="text.length>0">
        <p class="mb-4" v-html="text">
           
        </p>
      </div>
    </article>
</template>

<script>
export default {
    data(){
        return{
            number:0,
            title:'',
            text: ''
        }
    },
    props: {
        number: Number,
        title: String,
        text: String
    }

}
</script>

<style>

</style>