<template>
<main>
  <section-header class="mt-0" text="Our Values"></section-header>
  <component
  v-for="blok in story.content.body"
  :key="blok._uid"
  :blok="blok"
  :is="blok.component" />
</main>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';

export default {
    components:{
      SectionHeader
    },
    mounted () {
      // Use the input event for instant update of content
      console.log('mounted')
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
      const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
      const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
  
      return context.app.$storyapi.get('cdn/stories' + fullSlug, {
        version: version,
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