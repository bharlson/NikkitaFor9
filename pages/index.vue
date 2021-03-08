<template>
    <main>
      <section id="meet-nikkita">
        <div class="px-4 lg:px-40 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <img class="w-100" src="@/assets/img/Nikkita-smile-denim-vest-1000px.jpg" alt="">
          <div class="col">
            <h2 class="text-center lg:text-left">Meet Nikkita Oliver</h2>
            <p>Nikkita Oliver (they/them) is a community organizer, cultural worker, artist, attorney, and candidate for Seattle City Council Position 9. Nikkita has lived in Seattle, WA since 2004 and has served as a community support and cultural worker with Urban Impact, the Union Gospel Mission’s YROC (Youth Reach Out Center), the Urban Youth Leadership Academy, Seattle Urban Academy, Who’s Next?, Year Up, and Writers in School. They are currently Executive Director of
              <a href="https://www.creativejusticenw.org/" target="_blank">Creative Justice</a>--an arts-based healing-engaged space for youth.  Nikkita Oliver was a founding member of the grassroots
              <a href="https://seattlepeoplesparty.com/" target="_blank">Seattle Peoples Party</a>. And they are a part of several coalitions and organizations in the Seattle/King County region including
              <a href="https://decriminalizeseattle.com/" target="_blank">Decriminalize Seattle</a>,
              <a href="https://www.instagram.com/freethemallwa/?hl=en" target="_blank">Free Them All WA</a>, and
              <a href="https://nonewyouthjail.com/" target="_blank">No New Youth Jail</a> -- all of them building a world which centers collective health and liberation from oppressive systems.
            </p>
              <div class="view-more" v-if="viewMore">
                <p>As Executive Director of Creative Justice, Nikkita helps lead an innovative, arts-based restorative justice program that keeps at-risk youth from becoming part of the school-to-prison pipeline and provides healing-engaged arts spaces that encourage youth to create the change they need to see in their communities.</p>
                <p>Creative Justice--along with
                  <a href="https://choose180.org/" target="_blank">Choose 180</a>,
                  <a href="https://www.communitypassageways.org/" target="_blank">Community Passageways</a>, and
                  <a href="https://linktr.ee/collectivejustice" target="_blank">Collective Justice</a>--is an integral part of developing
                  “<a href="https://www.youtube.com/watch?v=OK-D1XY64yo" target="_blank">Restorative Community Pathways</a>” -- a new community-based and -led restorative justice program in King County. Creative Justice has partnered with
                  <a href="https://www.communitypassageways.org/" target="_blank">Community Passageways</a> and
                  <a href="https://www.africatownlandtrust.org/" target="_blank">Africatown Community Land Trust</a> to build the
                  <a href="https://www.instagram.com/youthachievementcenter/?hl=en" target="_blank">Youth Achievement Center</a>--a housing initiative in the south end of Seattle (aka the Souf End) which will co-locate housing and essential supports for youth and families.
                </p>
                <p>While Nikkita may be the candidate, this is OUR campaign. As abolitionist and transformative justice practitioner Mariame Kaba says, “Everything worthwhile is done with others.” </p>
                <p>We are in the midst of a global pandemic, an economic recession, a racial justice uprising, a housing crisis, and climate catastrophe. The ‘Nikkita For 9’ campaign is committed to ensuring that this campaign is grounded in community, with mutual aid and collective care at the forefront. Our campaign will build community capacity to support each others’ immediate needs while mobilizing for transformative change. We are committed to participating in mutual aid as a radical act of solidarity among neighbors. As a city, we are only as healthy and safe as the neighbor who has the least amount of access. In the coming weeks and months, we look forward to building an evolving and responsive platform which speaks to the lived experiences, vision and needs of those most impacted by systemic oppression and marginalization in our city and region. Together we rise!</p>
              </div>
            <p class="mt-4">
              <a class="font-bold" @click="viewMore = !viewMore"><button>Read full statement</button></a>
            </p>
            </div>
          </div><!--/grid-->
      </section><!--/Meet Nikkita-->
      <section id="our-values">
        <section-header text="Our Values"></section-header>
        <div class="px-4 md:px-64 xl:px-96 grid grid-cols-1 lg:grid-cols-2">
          <div class="p-4">
            <img src="https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png" alt="" class="w-100 mb-4 p-12">
            <p class="font-bold text-center">Basic Needs and Safety are intertwined</p>
          </div>
          <div class="p-4">
            <img src="https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png" alt="" class="w-100 mb-4 p-12">
            <p class="font-bold text-center">Power comes from the people</p>
          </div>
          <div class="p-4">
            <img src="https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png" alt="" class="w-100 mb-4 p-12">
            <p class="font-bold text-center">We must go beyond survival</p>
          </div>
          <div class="p-4">
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
        <div class="px-2 grid grid-cols-1">
          <p class="text-center p-12">The 'Nikkita for 9' campaign is committed to ensuring that this campaign is grounded in community, with mutual aid and collective care at the forefront.</p>
          <table class="auto mx-auto w-100 border-2 border-black-100">
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
          </table>
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
  td, th{
    font-size:2rem;
    padding:1rem;
    text-transform: uppercase;
  }
</style>
