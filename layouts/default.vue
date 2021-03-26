<template>
  <div>
    <Logo></Logo>
    <header-marquee></header-marquee>
    <Nav></Nav>
    <div class="mx-auto flex-grow">
      <Nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Logo from '@/components/Logo';
import HeaderMarquee from '@/components/HeaderMarquee';
import Footer from '@/components/Footer';

export default {
  components:{
    Logo,
    HeaderMarquee,
    Nav,
    Footer
  }
}
</script>

