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
                    Pemutar Music
                </p>
                <div class="text--primary">
                    Daftar music player
                </div>
                </v-card-text>
                <v-card-actions>
                    <router-link to="/ListMusikPlayer">Kunjungi</router-link>
                </v-card-actions>
            </v-card>
            <v-card
                class="mx-auto my-5"
                max-width="344"
                >
                <v-card-text>
                <div>list</div>
                <p class="text-h4 text--primary">
                    Lirik
                </p>
                <div class="text--primary">
                    Daftar lirik musik
                </div>
                </v-card-text>
                <v-card-actions>
                    <router-link to="/ListLirik">Kunjungi</router-link>
                </v-card-actions>
            </v-card>
            <v-card
                class="mx-auto my-5"
                max-width="344"
                >
                <v-card-text>
                <div>list</div>
                <p class="text-h4 text--primary">
                    Cord
                </p>
                <div class="text--primary">
                    Daftar cord music
                </div>
                </v-card-text>
                <v-card-actions>
                    <router-link to="/ListCord">Kunjungi</router-link>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>