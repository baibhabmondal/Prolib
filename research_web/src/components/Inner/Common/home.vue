<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6  px-2 mb-4 v-for="(project, i) in projects" :key='i'>
        <v-card style="border-radius: 10px;">
          <v-card-title>
            <h3>{{ project.title }}</h3>
            <v-spacer></v-spacer>
            <v-card-actions >
              <v-btn flat icon @click="dobookmark(project.id,project.__v,project.owner_id)">
                <v-icon>{{ (bookmark[project.__v]) ? 'bookmark' : 'bookmark_border' }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card-title>
          <v-card-text>
            <p>{{ project.abstract }} </p>
          </v-card-text>
          <v-expansion-panel focusable class="elevation-0" focusable>
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
              VIEW PROJECT</v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="project.owner_id != uid" @click='sendRequest(project.id)' round>Request
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
        bookmark:[],
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
    mounted() {
      this.handleScroll()
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      uid () {
        return this.$store.getters.userId
      },
      reg_no () {
        return this.$store.getters.regNo
      },
      name () {
        return this.$store.getters.name
      }
    },
    methods: {
      async  dobookmark(id,v,ownerid) {
        if (!this.bookmark[v] && this.uid !== ownerid) {
          this.bookmark[v] = true
          this.$forceUpdate()

          try {
            const re = await axios.post(`/upvote/${id}`, {
              reg_no: this.reg_no
            })
          this.bookmark[v] = true
          } catch (e) {
            console.log(e)
          }
        }
        else if(this.bookmark[v] && this.uid !== ownerid) {
          this.bookmark[v] = false
            this.$forceUpdate()
          try {
            const re = await axios.post(`/downvote/${id}`, {
              reg_no: this.reg_no
            })
          this.bookmark[v] = false
          } catch (e) {
            console.log(e)
          }
        }
      },
      handleScroll() {
        const that = this
        window.addEventListener("scroll", function (e) {
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
      async sendRequest (projectId) {
        this.$store.dispatch('loading', true)
        try {
          await axios.post(`/request/${projectId}`, {
            'requester_id': this.uid,
            'requester_name': this.name

          })
          this.$store.dispatch('loading', false)
             // alert("request has been successfully sent")

        } catch (e) {
          this.$store.dispatch('loading', false)
        }
      },
      viewProject(id) {
        this.$router.push(`/${this.reg_no}/read/${id}`)
      },
      async getProjects() {

        try {
          if (!this.stop) {
          const response = await axios.post('/feed', {
            'offset': this.offset,
            'limit': this.limit,
            'uid': this.uid
          })
          if(response.data.item.total < this.offset) {
            this.stop = true
            // console.log(this.stop)
          }
          this.projects.push(...response.data.item.docs)
            const res = await axios.post(`/user/read/${this.uid}`)
          for(var j=this.offset;j<(this.offset+this.limit);j++)
          {
            this.projects[j].__v = j




            for (var i = 0; i < res.data.item.bookmarks.length; i++) {
              if (res.data.item.bookmarks[i] === this.projects[j]._id)
              {    console.log(true)
                  this.bookmark[j] = true
                }


          }
          if(this.bookmark[j]!== true)
           this.bookmark[j] = false
             console.log(this.projects[j])

        }

            console.log(this.bookmark)

          }
        } catch (e) {
          console.log(e)
        }
      }
      }
    }

</script>
