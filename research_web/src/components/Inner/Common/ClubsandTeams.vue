<template>
  <v-container>
    <v-layout row wrap >
      <v-flex xs12 md4  px-2 mb-4 v-for="i in 6" :key="i" >
        <v-card>
        <v-img
            <img src="@/components/Inner/phi 2.0.jpg" alt=""style="width:100%"
            aspect-ratio="5"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Team-1.618</h3>
              <div>official tech team of srm official tech team of srm official tech team of srm.</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn round color="primary">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>
