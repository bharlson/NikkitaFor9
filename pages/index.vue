<template>
    <main>
      <section id="meet-nikkita">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <img class="w-100 lg:hidden" src="@/assets/img/home/meet_nikkita_hero-color.jpg" alt="Meet Nikkita">
          <div class="img-bg img-bg-meet-nikkita hidden border-y-2 md:col-span-6 lg:block lg:border-b-2"></div>
          <div class="flex flex-col bg-gray border-t-2 lg:border-t-0 lg:border-l-2 lg:border-b-2 md:col-span-6">
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
            <section-footer-link text="Learn more about Nikkita" path="about"></section-footer-link>
          </div>
        </div><!--/grid-->
      </section><!--/Meet Nikkita-->
      <section id="democracy-vouchers">
        <section-header text="Help Us Qualify for Democracy Vouchers"></section-header>
        <div class="bg-gray text-center p-12 md:px-48 lg:px-80 xl:px-96">
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
        </div>
        <section-footer-link text="Learn more about the democracy voucher program" path="democracy-vouchers"></section-footer-link>
      </section><!--/democracy vouchers-->

      <section id="our-vision">
        <section-header class="lg:border-t-2" text="Our Vision for Seattle"></section-header>
        <div class="grid grid-cols-1 lg:grid-cols-2
        border-b-2">
          <div class="flex flex-col 
          border-b-2 lg:border-b-0 lg:border-r-2">
            <div class="img-bg img-bg-vision img-bg-vision-basic-needs"></div>
            <div class="p-4 border-t-2">
              <h4 class="font-bold text-center mt-2">Basic Needs and Safety are intertwined</h4>
            </div>
          </div> <!--/col-->
          <div class="flex flex-col">
            <div class="img-bg img-bg-vision img-bg-vision-power"></div>
            <div class="p-4 border-t-2">
              <h4 class="font-bold text-center mt-2">Power comes from the people</h4>
            </div>
          </div> <!--/col-->
        </div><!--/row 1-->

        <div class="grid grid-cols-1 lg:grid-cols-2
        ">
          <div class="flex flex-col 
          border-b-2 lg:border-b-0 lg:border-r-2">
          <div class="img-bg img-bg-vision img-bg-vision-beyond-survival"></div>
            <div class="p-4 border-t-2">
              <h4 class="font-bold text-center mt-2">We must go beyond survival</h4>
            </div>
          </div> <!--/col-->
          <div class="flex flex-col ">
            <div class="img-bg img-bg-vision img-bg-vision-listening-posts"></div>
            <div class="p-4 border-t-2">
              <h4 class="font-bold text-center mt-2">Community Listening Posts</h4>
            </div>
          </div> <!--/col-->
        </div><!--/row 2-->
        <section-footer-link path="vision" text="Learn more about our vision"></section-footer-link>
      </section><!--/Our vision-->
      <section id="our-policies">
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
      viewMore: false      
    }
  },
  components:{
    SectionHeader,
    SectionFooterLink
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
