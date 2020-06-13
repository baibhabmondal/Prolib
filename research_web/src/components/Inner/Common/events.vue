<template>
  <v-container>
<v-layout row wrap>


    <v-flex xs12 md4 px-2 mb-4 v-for="i in 6" :key="i">
            <v-card color="blue-grey lighten-2" class="white--text">
              <v-layout row>
                <v-flex xs4 md4>
                  <v-img
                  <img  src="@/components/Inner/phi 2.0.jpg"
                    height="60px" width="60%" style="border-radius:60%;margin-top:20px;margin-left:15px"
                    contain
                  ></v-img>

                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                         <div>There is a new event happening in campus</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-card-actions>
                   <div  ><h4>Event : Engine Workshop</h4></div>
                <v-spacer></v-spacer>
                <v-btn flat color="red">APPLY</v-btn>

              </v-card-actions>
              <v-expansion-panel focusable>
                <v-expansion-panel-content>
                  <div slot="header">KNOW MORE</div>
                  <v-card>
                    <v-card-text>
                      <h4>Team 1.618 is conducting a workshop on in and out of engines on 27th of this month.</h4>

                    </v-card-text>

                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-card>
    </v-flex>




                </v-layout>
                </v-container>
