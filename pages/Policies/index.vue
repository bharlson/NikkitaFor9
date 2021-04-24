<template>
  <main class="bg-gray">
    <section-header class="mt-0" text="Our Policies"></section-header>
    <div class="single-col-body lg:px-12">
      <component
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component" />
    </div>
  </main>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import WhiteCard from "@/components/WhiteCard.vue";
export default {
  components: {
    SectionHeader,
    WhiteCard,
  },
  mounted() {
    // Use the input event for instant update of content
    console.log("mounted");
    this.$storybridge.on("input", (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content;
      }
    });
    // Use the bridge to listen the events
    this.$storybridge.on(["published", "change"], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      });
    });
  },
  asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get("cdn/stories/policies", {
        version: "draft",
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api",
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          });
        }
      });
  },
};
</script>

<style lang='scss'>
ol {
  list-style-type: decimal;
  margin-left: 1rem;
  padding: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  li {
    margin-bottom: 1rem;
  }
}
</style>