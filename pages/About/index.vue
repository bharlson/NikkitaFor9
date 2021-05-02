<template>
<main class="bg-gray">
    <section-header text="Meet Nikkita Oliver"></section-header>
    <div class="img-bg img-bg-about-hero"></div>
    <div class="single-col-body">
        <component
            v-for="blok in story.content.body"
            :key="blok._uid"
            :blok="blok"
            :is="blok.component" 
        />
        <img src="@/assets/img/about/nikkita_oliver_signature-digitized.png" alt="" class="w-96 my-12">
    </div>
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

<style lang='scss'>
.img-bg-about-hero{
    background-image: url('assets/img/about/about_nikkita_oliver_hero-color.jpg');
    height: 200px;
    background-position:left;

    @media (min-width: 1024px) {
        height:500px;
    }
}
</style>