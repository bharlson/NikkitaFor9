<template>
  <div class="marquee hidden lg:block">
  <div>
    <template v-for="n in MARQUEE_LENGTH">
        <p class="marquee-text sans-serif text-black mx-4" :key="n">
            Donate or volunteer to help out Nikkita for Nine
        </p>
        <span class="material-icons text-sm" :key="n">
            brightness_high
        </span>
    </template>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            MARQUEE_LENGTH: 20
        }
    }
}
</script>

<style lang="scss">
$blue: #00e6de;
$dark: #272727;
$gray: #f0f0f0;
$white: #ffffff;

.marquee {
  height: 25px;
  width: 100%;
  overflow: hidden;
  position: relative;
  text-transform: uppercase;
  transform: inherit;
}

.marquee-text{
    display:inline-block;
    color:$dark;
    &:hover,&:active{
        color:$dark;
    }
}

.marquee div {
  display: block;
  width: 200%;
  height: 30px;
  transform:auto;
  position: absolute;
  overflow: hidden;
  background-color:$blue;

  animation: marquee 40s linear infinite;
  &:hover{
      cursor:s-resize;
  }
}


// @keyframes marquee {
//   0% { transform:translateX(0); }
//   100% { transform:translateX(-100%); }
// }
@keyframes marquee {
  0% { left:0; }
  100% { left: -100%; }
}
/* .marquee-link{
    color:Red;
} */



</style>