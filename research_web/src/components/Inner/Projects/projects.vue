<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6 px-2 mb-4 v-for="(project, i) in projects" :key='i'>
        <v-card style="border-radius: 10px;">
          <v-card-title>
            <h3>{{ project.title }}</h3>
            <v-spacer></v-spacer>
            <v-card-actions v-if="project.owner_id === uid">
              <v-btn icon @click="edit(project._id)">
                <v-icon>edit</v-icon>
              </v-btn>
          
            </v-card-actions>
          </v-card-title>
          <v-card-text>
            <p>{{ project.abstract }} </p>
          </v-card-text>
          <v-expansion-panel focusable class="elevation-0">
            <v-expansion-panel-content>
              <div slot="header">View More</div>
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
            <v-btn round color="secondary" @click="viewProject(project._id)">
              View project</v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="project.owner_id != uid" round @click="sendrequest(project._id)">Request
              <v-icon right small>send</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" persistent width="700" lazy>
      <newProject @change="getProjects" @close="dialog = false" task="edit" :project-id="project_id"></newProject>
    </v-dialog>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'popularProject',
    data() {
      return {
        dialog: false,
        projects: [],
        scrollPosition: 0,
        limit: 5,
        project_id: '',
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
      },
      reg_no() {
        return this.$store.getters.regNo
      },
      name() {
        return this.$store.getters.name
      }
    },
    watch: {
      project_id: (val) => {
        console.log("from watcher", val)

      }
    },
    methods: {

      edit(projectId) {
        this.project_id = projectId
        this.dialog = true
      },
      propId() {
        return this.project_id
      },
      viewProject(id) {
        this.$router.push(`/${this.reg_no}/read/${id}`)
      },
      async sendRequest(projectId) {
        this.$store.dispatch('loading', true)
        try {
          await axios.post(`/request/${projectId}`, {
            requester_id: this.uid,
              requester_name: this.name


          })
          this.$store.dispatch('loading', false)
          // alert("request has been successfully sent")

        } catch (e) {
          this.$store.dispatch('loading', false)
        }
      },
      async getProjects() {
        try {
          const response = await axios.post('/myprojects', {
            "_id": this.uid
          })
          this.projects = response.data.item
          console.log(this.projects.length)



        } catch (e) {
          console.log(e)
        }
      }
    }
  }

</script>
