<template>
    <router-view />
</template>

<script>

    export default {
        name: 'App',
    };
</script>

<style
    lang="sass"
>
    @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Lato:wght@300&display=swap')
    @import "variables"

    html, body
        margin: 0
        padding: 0
        min-height: 100vh
        width: 100vw
        background-color: $dark
        font-family: 'Lato', sans-serif
        overflow-x: hidden


    h1, h2, h3, h4, h5, .heading-font
        font-family: 'Caveat', cursive

    p, .content-font, ul, li
        font-family: 'Lato', sans-serif
        font-size: 1.2rem

    ul
        list-style-type: circle

        li
            text-align: left

    .card
        width: 80vw
        margin: 0 auto 2rem auto
        background-color: white
        border-radius: 10px
        display: flex
        padding: 1rem 2rem

        &.card-column
            flex-direction: column
            align-items: center

        &.card-row
            flex-direction: row
            justify-content: center


    .dark-text
        color: $dark

    .center-text
        text-align: center

</style>
