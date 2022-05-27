<template>
    <v-container>
    <h1 class="mb-15">Daftar Icon dan Illustrasi</h1>
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
            { title: "Undraw", link: 'https://undraw.co'},
            { title: "Humaaans", link: 'https://www.humaaans.com/'},
            { title: "UI8", link: 'https://ui8.net/'},
            { title: "Icons8", link: 'https://icons8.com/illustrations'},
            { title: "Manypixels", link: 'https://www.manypixels.co/gallery'},
            { title: "DrawKit", link: 'https://drawkit.com/'},
            { title: "Opendoodles", link: 'https://www.opendoodles.com/'},
            { title: "Illlustrations", link: 'https://illlustrations.co/'},
            { title: "Isometric", link: 'https://isometric.online/'},
            { title: "Usesmash", link: 'https://usesmash.com/'},
            { title: "Woobro Design", link: 'https://woobro.design/'},
            { title: "Ira Design", link: 'https://iradesign.io/'},
            { title: "Absurd Design", link: 'https://absurd.design/'},
            { title: "Pixel True", link: 'https://www.pixeltrue.com/free-illustrations'},
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