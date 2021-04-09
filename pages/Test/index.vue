<template>
  <main v-editable="blok">
      <h1>{{content.title}}</h1>
      <p>
          {{content.bodyText}}
      </p>
  </main>
</template>

<script>
export default {
    asyncData(context){
        return context.app.$storyapi.get('cdn/stories/test',{
            version: 'draft'
            // version: context.isDev ? 'draft':'published',
        })
        .then(res =>{
            console.log(res.data.story.content.body)
            return{
                content: res.data.story.content.body[1]
            }
        });
    }
    ,
    mounted(){
        this.$storybridge.on('change', ()=>{
            location.reload(true);
        });
    }
}
</script>

<style>

</style>