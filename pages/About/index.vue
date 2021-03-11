<template>
<main class="bg-gray">
    <section-header text="Meet Nikkita Oliver"></section-header>
    <div class="img-bg img-bg-about-hero"></div>
    <div class="single-col-body">
        <p>Nikkita Oliver (they/them) is a community organizer, cultural worker, artist, attorney, and candidate for Seattle City Council Position 9. Nikkita has lived in Seattle, WA since 2004 and has served as a community support and cultural worker with Urban Impact, the Union Gospel Mission’s YROC (Youth Reach Out Center), the Urban Youth Leadership Academy, Seattle Urban Academy, Who’s Next?, Year Up, and Writers in School. They are currently Executive Director of
        <a href="https://www.creativejusticenw.org/" target="_blank">Creative Justice</a>--an arts-based healing-engaged space for youth.  Nikkita Oliver was a founding member of the grassroots
        <a href="https://seattlepeoplesparty.com/" target="_blank">Seattle Peoples Party</a>. And they are a part of several coalitions and organizations in the Seattle/King County region including
        <a href="https://decriminalizeseattle.com/" target="_blank">Decriminalize Seattle</a>,
        <a href="https://www.instagram.com/freethemallwa/?hl=en" target="_blank">Free Them All WA</a>, and
        <a href="https://nonewyouthjail.com/" target="_blank">No New Youth Jail</a> -- all of them building a world which centers collective health and liberation from oppressive systems.
        </p>
        <p>As Executive Director of Creative Justice, Nikkita helps lead an innovative, arts-based restorative justice program that keeps at-risk youth from becoming part of the school-to-prison pipeline and provides healing-engaged arts spaces that encourage youth to create the change they need to see in their communities. </p>

        <p>Creative Justice--along with 
            <a href="https://choose180.org/" target="_blank">Choose 180</a>, 
            <a href="https://www.communitypassageways.org/" target="_blank">Community Passageways</a>, and 
            <a href="https://linktr.ee/collectivejustice" target="_blank">Collective Justice</a>--is an integral part of developing “
            <a href="https://www.youtube.com/watch?v=OK-D1XY64yo" target="_blank">Restorative Community Pathways</a>” -- a new community-based and -led restorative justice program in King County. Creative Justice has partnered with 
            <a href="https://www.communitypassageways.org/" target="_blank">Community Passageways</a> and <a href="https://www.africatownlandtrust.org/" target="_blank">Africatown Community Land Trust</a> to build the Youth Achievement Center--a housing initiative in the south end of Seattle (aka the Souf End) which will co-locate housing and essential supports for youth and families.</p>

        <p>While Nikkita may be the candidate, this is OUR campaign. As abolitionist and transformative justice practitioner Mariame Kaba says, “Everything worthwhile is done with others.”</p>
        <p>We are in the midst of a global pandemic, an economic recession, a racial justice uprising, a housing crisis, and climate catastrophe. The ‘Nikkita For 9’ campaign is committed to ensuring that this campaign is grounded in community, with mutual aid and collective care at the forefront. Our campaign will build community capacity to support each others’ immediate needs while mobilizing for transformative change. We are committed to participating in mutual aid as a radical act of solidarity among neighbors. As a city, we are only as healthy and safe as the neighbor who has the least amount of access. In the coming weeks and months, we look forward to building an evolving and responsive platform which speaks to the lived experiences, vision and needs of those most impacted by systemic oppression and marginalization in our city and region. Together we rise!</p>
        <img src="@/assets/img/about/nikkita_oliver_signature-digitized.png" alt="" class="w-96 my-12">
    </div>
</main>
</template>

<script>
import SectionHeader from '@/components/SectionHeader';

export default {
    data(){
        return{
            
        }
    },
  components:{
    SectionHeader
  }
}
</script>

<style lang='scss'>
.img-bg-about-hero{
    background-image: url('assets/img/about/about_nikkita_oliver_hero-color.jpg');
    height: 200px;
    background-position:left;

    @media (min-width: 1024px) {
        height:500px;
    }
}



</style>