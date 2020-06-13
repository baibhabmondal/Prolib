<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6 px-2 mb-4 v-for="(project, i) in projects" :key='i'>
        <v-card style="border-radius: 10px;">
          <v-card-title>
            <h3>{{ project.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ project.abstract }} </p>
          </v-card-text>
          <v-expansion-panel class="elevation-0" focusable>
            <v-expansion-panel-content>
              <div slot="header">Show More</div>
              <v-card class="grey lighten-3">
                <v-card-text>
                  <h4>Stack: </h4>
                  <ul>
                    <li v-for="stack,i in project.stack" :key="i">{{ stack }}</li>
                  </ul>
                </v-card-text>
                <v-card-text>
                  <h4>Collaborators: </h4>
                  <p>
                    <ul>
                      <li v-for="member,i in project.collaborators" :key="i">{{ member }}</li>
                    </ul>
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-card-actions>
            <v-btn round color="primary" @click="viewProject(project._id)">
              View project</v-btn>
            <v-spacer></v-spacer>
            <v-btn round @click="sendrequest(project._id)">Request
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
    name: 'popularProject',
    data() {
      return {
        projects: [],
        scrollPosition: 0,
        limit: 5,
        offset: 0
      }
    },

    created() {
      this.getProjects()
    },

    computed: {
      loading() {
        return this.$store.getters.loading
      },
      uid() {
        return this.$store.getters.userId
      }
    },
    methods: {

      viewProject(id) {
        this.$router.push(`/${this.uid}/read/${id}`)
      },
      async sendRequest(projectId) {
        this.$store.dispatch('loading', true)
        try {
          await axios.post(`/request/${projectId}`, {
            request_id: this.uid

          })
          this.$store.dispatch('loading', false)
          alert("request has been successfully sent")

        } catch (e) {
          this.$store.dispatch('loading', false)
        }
      },
      async getProjects() {
        try {
          const response = await axios.post('/bookmarkedprojects', {
            "_id": this.uid
          })

          this.projects.push(...response.data.item)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }

</script>