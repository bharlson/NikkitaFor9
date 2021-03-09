<template>
    <main>
      <section id="meet-nikkita">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <img class="w-100 lg:hidden" src="@/assets/img/home/meet_nikkita_hero.jpg" alt="Meet Nikkita">
          <div class="meet-nikkita-bg hidden border-y-2 md:col-span-6 lg:block lg:border-b-2"></div>
          <div class="flex flex-col bg-gray border-t-2 md:border-t-0 md:border-l-2 md:border-b-2 md:col-span-6">
            <div class="p-12">
              <h3 class="text-center lg:text-left">Meet Nikkita Oliver</h3>
              <p>Nikkita Oliver (they/them) is a community organizer, cultural worker, artist, attorney, and candidate for Seattle City Council Position 9. Nikkita has lived in Seattle, WA since 2004 and has served as a community support and cultural worker with Urban Impact, the Union Gospel Mission’s YROC (Youth Reach Out Center), the Urban Youth Leadership Academy, Seattle Urban Academy, Who’s Next?, Year Up, and Writers in School. They are currently Executive Director of
                <a href="https://www.creativejusticenw.org/" target="_blank">Creative Justice</a>--an arts-based healing-engaged space for youth.  Nikkita Oliver was a founding member of the grassroots
                <a href="https://seattlepeoplesparty.com/" target="_blank">Seattle Peoples Party</a>. And they are a part of several coalitions and organizations in the Seattle/King County region including
                <a href="https://decriminalizeseattle.com/" target="_blank">Decriminalize Seattle</a>,
                <a href="https://www.instagram.com/freethemallwa/?hl=en" target="_blank">Free Them All WA</a>, and
                <a href="https://nonewyouthjail.com/" target="_blank">No New Youth Jail</a> -- all of them building a world which centers collective health and liberation from oppressive systems.
              </p>
            </div>
            <div class="p-12 border-t-2 border-b-2 md:border-b-0">
              <nuxt-link class="normal-case" to="/about">
                <h3 class="mt-2">Learn more about Nikkita
                  <span class="material-icons hidden md:inline-block">
                    arrow_right_alt
                  </span>
                </h3>
              </nuxt-link>
            </div>
          </div>
        </div><!--/grid-->
      </section><!--/Meet Nikkita-->
      <section id="democracy-vouchers">
        <section-header text="Help Us Qualify for Democracy Vouchers"></section-header>
        <div class="bg-gray text-center p-12 md:px-48 lg:px-80 xl:px-96 border-b-2">
          <h3 class="sans-serif">We need 400 donations and 400 signatures to qualify for Democracy Vouchers</h3>
          <p>E-sign and donate today</p>
          <div class="grid grid-cols-2 gap-8 mt-4">
            <a href="#">
              <button class="px-4">E-Sign</button>
            </a>
            <a href="#">
              <button class="px-4">Donate</button>
            </a>
          </div>
        </div>
        <div class="bg-gray text-center border-b-2 p-12">
              <nuxt-link class="normal-case" to="/democracy-vouchers">
                <h3 class="mt-2">Learn more about the democracy voucher program
                  <span class="material-icons hidden md:inline-block">
                    arrow_right_alt
                  </span>
                </h3>
              </nuxt-link>          
        </div>
      </section><!--/democracy vouchers-->

      <section id="our-vision">
        <section-header text="Our Vision for Seattle"></section-header>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex flex-col">
            <img src="@/assets/img/home/values_basic_needs_puzzle.jpg" alt="" class="w-100 mb-4">
            <div class="p-4">
              <h4 class="font-bold text-center">Basic Needs and Safety are intertwined</h4>
            </div>
          </div> <!--/col-->
          <div class="flex flex-col">
            <img src="@/assets/img/home/values_power_to_the_people_fist.jpg" alt="" class="w-100 mb-4">
            <div class="p-4">
              <h4 class="font-bold text-center">Power comes from the people</h4>
            </div>
          </div> <!--/col-->
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex flex-col">
            <img src="@/assets/img/home/values_we_must_go_beyond_survival_spaceneedle.jpg" alt="" class="w-100 mb-4">
            <div class="p-4">
              <h4 class="font-bold text-center">We must go beyond survival</h4>
            </div>
          </div> <!--/col-->
          <div class="flex flex-col ">
            <img src="@/assets/img/home/values_community_listening_posts_mic.jpg" alt="" class="w-100 mb-4">
            <div class="p-4">
              <h4 class="font-bold text-center">Community Listening Posts</h4>
            </div>
          </div> <!--/col-->
        </div>
        <p class="text-center my-4">
          <nuxt-link to="/">
            <button>Learn more of our values</button>
          </nuxt-link>
        </p>
      </section><!--/Our vision-->
      <section id="our-policies">
        <section-header text="Our Policies"></section-header>
        <div class="p-4 lg:px-40 grid grid-cols-1">
          <p class="text-center p-12">The 'Nikkita for 9' campaign is committed to ensuring that this campaign is grounded in community, with mutual aid and collective care at the forefront.</p>
          <!-- <table class="auto mx-auto w-100 border-2 border-black-100">
            <tr>
              <th class="border-2 bg-black text-white border-black-100">1</th>
              <td>Housing For All</td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">2</th>
              <td>Divest from Policing to Invest in Community</td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">3</th>
              <td>Environmental Justice</td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">4</th>
              <td>Children, Youth, and Families Deserve to Thrive</td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">5</th>
              <td>Racial &amp; Economic Justice</td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">6</th>
              <td>Disaster Relief &amp; Preparing for Disasters </td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">7</th>
              <td>Thriving Sustained Local Arts and Culture Community</td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">8</th>
              <td>Universal Healthcare</td>
            </tr>
            <tr>
              <th class="border-2 bg-black text-white border-black-100">9</th>
              <td>Democracy and Participation</td>
            </tr>
          </table> -->
        </div>

      </section>
    </main>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';

export default {
  data(){
    return{
      viewMore: false      
    }
  },
  components:{

  }
}
</script>

<style lang="scss">
  $blue: #00e6de;
  $dark: #272727;
  $gray: #f0f0f0;
  $linkColor:$dark;
  $buttonColor: $dark;
  $buttonColorHover: $blue;

  .meet-nikkita-bg{
    background-image: url('@/assets/img/home/meet_nikkita_hero.jpg');
    background-size: cover;
    background-position:center;
    width: 100%;
    height: 100%;
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
    }
  }
</style>
