<template>
  <div v-editable="blok" class="img-bg img-bg-policies-paper p-12 grid grid-cols-1">
    <ol class="home-policies-list auto mx-auto w-100 border-2 border-black-100">
      <li v-for="li in blok.listItems" :key="li._uid" class="home-policies-list-item">
            <span class="home-policies-list-item-text">
                <nuxt-link :to="'/policies#'+li.path">
                {{li.text}}
                </nuxt-link>
            </span>
            <span class="hidden md:flex home-policies-list-item-arrow">
                <nuxt-link :to="'/policies#'+li.path">
                    <span class="material-icons mt-2 text-3xl">
                    arrow_right_alt
                    </span>
                </nuxt-link>
            </span>
        </li>
    </ol>
  </div>
  <!--/img-bg-->

</template>

<script>
  import HomeSectionPoliciesListItem from '@/components/HomeSectionPoliciesListItem.vue';
  export default {
    data() {
      return {
        story: {
          content: {}
        }
      }
    },
    props: {
      blok: {
        type: Object,
        required: true
      }
    },
    components: {
      HomeSectionPoliciesListItem
    }
  }
</script>

<style lang="scss">
  .home-policies-list {
    margin: 0 auto;
    padding: 0;
    max-width: 720px;
    border-left: 2px solid black;
    border-right: 2px solid black;

    &-item {
      counter-increment: step-counter;
      display: flex;
      flex-direction: row;
      flex-grow: 1 2;
      justify-content: flex-start;
      border-bottom: 2px solid black;
      overflow: hidden;
      background-color: #ffffff;
      margin-bottom: 0;

      &:last-of-type {
        border-bottom: none;
      }

      &::before {
        content: counter(step-counter);
        font-family: $serif;
        top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 2rem;
        color: #ffffff;
        background-color: black;
        font-weight: bold;
        text-align: center;
        padding: 1rem;
        border-right: 2px solid black;
          @media (min-width: $md) {
              padding:1.5rem;
          }
      }

      &-text {
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-style: italic;
        flex-basis: 0;
        flex-grow: 1;
        // justify-self:start;
      }

      &-arrow {
        padding: 0 1rem 0 0;
        // display: flex;
        flex-direction: column;
        justify-content: center;
        // justify-self: end;
      }
    }
  }
</style>