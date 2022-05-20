<template>
    <v-container>
    <h1 class="mb-15">Daftar Pembelajaran Coding</h1>
        <div class="listCourse d-flex flex-wrap">
            <a class="data-list black--text" 
                v-bind:href="a.link"
                v-for="a in list"
                target="_blank"
                :key="a.title">{{ a.title }}</a>
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
            { title: "Dicoding", link: 'https://www.dicoding.com'},
            { title: "BWA", link: 'https://buildwithangga.com'},
            { title: "Petani Kode", link: 'https://www.petanikode.com'},
            { title: "Dev Saurus", link: 'https://devsaurus.com'},
            { title: "W3schools", link: 'https://www.w3schools.com/'},
            { title: "Progate", link: 'https://progate.com/'},
            { title: "Malas Ngoding", link: 'https://www.malasngoding.com'},
            { title: "Ilmu Koding", link: 'https://ilmukoding.com/'},
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
    text-decoration: none;
}
</style>