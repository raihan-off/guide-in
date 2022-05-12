<template>
    <v-container>
        <ul>
            <!-- <li v-for="item in list" :key="item.title">{{ item.title }}</li> -->
            <li 
                v-bind:href="a.href"
                v-for="a in list"
                :key="a.title">
                <a 
                >{{ a.link }}</a>
            </li>
        </ul>
    </v-container>
</template>

<script>
export default {
    name: 'ListDoc',
    data: () => ({
        list: [],
    }),
    created(){
        this.list = [
            { title: "Behance", link: 'behance.net'},
            { title: "Dribbble", link: 'dribbble.com'},
        ]
    }
}
</script>

<style>

</style>