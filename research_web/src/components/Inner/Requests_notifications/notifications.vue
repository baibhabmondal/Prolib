<template>
  <v-container>
    <v-layout row wrap v-for="notification in notification" :key="notification.date" justify-center>

      <v-flex xs12 md8 mb-4>
        <v-card height="100px" style="border-radius:10px">
          <v-card-title>
            <v-layout row wrap>
              <v-flex xs2 md2>
                <v-img <img src="@/components/Inner/phi 2.0.jpg" height="60px" width="60px" style="border-radius:100%;" contain></v-img>

              </v-flex>
              <v-flex xs9 md9>
                <!-- <h3>{{ notification.date }}</h3> -->
                <h3>{{notification.notification}}</h3>
                <p class="text-md-left">{{ notification.date }} </p>
              </v-flex>
              <v-flex xs1 md1 text-md-center>


                <v-icon right medium @click="declinenotification(notification._id)">close</v-icon>


              </v-flex>
            </v-layout>
          </v-card-title>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        notification: []

      }
    },
    computed: {
      uid() {
        return this.$store.getters.userId
      }
    },

    methods: {
      async callNotifications() {
        try {
          console.log(this.uid)
          const response = await axios.post('/seenotif', {
            "id": this.uid
          })
          console.log(response)
          this.notification = response.data.data

          // this.request.push(...response.data)

        } catch (e) {
          console.log(e)
        }
      },

      async declinenotification(id) {
        try {
          console.log(this.uid)
          const response = await axios.post(`/deletenotif/${id}`)
          this.$store.dispatch('setNotifCount')
          this.callNotifications()
          console.log(response.data)
        } catch (e) {
          console.log(e)
        }
      }
    },
    created() {
      this.callNotifications()

    },
  }

</script>