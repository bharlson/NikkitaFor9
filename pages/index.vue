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
        <section-header text="Get Involved Today!"></section-header>
        <!-- <div class="bg-gray text-center p-12 md:px-48 lg:px-80 xl:px-96">
          <h3 class="sans-serif">We need 400 donations and 400 signatures to qualify for Democracy Vouchers</h3>
          <p>E-sign and donate at least $10 today</p>
          <div class="grid grid-cols-2 gap-8 mt-4">
            
              <nuxt-link to="/democracy-vouchers">
                <button class="px-8">Sign</button>
              </nuxt-link>
            
            <a href="https://donorbox.org/nikkita-for-the-people" target="_blank">
              <button class="px-8">Donate</button>
            </a>
          </div>
        </div> -->
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
        <section-header class="lg:border-t-2" text="The Policies We Believe In"></section-header>
        <div class="img-bg img-bg-policies-paper p-12 grid grid-cols-1">
          <table class="auto mx-auto w-100 border-2 border-black-100">
            <tr>
              <th class="border-2 bg-black text-white border-black-100">1</th>
              <td>
                <nuxt-link to="/policies#housing" class="">
                  Housing For All
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#housing">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">2</th>
              <td>
                <nuxt-link class="" to="/policies#divest">
                  Divest from Policing to Invest in Community
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#divest">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">3</th>
              <td>
                <nuxt-link to="/policies#environment">
                  Environmental Justice
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#environment">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">4</th>
              <td>
                <nuxt-link to="/policies#children">
                  Children, Youth, and Families Deserve to Thrive
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#children">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">5</th>
              <td>
                <nuxt-link to="/policies#justice">
                  Racial &amp; Economic Justice
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#justice">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">6</th>
              <td>
                <nuxt-link to="/policies#disaster-relief">
                  Disaster Relief &amp; Preparing for Disasters 
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#disaster-relief">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">7</th>
              <td>
                <nuxt-link to="/policies#arts">
                  Thriving Sustained Local Arts and Culture Community
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#arts">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">8</th>
              <td>
                <nuxt-link to="/policies#healthcare">
                  Universal Healthcare
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#healthcare">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">9</th>
              <td>
                <nuxt-link to="/policies#democracy">
                  Democracy and Participation
                </nuxt-link>
              </td>
              <td>
                <nuxt-link to="/policies#democracy">
                  <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                  </span>
                </nuxt-link>
              </td>
            </tr>
          </table>
        </div><!--/img-bg-->
        <section-footer-link style="border-bottom:none;" class="border-b-0" text="Learn more about our policies" path="about"></section-footer-link>
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
