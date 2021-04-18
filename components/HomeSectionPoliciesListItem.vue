<template>
    <li v-editable="blok" class="home-policies-list-item">
        <span class="home-policies-list-item-text">
            <nuxt-link :to="'/'+blok.path">
            {{blok.text}}
            </nuxt-link>
        </span>
        <span class="home-policies-list-item-arrow">
            <nuxt-link :to="'/'+blok.path">
                <span class="material-icons mt-2 text-3xl">
                arrow_right_alt
                </span>
            </nuxt-link>
        </span>
    </li>
</template>

<script>
export default {
    props:{
        blok: {
          type: Object,
          required: true
        }
    }
}
</script>



