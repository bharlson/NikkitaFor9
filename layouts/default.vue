<template>
  <div>
    <Logo></Logo>
    <Nav></Nav>
    <main class="container mx-auto mt-10 px-10 md:px-20">
      <Nuxt />
    </main>
  </div>
</template>

<style>
</style>

<script>
import Nav from '@/components/Nav';
import Logo from '@/components/Logo';

export default {
  components:{
    Nav,
    Logo
  }
}
</script>

