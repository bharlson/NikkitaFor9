<template>
  <main >
    <section-header text="Endorsements"></section-header>
    <div class="bg-gray p-4 md:px-24 lg:px-40 grid grid-cols-1 lg:grid-cols-2 gap-4 items-start mx-auto pb-12">
      <component
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component" />
      <div class="lg:col-span-2">
        <p><span class="bold serif text-2xl">*</span> : Indicates an individual endorsement, which does not necessarily reflect the views of the endorser's associated organization</p>
      </div>
    </div>
  </main>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';

export default {
    data(){
        return{
          story: { content: {} },
        }
    },
    components:{
      SectionHeader
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
      const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
      const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
  
      // Load the JSON from the API - loadig the home content (index page)
      return context.app.$storyapi.get(`cdn/stories/${fullSlug}`, {
        version: version
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
