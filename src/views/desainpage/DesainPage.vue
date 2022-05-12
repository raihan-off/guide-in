<template>
    <v-container>
        <v-row>
            <v-card
                class="mx-auto my-5"
                max-width="344"
                >
                <v-card-text>
                <div>list</div>
                <p class="text-h4 text--primary">
                    Color
                </p>
                <div class="text--primary">
                    Daftar color picker
                </div>
                </v-card-text>
                <v-card-actions>
                    <router-link class="r-link" to="/ListColor">Kunjungi</router-link>
                </v-card-actions>
            </v-card>
            <v-card
                class="mx-auto my-5"
                max-width="344"
                >
                <v-card-text>
                <div>list</div>
                <p class="text-h4 text--primary">
                    Icon dan Ilustrasi
                </p>
                <div class="text--primary">
                    Daftar Icon dan Ilustrasi
                </div>
                </v-card-text>
                <v-card-actions>
                    <router-link class="r-link" to="/ListIconIllus">Kunjungi</router-link>
                </v-card-actions>
            </v-card>
            <v-card
                class="mx-auto my-5"
                max-width="344"
                >
                <v-card-text>
                <div>list</div>
                <p class="text-h4 text--primary">
                    Upload Desain
                </p>
                <div class="text--primary">
                    Daftar tempat upload Desain
                </div>
                </v-card-text>
                <v-card-actions>
                    <router-link class="r-link" to="/ListUploadDesain">Kunjungi</router-link>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>