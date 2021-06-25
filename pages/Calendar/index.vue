<template>
  <main>
      <section-header text="Calendar"></section-header>
      <iframe src="https://calendar.google.com/calendar/embed?src=144oldmkrv4k4s6oi3gn9spkug%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
            style="
            border: 0;
            font-family:'Times New Roman';
            " 
            width="100%" 
            
            height="600" 
            frameborder="0" 
            scrolling="no">
      </iframe>
      <vue-google-calendar/>
  </main>
</template>

<script>
import VueGoogleCalendar from "vue-google-calendar/src/vue-google-calendar.vue"
import SectionHeader from '@/components/SectionHeader.vue'; 
// node_modules/vue-google-calendar/src/vue-google-calendar.vue
export default {
data(){  
    return {
        id: "144oldmkrv4k4s6oi3gn9spkug@group.calendar.google.com"
        ,
        // summary: "description ....",
        // color: "#cd74e6",
        dates: [
            {
                id: "144oldmkrv4k4s6oi3gn9spkug"
                // ,
                // summary: "event name",
                // start: { dateTime: "2020-09-17T10:00:00-04:00" },
                // end: { dateTime: "2020-09-17T11:00:00-04:00" }
            }
        ]
    }
},
components: {
    VueGoogleCalendar,
    SectionHeader
}
    

}
</script>

<style lang="scss" scoped>
    .cal-wrapper{
        height:500px;
    }
</style>