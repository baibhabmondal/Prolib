<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card style="border-radius: 10px;">
          <v-card-title>
            <h2>{{ project.title }}</h2>
            <v-spacer></v-spacer>
              <v-btn icon  v-if="project.owner_id === uid" @click="edit(project._id)">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn flat icon  v-if="project.owner_id !== uid"  @click="dobookmark">
                <v-icon>{{ (bookmark) ? 'bookmark' : 'bookmark_border' }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card-title>
          <v-card-text class="grey lighten-3">
            <h3>{{ project.abstract }} </h3>
          </v-card-text>
          <v-card-text class="grey lighten-3">
            <p>{{ project.description }} </p>
          </v-card-text>
          <v-card-text class="grey lighten-3">
            <h4>Stack: </h4>
            <ul>
              <li v-for="item in project.stack" :key="item">{{ item }}</li>
            </ul>
          </v-card-text>
          <v-card-actions v-if="uid !== project.owner_id">
            <v-spacer></v-spacer>
            <v-btn class="secondary" round @click="sendrequest(project._id)">Request
              <v-icon right small>send</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Individual_Project_Page',
    props: ['id'],

    data() {
      return {
        project: {},
        reg_no: '',
        bookmark: ''
      }
    },
    async created() {
      try {
        const response = await axios.post(`/project/read/${this.id}`)
        const res = await axios.post(`/user/read/${this.uid}`)
        console.log(response.data)
        this.project = response.data.item
        this.reg_no = res.data.item.reg_no
        for (var i = 0; i < res.data.item.bookmarks.length; i++) {
          if (res.data.item.bookmarks[i] == this.id)
            this.bookmark = true
        }
      } catch (e) {
        console.log(e)
      }
    },
    methods: {
      async  dobookmark() {
        if (!this.bookmark) {
          this.bookmark = true
          try {
            const re = await axios.post(`/upvote/${this.id}`, {
              reg_no: this.reg_no
            })
            this.bookmark = true
          } catch (e) {
            console.log(e)
          }
        }
        else {
          this.bookmark = false
          try {
            const re = await axios.post(`/downvote/${this.id}`, {
              reg_no: this.reg_no
            })
            this.bookmark = false
          } catch (e) {
            console.log(e)
          }
        }
      },
      async sendRequest(projectId) {
        this.$store.dispatch('loading', true)
        try {
          await axios.post(`/request/${projectId}`, {
            requester_id: this.uid,
            requester_name: this.name

          })
          this.$store.dispatch('loading', false)
          alert("request has been successfully sent")

        } catch (e) {
          this.$store.dispatch('loading', false)
        }
      }
    },
    computed: {
      uid() {
        return this.$store.getters.userId
      },
      name() {
        return this.$store.getters.name
      }
    }
  }

</script>
