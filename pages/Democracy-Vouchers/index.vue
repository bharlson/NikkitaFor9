<template>
<main>
  <section-header text="Help Nikkita Qualify for Democracy Vouchers"></section-header>
  <div class="p-4 md:px-24 bg-gray">
    <!-- <p>You must fill out all the entry fields , your signature must match the signature on file with KC Elections</p> -->
    <p>Fill out <a href="#form">the form</a> below to help Nikkita qualify for democracy vouchers. In order for your form to get counted, it's important that you fill out all the fields and that your signature matches what King County elections has on file.</p>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="col border-l-2 border-t-2 border-r-2 md:border-b-2">
        <img src="@/assets/img/democracy-vouchers/explainer-1.jpg" alt="Explainer" class="w-100">
      </div>
      <div class="col border-l-2 md:border-l-0 border-t-2 border-r-2 border-b-2">
        <img src="@/assets/img/democracy-vouchers/explainer-2.jpg" alt="Explainer" class="w-100">
      </div>
    </div>
        <p class="mt-4">To sign, click "Click here to sign" and click "Draw" to write your signature as close as you can to how you'd sign your ballot.</p>
    <iframe
    id="form" 
    class="border-2"
    src="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBR7XCI2tDeuis6biwLE2H89wJQE9C-81sS6kDpTX8r-UpuhugYpXeYS28hyLBbd2o*&hosted=false" 
    width="100%" height="100%" frameborder="0" 
    style=" overflow: hidden; min-height: 500px; min-width: 300px;"></iframe>
  </div>
</main>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'; 
export default {
    components: {
        SectionHeader
    }
}
</script>