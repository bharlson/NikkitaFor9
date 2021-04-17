<template>
  <main>
      <!-- <h1>{{content.title}}</h1>
      <p>
          {{content.bodyText}}
      </p>
      <h5>Rich text now works I guess?</h5>
      <rich-text-renderer :document="richtext"/> -->
      <home-section-policies-list/>
  </main>
</template>

<script>
import Article from '@/components/Article.vue'
import HomeSectionPoliciesList from '@/components/HomeSectionPoliciesList.vue'


export default {
    // asyncData(context){
    //     return context.app.$storyapi.get('cdn/stories/test',{
    //         version: 'draft'
    //         // version: context.isDev ? 'draft':'published',
    //     })
    //     .then(res =>{
    //         console.log(res.data.story.content.body)
    //         return{
    //             content: res.data.story.content.body[1],
    //             richtext: res.data.story.content.body[2].text
    //         }
    //     });
    // },
    components:{
        HomeSectionPoliciesList
    }
    //,
    // data () {
    //     return {
    //         story: { content: {} }
    //         }
    // }
    // props: {
    //     blok: {
    //         type: Object,
    //         required: true
    //     }
    // },
    // mounted(){
    //     this.$storybridge.on('change', ()=>{
    //         location.reload(true);
    //     });
    // }
}
</script>

<style>

</style>