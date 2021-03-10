<template>
  <footer class="bottom-0">
      <div class="border-t-2 grid grid-cols-1 lg:grid-cols-2">
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
      <section id="footer-links">
          <div class="bg-dark text-white p-8">
              <div class="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3">
                  <section id="explore">
                        <h4>Explore</h4>
                        <ul>
                            <li>
                                <nuxt-link class="footer-link" to="/about">Meet Nikkita</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-link" to="/vision">Vision</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-link" to="/policies">Policies</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="footer-link" to="/endorsements">Endorsements</nuxt-link>
                            </li>
                            <li>
                                <a class="footer-link" href="https://donorbox.org/nikkita-for-the-people" target="_blank">Donate</a>
                            </li>
                            <li>
                                <a class="footer-link" href="https://docs.google.com/forms/d/e/1FAIpQLScNnprVl_e9xSKCRl5mKBoMF2IF0p0snqB6j6d9pJCZaBQRTw/viewform" target="_blank">Volunteer</a>
                            </li>
                        </ul>
                  </section>
                  <section id="contact">
                      <h4>Contact</h4>
                      <p><a class="footer-link" href="mailto:info@nikkita4nine.com">info@nikkita4nine.com</a></p>
                      <p>
                          <em>Photos Courtesy of Alex Garland and Jake Gravbot</em>
                      </p>
                      <p class="my-4 serif">Paid for by Nikkita for the People</p>
                  </section>
                  <section id="social-media" class="col-span-2 md:col-span-1">
                      <h4 class="text-white">Social Media</h4>
                      <div class="flex mt-4">
                          <a href="https://instagram.com/Nikkita4Nine/" target="_blank">
                              <img class="w-10 mr-4" src="@/assets/img/icons/instagram.png" alt="instagram">
                          </a>

                          <a href="https://twitter.com/Nikkita4Nine/" target="_blank">
                              <img class="w-10" src="@/assets/img/icons/twitter.png" alt="instagram">
                          </a>
                      </div>
                  </section>
              </div>
          </div>
      </section><!--/Footer Links-->
  </footer>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'; 
export default {
    components: {
        SectionHeader
    }
}
</script>

<style lang='scss'>
$blue:#00e6ed;
$dark:#272727;
$white:#ffffff;
$gray:#f0f0f0;
.footer-link{
    font-family: 'Open Sans', Verdana, Arial, sans-serif;
    text-transform: uppercase; 
    color:$white;
    margin-bottom: 0.5rem;
    display: block;
    &:hover,&:active{
        cursor: pointer;
    }
}
</style>