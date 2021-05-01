<template>
    <div class="home">
        <div class="header-section">
            <h1>
                Andrew's Caamp Cookout
            </h1>
            <p class="header-item">
                Saturday, May 1st
            </p>
            <p class="header-item">
                Cookout: 7 p.m. - 8 p.m.
            </p>
            <p class="header-item">
                Caamp concert livestream: 8 p.m. - 9 p.m.
            </p>
        </div>
        <div class="card card-column dark-text">
            <h1 class="center-text no-bottom-margin">
                <font-awesome-icon
                    class="header-icon"
                    size="2x"
                    :icon="['fal', 'list-ul']"
                />
                What to bring
            </h1>

            <p>A lawn chair - An appetite - Drinks (if you're picky) </p>
        </div>
        <div
            id="directions"
            class="card card-column center-text"
        >
            <h1>
                <font-awesome-icon
                    class="header-icon"
                    size="2x"
                    :icon="['fal', 'map-marker-alt']"
                />
                Directions
            </h1>
            <p>
                Address: <a
                    href="https://maps.apple.com/?address=205%20NW%20Greenway%20Pl,%20Waukee,%20IA%20%2050263,%20United%20States&ll=41.617670,-93.875575"
                >
                    205 NW Greenway Place, Waukee, IA
                </a>
                <br>
                <br>
                There are parking spots directly opposite the house!
                <br>
                <br>
                Enter through the garage and come straight through to the back yard
            </p>
        </div>
        <div
            id="schedule"
            class="card card-column center-text"
        >
            <h1>
                <font-awesome-icon
                    class="header-icon"
                    size="2x"
                    :icon="['fal', 'calendar-alt']"
                />
                Schedule
            </h1>
            <p>7 p.m. - 8 p.m. Grilling out, yard games (show up whenever!)</p>
            |
            <p>8 p.m. - 9 p.m. Streaming Caamp concert</p>
            |
            <p>9 p.m. Campfire & Smores!</p>
        </div>
        <div
            id="menu"
            class="card card-column center-text"
        >
            <h1>
                <font-awesome-icon
                    class="header-icon"
                    size="2x"
                    :icon="['fal', 'cheeseburger']"
                />
                Menu
            </h1>
            <div class="flex-row">
                <div>
                    <h2>Burgers</h2>
                    <ul>
                        <li>Pineapple Brat burger</li>
                        <li>Pub burger</li>
                        <li>Bacon Cheddar burger</li>
                    </ul>
                </div>
                <div>
                    <h2>Brats & Dogs</h2>
                    <ul>
                        <li>Pineapple Brat</li>
                        <li>Beer Brat</li>
                        <li>Bacon Cheddar Brat</li>
                        <li>Plain hotdogs</li>
                    </ul>
                </div>
                <div>
                    <h2>Drinks</h2>
                    <ul>
                        <li>Vodka Lemonade</li>
                        <li>Moscow Mules</li>
                        <li>Angry Orchard</li>
                        <li>Ciderboys</li>
                        <li>Truly Lemonade</li>
                        <li>Bud Light</li>
                        <li>...Or BYOB!</li>
                    </ul>
                </div>
            </div>
        </div>
        <campfire />
    </div>
</template>

<script>
    import Campfire from "@/components/Campfire";

    export default {
        name: 'Home',
        components: {
            Campfire,
        }
    };
</script>

<style
    lang="sass"
>
    @import "../variables"

    .header-section
        display: flex
        align-items: center
        color: white
        flex-direction: column
        margin: 2rem 0 2rem 0

        h1
            margin: 0

    h1
        display: flex
        align-items: center


        .header-item
            margin: 0.5rem 0 0 0

    .campfire-bullet-icon
        margin: 1rem 1rem 0 0

    .nav-button
        width: 10rem
        height: 10rem
        border-radius: 25px
        background-color: $purple
        color: white
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        margin: 2rem 2rem 2rem 0

        .nav-button-text
            margin-top: 1rem

    .no-bottom-margin
        margin-bottom: 0

    .header-icon
        margin-right: 1rem

    .flex-row
        width: 100%
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: space-evenly

    .campfire
        transform: translateX(-75px) translatey(-75px)
        max-width: 100vw

</style>
