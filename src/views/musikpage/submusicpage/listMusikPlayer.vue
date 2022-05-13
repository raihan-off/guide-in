<template>
    <v-container>
    <h1 class="mb-15">Daftar Musik Player</h1>
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
            { title: "Soundcloud", link: 'soundcloud.com'},
            { title: "Amazon", link: 'music.amazon.com'},
            { title: "Jamendo", link: 'jamendo.com'},
            { title: "ReverbNation", link: 'reverbnation.com'},
            { title: "Last fm", link: 'last.fm'},
            { title: "Spotify", link: 'open.spotify.com'},
            { title: "Resso", link: 'resso.com'},
            { title: "Youtube Music", link: 'music.youtube.com'},
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