<template>
  <div v-editable="blok">
    <div class="grid grid-cols-1 lg:grid-cols-2 border-b-2">
      <div class="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2">
        <div class="img-bg img-bg-vision img-bg-vision-basic-needs"></div>
        <div class="p-4 border-t-2">
          <h4 class="font-bold text-center mt-2">
            {{blok.value1}}
          </h4>
        </div>
      </div>
      <!--/col-->
      <div class="flex flex-col">
        <div class="img-bg img-bg-vision img-bg-vision-power"></div>
        <div class="p-4 border-t-2">
          <h4 class="font-bold text-center mt-2">
            {{blok.value2}}
          </h4>
        </div>
      </div>
      <!--/col-->
    </div>
    <!--/row 1-->

    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex flex-col
              border-b-2 lg:border-b-0 lg:border-r-2">
        <div class="img-bg img-bg-vision img-bg-vision-beyond-survival"></div>
        <div class="p-4 border-t-2">
          <h4 class="font-bold text-center mt-2">
            {{blok.value3}}
          </h4>
        </div>
      </div>
      <!--/col-->
      <div class="flex flex-col ">
        <div class="img-bg img-bg-vision img-bg-vision-listening-posts"></div>
        <div class="p-4 border-t-2">
          <h4 class="font-bold text-center mt-2">
            {{blok.value4}}
          </h4>
        </div>
      </div>
      <!--/col-->
    </div>
    <!--/row 2-->
  </div>
</template>

<script>
export default {
    props: {
        blok: {
          type: Object,
          required: true
        }
    }
}
</script>

<style>

</style>