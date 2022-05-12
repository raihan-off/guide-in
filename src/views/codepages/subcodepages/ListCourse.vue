<template>
    <v-container>
    <h1 class="mb-15">Daftar Pembelajaran Coding</h1>
        <div class="listCourse d-flex flex-wrap">
            <div class="data-list" 
                v-bind:href="a.href"
                v-for="a in list"
                :key="a.title">
                <a>{{ a.link }}</a>
            </div>
        </div>
        <!-- <ul>
            <li v-for="item in list" :key="item.title">{{ item.title }}</li>
            <li 
                v-bind:href="a.href"
                v-for="a in list"
                :key="a.title">
                <a 
                >{{ a.title }}</a>
            </li>
        </ul> -->
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
            { title: "Dev Saurus", link: 'devsaurus.com'},
            { title: "W3schools", link: 'w3schools.com'},
            { title: "Progate", link: 'progate.com'},
            { title: "Malas Ngoding", link: 'malasngoding.com'},
            { title: "Ilmu Koding", link: 'ilmukoding.com'},
        ]
    }
}
</script>

<style lang="scss" scoped>
.data-list{
    border-radius: 10px;
    background: linear-gradient(145deg, #f6f6f6, #cfcfcf);
    box-shadow:  10px 10px 20px #a1a1a1,
    -10px -10px 20px #ffffff;
    margin: 15px;
    width: 30%;
    height: 50px;
    text-align: center;
}
</style>