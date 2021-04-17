<template>
<ol class="home-policies-list auto mx-auto w-100 border-2 border-black-100">
    <li class="home-policies-list-item">Housing for All</li>



    <!-- <table class="auto mx-auto w-100 border-2 border-black-100">
        <tr>
            <th class="border-2 bg-black text-white border-black-100">1</th>
            <td>
            <nuxt-link to="/policies#housing" class="">
                Housing For All
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#housing">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
        <tr>
            <th class="border-2 bg-black text-white border-black-100">2</th>
            <td>
            <nuxt-link class="" to="/policies#divest">
                Divest from Policing to Invest in Community
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#divest">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
        <tr>
            <th class="border-2 bg-black text-white border-black-100">3</th>
            <td>
            <nuxt-link to="/policies#environment">
                Environmental Justice
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#environment">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
        <tr>
            <th class="border-2 bg-black text-white border-black-100">4</th>
            <td>
            <nuxt-link to="/policies#children">
                Children, Youth, and Families Deserve to Thrive
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#children">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
        <tr>
            <th class="border-2 bg-black text-white border-black-100">5</th>
            <td>
            <nuxt-link to="/policies#justice">
                Racial &amp; Economic Justice
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#justice">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
        <tr>
            <th class="border-2 bg-black text-white border-black-100">6</th>
            <td>
            <nuxt-link to="/policies#disaster-relief">
                Disaster Relief &amp; Preparing for Disasters
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#disaster-relief">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
        <tr>
            <th class="border-2 bg-black text-white border-black-100">7</th>
            <td>
            <nuxt-link to="/policies#arts">
                Thriving Sustained Local Arts and Culture Community
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#arts">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
        <tr>
            <th class="border-2 bg-black text-white border-black-100">8</th>
            <td>
            <nuxt-link to="/policies#healthcare">
                Universal Healthcare
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#healthcare">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
        <tr>
            <th class="border-2 bg-black text-white border-black-100">9</th>
            <td>
            <nuxt-link to="/policies#democracy">
                Democracy and Participation
            </nuxt-link>
            </td>
            <td>
            <nuxt-link to="/policies#democracy">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
            </td>
        </tr>
    </table> -->
</ol>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-policies-list {
  display:inline-flex;
  flex-direction:column;
  margin: 0;
  padding: 0;
  list-style-type: none;
  border-top:2px solid black;
  border-left:2px solid black;
  border-right:2px solid black;
  &-item{
        counter-increment: step-counter;
        display:flex;
        flex-direction:row;
        padding:2rem;
        border-bottom:2px solid black;
        border-bottom:2px solid black;
        &::before {
            content: counter(step-counter);
            display:block;
            color: #ffffff;
            font-weight: bold;
            padding: 3px 8px;
            border-right:2px solid black;
        }
  }
}
</style>

