<template>
  <article>
      <component
        :v-for="blok in story.content.blokName"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component"
        />
  </article>
</template>

<script>
export default {
    data(){
        return{
          story: { content: {} },
        }
    },
    props:{
        blokName:{
            Type: String,
            default: 'body'
        },
        blok: {
          type: Object,
          required: true,
        }
    },
    mounted () {
      // Use the input event for instant update of content
      this.$storybridge.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })
      // Use the bridge to listen the events
      this.$storybridge.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    },
    asyncData (context) {
      // // This what would we do in real project
      // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
      // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
  
      // Load the JSON from the API - loadig the home content (index page)
      return context.app.$storyapi.get('cdn/stories/home', {
        version: 'draft'
      }).then((res) => {
        return res.data
      }).catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({ statusCode: 404, message: 'Failed to receive content form api' })
        } else {
          console.error(res.response.data)
          context.error({ statusCode: res.response.status, message: res.response.data })
        }
      })
    }

}
</script>

<style>

</style>