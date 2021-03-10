<template>
<main>
  <section-header class="mt-0" text="Our Values"></section-header>
  <section id="basic-needs">
    <gray-card
      title="Basic needs and safety are intertwined"
      text="When people’s basic needs are met, we build safety. Meeting basic needs is a baseline for community safety. Our city deserves better options than violent policing and mass incarceration as our only choices for public safety. The majority of what we call crime happens because people do not have their basic needs met. In order for us to create the safer city we imagine, we need affordable and social housing, equitable transportation, affordable childcare, fully funded schools with school counselors, restorative justice coordinators, and health services, more culturally responsive and accessible youth programs, health and sex education that teaches healthy relationships, accessible mental health supports, an array of community-based options for supporting domestic violence survivors and restroative and transformative responses for those who cause harm, civilianized 911, community-based drug user supports, and thriving wage employment opportunities.We must make investments in mobile mental health and crisis support teams immediately, so we can get the right care to people experiencing emergencies when they need it.">
    </gray-card>
  </section>
  <section id="beyond-survival">
    <gray-card
      title="We must go beyond survival to a Seattle where we can all thrive"
      text="We cannot thrive as a city, when our Black, Native, Brown, queer, trans, and disabled neighbors are being left behind. A rising tide may lift all boats, but we do not all have boats to catch the ride. Not to forget, a rising tide in the midst of a global climate catastrophe is a bad thing! Many in our City are being pushed out by the rising cost of housing, over policing and criminalization, and an overall lack of access to supportive services and opportunities to not simply meet basic needs but to ensure people can be self-determined and have control over their own lives. Equity and justice for all means that your race, gender, where you were born or the work you do does not prevent you from living a whole, healthy, thriving life. Thriving means that we have the right to joy, to health, to rest, to work, to balance, not just to getting by. We need economic, social, racial, and environmental justice, and a radical redistribution of wealth and political power to have the safer city of which we dream.">
    </gray-card>
  </section>
  <section id="power">
    <gray-card
      title="Power comes from the people"
      text="<b>Power comes from the people</b> and our policy making should too! We should develop our policy solutions together, following the lead of those most impacted and those actually doing the work on the ground. <b>The Solidarity Budget</b> is a great example of ground-up policy development as well as cross-movement coalition building. There is enough when we work together with shared values and vision.">
    </gray-card>
  </section>
  <section id="listening-posts">
    <gray-card
      title="Community Listening Posts"
      text="The goal of community listening posts is to come together to develop an evolving community platform that identifies the priorities and solutions of communities living and/or working in Seattle, and those who have been gentrified out of Seattle, who have been impacted by racism, ableism, poverty, police violence and other core areas where City policy can make a difference. This will change our platform and will change it for the better. As organizers and members of impacted communities we have identified some policy areas and possible solutions. None of this is set in stone--nor should it be. The greatest flaw of most electeds is the inability to change course when the community tells them to move in a different direction. The platform, policies, and solutions we develop together will chart the course for our next four years in office together continuing to build on the movements that have already brought us to this moment.">
    </gray-card>
  </section>
</main>
</template>

<script>
import GrayCard from '@/components/GrayCard';

export default {
    data(){
        return{

        }
    },
    components:{
      GrayCard
    }
}
</script>

<style lang='scss'>
#basic-needs{
  background-size: cover;
  background-image: url('@/assets/img/home/values_basic_needs_puzzle.jpg');
}
#beyond-survival{
  background-size: cover;
  background-image: url('@/assets/img/home/values_we_must_go_beyond_survival_spaceneedle.jpg');
}
#power{
  background-size: cover;
  background-image: url('@/assets/img/home/values_power_to_the_people_fist.jpg');
  background-position:top left;
}
#listening-posts{
  background-size: cover;
  background-image: url('@/assets/img/home/values_community_listening_posts_mic.jpg');
}
</style>