<template>
    <v-container>
        <ul>
            <li v-for="item in list" :key="item.title">{{ item.title }}</li>
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
            { title: "Dicoding", link: 'dicoding.com'},
            { title: "BWA", link: 'builtwithangga.com'},
            { title: "Petani Kode", link: 'petanikode.com'},
        ]
    }
}
</script>

<style>

</style>