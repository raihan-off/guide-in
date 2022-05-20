<template>
    <v-container>
    <h1 class="mb-15">Daftar Game Code</h1>
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
            { title: "Codingame", link: 'https://www.codingame.com'},
            { title: "Code Monkey", link : 'https://www.codemonkey.com'},
            { title: "CSS Diner", link : 'https://flukeout.github.io'},
            { title: "Flex Box Froggy", link : 'https://flexboxfroggy.com'},
            { title: "Code Combat", link : 'https://codecombat.com'},
            { title: "Top Coder", link : 'https://www.topcoder.com'},
            { title: "Coderbyte", link : 'https://coderbyte.com'},
            { title: "Project Euler", link : 'https://projecteuler.net'},
            { title: "Hackerrank", link : 'https://www.hackerrank.com'},
            { title: "Codechef", link : 'https://www.codechef.com'},
            { title: "Exercism", link : 'https://exercism.org/'},
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