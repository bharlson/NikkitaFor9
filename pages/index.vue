<template>
    <main>
      <section id="meet-nikkita">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <img class="w-100 lg:hidden" src="@/assets/img/home/meet_nikkita_hero.jpg" alt="Meet Nikkita">
          <div class="meet-nikkita-bg hidden lg:block border-y-2 md:col-span-6"></div>
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
            <div class="p-12 border-t-2">
              <nuxt-link class="normal-case" to="/about">
                <h3 class="mt-2">Learn more about Nikkita
                  <span class="material-icons hidden md:d-inline-block">
                    arrow_right_alt
                  </span>
                </h3>
              </nuxt-link>
            </div>
          </div>
        </div><!--/grid-->
      </section><!--/Meet Nikkita-->
      <section id="our-values">
        <section-header text="Our Values"></section-header>
        <div class="px-4 md:px-64 xl:px-96 grid grid-cols-1 lg:grid-cols-2">
          <div class="p-4 xl:px-12">
            <img src="https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png" alt="" class="w-100 mb-4 p-12">
            <p class="font-bold text-center">Basic Needs and Safety are intertwined</p>
          </div>
          <div class="p-4 xl:px-12">
            <img src="https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png" alt="" class="w-100 mb-4 p-12">
            <p class="font-bold text-center">Power comes from the people</p>
          </div>
          <div class="p-4 xl:px-12">
            <img src="https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png" alt="" class="w-100 mb-4 p-12">
            <p class="font-bold text-center">We must go beyond survival</p>
          </div>
          <div class="p-4 xl:px-12">
            <img src="https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png" alt="" class="w-100 mb-4 p-12">
            <p class="font-bold text-center">Community Listening Posts</p>
          </div>
        </div>
        <p class="text-center my-4">
          <nuxt-link to="/">
            <button>Learn more of our values</button>
          </nuxt-link>
        </p>
      </section><!--/Our Values-->
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
  $buttonColorHover: rgb(41, 41, 41);

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
