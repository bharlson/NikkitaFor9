<template>
  <div>
    <Logo></Logo>
    <Nav></Nav>
    <div class="mx-auto mt-10">
      <Nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
</style>

<script>
import Nav from '@/components/Nav';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';

export default {
  components:{
    Nav,
    Logo,
    Footer
  }
}
</script>

