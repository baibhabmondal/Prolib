<template>
<v-container>
  <v-layout row wrap >
    <v-flex xs12 md6  px-2  v-for="(project, i) in projects" :key='i' mb-4>
      <v-card style="border-radius: 10px;">
        <v-card-title>
          <h3>{{ project.title }}</h3>
        </v-card-title>
        <v-card-text>
          <p>{{ project.abstract }} </p>
        </v-card-text>
        <v-expansion-panel focusable class="elevation-0">
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
            <v-btn round color="secondary" @click="viewProject(project.id)">
            View project</v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="project.owner_id !== uid" round>Request
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
          offset: 0,
          stop: false
        }
      },
      // beforeCreate () {

      // },
      created() {
        this.getProjects()
      },
      mounted () {
        this.handleScroll()
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
        handleScroll () {
            const that = this
            window.addEventListener("scroll", function(e){
              const scrollY = window.scrollY
              const visible = document.documentElement.clientHeight
              const pageHeight = document.documentElement.scrollHeight
              const bottomOfPage = visible + scrollY >= pageHeight
              if (bottomOfPage) {
                that.offset += that.limit
                that.getProjects()
              }
              })
        },
        viewProject(id) {
            this.$router.push(`/${this.reg_no}/read/${id}`)
          },
        async getProjects () {
          if(!this.stop) {
          try {
            const response = await axios.post('/popularProjects', {
              'offset': this.offset,
              'limit': this.limit
            })
            console.log(response.data)
            if (this.offset > response.data.item.total) {
              this.stop = true
            }
            this.projects.push(...response.data.item.docs)
          } catch (e) {
            console.log(e)
          }
        }
        }
      }
  }
</script>
