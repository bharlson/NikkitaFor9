<template>
  <main >
    <section-header text="Endorsements"></section-header>
    <!-- <p v-for="i in endorsements" :key="i.text">
      {{i.name}}, {{i.title}}
    </p> -->

      <div class="bg-gray p-4 md:px-24 lg:px-40 grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
      <white-card
        class="text-center w-100"
        v-for="i in endorsements" 
        :key="i.text"
        :title="i.name"
        :text="i.title"
        >
      </white-card>
      </div>

  </main>
</template>

<script>
import GrayCard from '@/components/GrayCard';
import SectionHeader from '@/components/SectionHeader';

export default {
    data(){
        return{
            endorsements:[
                          {
                            "name": "CM Tammy Morales",
                            "title": "Seattle City Council District 2"
                          },
                          {
                            "name": "Mike O'Brien",
                            "title": "Former Seattle City Councilmember"
                          },
                          {
                            "name": "Velma Veloria",
                            "title": "Former State Rep. 11th District"
                          },
                          {
                            "name": "Rep Tarra Simmons ",
                            "title": "State Rep District 23 - Position 1"
                          },
                          {
                            "name": "Rep Kirsten Harris-Talley ",
                            "title": "WA Sate Rep. 37th LD"
                          },
                          {
                            "name": "Rep Jesse Johnson",
                            "title": "State Rep LD 30th"
                          },

                          {
                            "name": "Sutapa Basu",
                            "title": "Executive Director, Alene Morris Women's Center at UW"
                          },
                          {
                            "name": "Sean Goode",
                            "title": "Executive Director, Choose 180"
                          },
                          {
                            "name": "Jerrell Davis",
                            "title": "Muscian"
                          },
                          {
                            "name": "IUPAT DC 5",
                            "title": ""
                          },
                          {
                            "name": "Seattle Peoples Party",
                            "title": ""
                          },
                          {
                            "name": "The Station",
                            "title": ""
                          },
                          {
                            "name": "Jose Luis Rodriguez ",
                            "title": "Owner of the Station"
                          },
                          {
                            "name": "Leona Moore-Rodriguez",
                            "title": "Owner of the Station"
                          },
                          {
                            "name": "Julie Chang-Schulman",
                            "title": "Artist, Cultural Worker, Organizer"
                          },
                          {
                            "name": "Matt Remle",
                            "title": "Co-Founder of Mazaska Talks"
                          },
                          {
                            "name": "Jaelynn Scott",
                            "title": "Executive Director of Lavendar Rights Project"
                          },
                          {
                            "name": "Jesse Hagopian",
                            "title": "Editor for Rethinking Schools, Orgnaizer with Black Lives Matter in School"
                          },
                          {
                            "name": "Coach Dominique Davis",
                            "title": "CEO & Founder of Community Passageways"
                          },
                          {
                            "name": "Ijeoma Oluo",
                            "title": "Author of \"So You Want To Talk About Race\" and \"Mediocre: The Dangerous Legacy of White Male America\""
                          },
                          {
                            "name": "Katrina Johnson",
                            "title": "Families on the Frontline, Washington Coalition for Police Accountability"
                          },

                          {
                            "name": "Robel Woldu",
                            "title": "Owner of AthleticForm"
                          },
                          {
                            "name": "Martina Kartman",
                            "title": "Program Director & Co-Founder of Collective Justice"
                          },
                          {
                            "name": "Sadé Smith, Attorney at Law",
                            "title": "Dismantle, The Smith Law, LLC "
                          },
                          {
                            "name": "Deaunte Damper",
                            "title": "Community Activist"
                          },
                          {
                            "name": "Rev. Ellie VerGowe",
                            "title": "MDiv\nOrdained minister with the Progressive Christian Alliance\nPastor of Outreach, Youth Children and Family at First Covenant Church\nLocal artist/voice teacher\nHarborview Spiritual Care Intern"
                          },
                          {
                            "name": "Rev. Bianca Davis-Lovelace",
                            "title": "Executive Director of REACH & Chair of the WA Poor People’s Campaign"
                          },
                          {
                            "name": "Haydeé Lavariega (they/them)",
                            "title": "Community Leader, Educator, and Activist"
                          },
                          {
                            "name": "Rev. Dr. Kelle Brown",
                            "title": "Senior Pastor, Seattle Plymouth Church UCC"
                          },
                          {
                            "name": "The Rev. Cecilia Kingman",
                            "title": "Unitarian Universalist Parish Minister"
                          },
                          {
                            "name": "Tahmina Watson",
                            "title": "Immigration Lawyer"
                          },
                          {
                            "name": "Kamau Chege",
                            "title": "Washington Community Alliance "
                          },
                          {
                            "name": "KL Shannon",
                            "title": "Community Organizer"
                          },
                          {
                            "name": "Shomya Tripathy",
                            "title": "Director of Policy and Civic Engagement at Asian Counseling and Referal Services and Seattle South Asian for black lives"
                          },
                          {
                            "name": "Lalita Uppala",
                            "title": "Community Advocate"
                          },
                          {
                            "name": "Rabbi David Basior",
                            "title": "Kadima Reconstructionist Community (for identification purposes only)"
                          },
                          {
                            "name": "Alex Fayer",
                            "title": "Community Organizer"
                          },
                          {
                            "name": "Tyna Ek",
                            "title": "Seattle Attorney"
                          }
                        ]
        }
    },
    components:{
      GrayCard,
      SectionHeader
    }
}
</script>

<style lang='scss'>

</style>