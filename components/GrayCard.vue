<template>
    <div class="single-col-body">
      <div class="p-2 pt-4 border-2 bg-white">
        <h3 class="text-center">{{title}}</h3>
      </div>
      <div class="p-4 border-2 lg:px-12 border-t-0 bg-gray">
        <p class="mb-4" v-html="text">
           
        </p>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            text: ''
        }
    },
    props: {
        title: String,
        text: String
    }

}
</script>

<style>

</style>