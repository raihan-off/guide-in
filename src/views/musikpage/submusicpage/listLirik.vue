<template>
    <v-container>
    <h1 class="mb-15">Daftar Website Lirik</h1>
        <div class="listCourse d-flex flex-wrap">
            <a class="data-list" 
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
            { title: "Genius", link: 'https://genius.com/'},
        { title: "LetSingIt", link: 'https://www.letssingit.com'},
        { title: "Lyric Freak", link: 'https://www.lyricsfreak.com'},
        { title: "Song Lyric", link: 'http://www.songlyrics.com'},
        { title: "Find Music By Lyrics", link: 'https://findmusicbylyrics.com'},
        { title: "AZLyrics", link: 'https://www.azlyrics.com'},
        { title: "Lyrics", link: 'https://www.lyrics.com'},
        { title: "Lyrics Mode", link: 'https://www.lyricsmode.com'},
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