
<template>
  <v-container>
<v-layout row wrap>


    <v-flex xs12 md4 px-2 mb-4  v-for="(request,j) in request" :key="j">
            <v-card color="grey lighten-1" class="white--text">
              <v-layout row>
                <v-flex xs5>
                  <v-img
                  <img   src="@/components/Inner/phi 2.0.jpg"
                    height="100px" width="75%" style="border-radius:60%;margin-top:20px;margin-left:15px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{ request.requester_name }}</div>
                      <div>has requested to collaborate</div>
                      <div> {{ request.project_title }} </div>
                    </div>
                  </v-card-title>
                </v-flex>

              </v-layout>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="grey darken-1"  @click="declinerequest(request._id,request.requesterId)"><v-icon>close</v-icon></v-btn>
                <v-btn flat color="grey darken-1" @click="acceptrequest(request._id,request.requesterId,request.project_id,request.requester_name)"><v-icon>done</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>



  </v-layout>
</v-container>
</template>
 <script>

import axios from 'axios'
export default {
data () {
return {
request: [],
respons: []
}
},
computed: {
    uid () {
      return this.$store.getters.userId
  },
  reg_no () {
    return this.$store.getters.regNo
  }
 },


methods: {

  async requestsGet() {
     try {
      // console.log(this.uid)
      const response = await axios.post('/seerequests', {
        "_id": this.uid
      })
      //    console.log(response)
      this.request = response.data.data
      console.log(this.request)
    } catch (e) {
      console.log(e)
    }

  },
  async acceptrequest(requestid,requesterid,projectid,requestername){
    try {
      console.log(this.uid)
    const response = await axios.post(`/accept/${requesterid}/${requestid}`,{
      "p_id" : projectid,
      "_id": this.uid,
      "requester_name" : requestername
    })
    console.log(response.data.data)
    this.request = response.data.data
  } catch (e) {
      console.log(e)
    }
  },
  async declinerequest(requestid,requesterid){
    try {
      const response = await axios.post(`/reject/${requesterid}/${requestid}`, {
        _id: this.uid
    })
    this.request = response.data.data
    } catch (e) {
      console.log(e)
    }

  },

},
created () {
this.requestsGet()
}





}

</script>
