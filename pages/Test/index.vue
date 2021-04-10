<template>
  <main>
      <h1>{{content.title}}</h1>
      <p>
          {{content.bodyText}}
      </p>
      <p>{{richtext}}</p>
      <rich-text-renderer></rich-text-renderer>
  </main>
</template>

<script>
import { Block } from '@marvr/storyblok-rich-text-types';

export default {
    asyncData(context){
        return context.app.$storyapi.get('cdn/stories/test',{
            version: 'draft'
            // version: context.isDev ? 'draft':'published',
        })
        .then(res =>{
            console.log(res.data.story.content.body)
            return{
                content: res.data.story.content.body[1],
                richtext: res.data.story.content.body[2]
            }
        });
    },
    props: {
        blok: {
            type: Object,
            required: true
        }
    }
    // props: ['text'],
    // computed: {
    //     richtext() {
    //     return this.$storyapi.richTextResolver.render(this.text)
    //     }
    // }
    // ,
    // mounted(){
    //     this.$storybridge.on('change', ()=>{
    //         location.reload(true);
    //     });
    // }
}
</script>

<style>

</style>