<template>
    <v-container>
        <ul>
            <!-- <li v-for="item in list" :key="item.title">{{ item.title }}</li> -->
            <li 
                v-bind:href="a.href"
                v-for="a in list"
                :key="a.title">
                <a 
                >{{ a.title }}</a>
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
            { title: "Dicoding", link: 'www.dicoding.com', href: 'www.dicoding.com'},
            { title: "BWA", link: 'www.builtwithangga.com'},
            { title: "Petani Kode", link: 'www.petanikode.com'},
            { title: "Dev Saurus", link: 'www.devsaurus.com'},
            { title: "W3schools", link: 'www.w3schools.com'},
            { title: "Progate", link: 'www.progate.com'},
            { title: "Malas Ngoding", link: 'www.malasngoding.com'},
            { title: "Ilmu Koding", link: 'www.ilmukoding.com'},
        ]
    }
}
</script>

<style>

</style>