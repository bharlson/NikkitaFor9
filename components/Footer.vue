<template>
  <footer>
      <div class="grid grid-cols-1 lg:grid-cols-2">
          <section id="volunteer">
                <section-header text="Volunteer"></section-header>
                <p class="text-center">Volunteer for our campaign by signing up below</p>
                <p class="mt-4 text-center">
                    <a href="">
                        <button>SIGN UP</button>
                    </a>
                </p>
          </section>
          <!--/Sign Up-->
          <section id="donate">
              <section-header text="donate"></section-header>
              <p class="text-center">Donate to our campaign</p>
              <p class="mt-4 text-center">
                <a href="">
                    <button>DONATE HERE</button>
                </a>
              </p>
          </section>
          <!--/Donate-->
        <section id="footer-links" class="mx-auto">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div class="col">
                    <ul class="">
                        <li>
                            <nuxt-link to="/about">ABOUT</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/our-values">OUR VALUES</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/our-policies">OUR POLICIES</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">VOLUNTEER</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">DONATE</nuxt-link>
                        </li>
                    </ul>
                </div><!--/col-->
            </div>
        </section>
        <div class="col">
            <h4 class="text-center mb-4">Keep Up with Us on Social Media</h4>
            <p class="text-center"><a href="instagram.com">IG</a> <a href="twitter.com">TW</a></p>
        </div><!--/col-->
          <!--/Footer Links-->

      </div>
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

<style>

</style>