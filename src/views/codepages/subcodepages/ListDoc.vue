<template>
    <v-container>
    <h1 class="mb-15">Daftar Dokumentasi Coding</h1>
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
            { title: "Javascript info", link: 'https://javascript.info'},
            { title: "Java Doc", link: 'https://docs.oracle.com/en/java'},
            { title: "PHP Doc", link: 'https://www.php.net/docs.php'},
            { title: "JavaScript Doc", link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
            { title: "Go Doc", link: 'https://go.dev/doc/'},
            { title: "TypeScript", link: 'https://www.typescriptlang.org/docs/'},
            { title: "React", link: 'https://reactjs.org/docs/getting-started.html'},
            { title: "Vue", link: 'https://vuejs.org/guide/introduction.html'},
            { title: "Laravel", link: 'https://laravel.com/docs/9.x/installation'},
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