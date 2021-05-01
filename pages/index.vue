<template>
    <main>
      <section id="meet-nikkita">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <img class="w-100 lg:hidden" src="@/assets/img/home/meet_nikkita_hero-color.jpg" alt="Meet Nikkita">
          <div class="img-bg img-bg-meet-nikkita hidden border-y-2 md:col-span-6 lg:block lg:border-b-2"></div>
          <div class="flex flex-col bg-gray border-t-2 lg:border-t-0 lg:border-l-2 lg:border-b-2 md:col-span-6">
            <div class="p-12">
              <h3 class="text-center lg:text-left">Meet Nikkita Oliver</h3>
              <!-- <rich-text-renderer :document="meetNikkita"/> -->
              <component
                v-for="blok in story.content.body"
                :key="blok._uid"
                :blok="blok"
                :is="blok.component" 
              />
            </div>
            <section-footer-link left="true" text="Learn more about Nikkita" path="about"></section-footer-link>
          </div>
        </div><!--/grid-->
      </section><!--/Meet Nikkita-->
      <section id="democracy-vouchers">
        <section-header class="hidden lg:block" text="Get Involved Today!"></section-header>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <section id="volunteer" class="lg:border-r-2">
                <section-header text="Volunteer"></section-header>
                <div class="bg-gray py-8">
                    <p class="text-center">Volunteer for our campaign by signing up below</p>
                    <p class="mt-4 text-center">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScNnprVl_e9xSKCRl5mKBoMF2IF0p0snqB6j6d9pJCZaBQRTw/viewform" target="_blank">
                            <button>SIGN UP</button>
                        </a>
                    </p>
                </div>
          </section>
          <!--/Sign Up-->
          <section id="donate" class="border-t-2 lg:border-t-0">
              <section-header text="donate"></section-header>
              <div class="bg-gray py-8">
                  <p class="text-center">Donate to our campaign</p>
                  <p class="mt-4 text-center">
                    <a href="https://donorbox.org/nikkita-for-the-people" target="_blank">
                        <button>DONATE HERE</button>
                    </a>
                  </p>
              </div>
          </section>
          <!--/Donate-->
      </div>
        <section-footer-link 
        text="Submit your Democracy Vouchers online!" 
        path="http://tinyurl.com/SeattleVouchers"
        external
        >
        </section-footer-link>
      </section><!--/democracy vouchers-->
      <section id="our-vision">
        <component
          v-for="blok in story.content.OurVision"
          :key="blok._uid"
          :blok="blok"
          :is="blok.component" 
        />
      </section><!--/Our vision-->
      <section id="our-policies">
        <component
          v-for="blok in story.content.PoliciesWeBelieveIn"
          :key="blok._uid"
          :blok="blok"
          :is="blok.component" 
        />
      </section><!--/Policies-->
    </main>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';
import SectionFooterLink from '@/components/SectionFooterLink';

export default {
  data(){
    return{
      viewMore: false  ,
      story: { content: {} }    
    }
  },
  components:{
    SectionHeader,
    SectionFooterLink
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

<style lang="scss">
  .img-bg{
    background-size: cover;
    background-position:center;
    width: 100%;
    // height: 100%;  
    &-meet-nikkita{
      background-image: url('@/assets/img/home/meet_nikkita_hero-color.jpg');   
    }
    &-vision{
      height: 300px;
      &-basic-needs{
        background-image: url('assets/img/home/values_basic_needs_puzzle.jpg');
      }
      &-power{
        background-image: url('assets/img/home/values_power_to_the_people_fist.jpg');
      }
      &-beyond-survival{
        background-image: url('assets/img/home/values_we_must_go_beyond_survival_spaceneedle.jpg');
      }
      &-listening-posts{
        background-image: url('assets/img/home/values_community_listening_posts_mic.jpg');
      }
    }
    &-policies-paper{
      background-image: url('assets/img/home/policies_bg_paper.jpg');
    }
  }

  ol li {
    list-style: none;
  }

  th,td{
    padding:1.5rem;
  }
  th{
    border:none;
  }
  td{
    font-style:italic;
    background: $white;
  }

  a{
    color:$dark;
    &:hover,&:active{
      font-weight: 500;
      color:$blue;
    }
  }

  button{
    background-color:$buttonColor;
    color:#fff;
    font-weight: 700;
    text-transform: uppercase;

    &:hover,&:active{
      background-color:$buttonColorHover;
      color:$dark;
      cursor:pointer;
    }
  }
</style>
