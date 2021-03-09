<template>
  <div>
    <Logo></Logo>
    <Nav></Nav>
    <div class="mx-auto flex-grow">
      <Nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang='scss'>
// .section-header{
//   &:first-of-type{
//     border-top:none;
//   }
// }
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

