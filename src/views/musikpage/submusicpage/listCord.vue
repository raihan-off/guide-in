<template>
    <v-container>
    <h1 class="mb-15">Daftar Cord Musik</h1>
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
                >{{ a.link }}</a>
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
        { title: "Chordtela", link: 'Chordtela.com'},
        { title: "Chordlagu", link: 'Chordlagu.id'},
        { title: "Chordfrenzy", link: 'Chordfrenzy.com'},
        { title: "Musikord", link: 'Musikord.com'},
        { title: "Chordqu", link: 'Chordqu.com'},
        { title: "Guitar Master Class", link: 'guitarmasterclass.net'},
        { title: "Spytunes", link: 'spytunes.com'},
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