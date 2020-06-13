<template>
  <v-app id="inspire">

    <v-navigation-drawer class="grey lighten-2" width="220" :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>

      <v-list dense>
        <v-list-tile @click="student" avatar>
          <v-list-tile-avatar>
            <v-icon>
              find_in_page
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Feed
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click="viewProfile" avatar>
          <v-list-tile-avatar>
            <v-icon>
              person
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Profile
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile avatar @click="viewProjects">
          <v-list-tile-avatar>
            <v-icon>
              build
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Projects
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile avatar @click="viewEvent">
          <v-list-tile-avatar>
            <v-icon>
              event_note

            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Events
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click="viewPopularProjects" avatar>
          <v-list-tile-avatar>
            <v-icon>
              stars
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Popular projects
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click="viewBookmarks" avatar>
          <v-list-tile-avatar>
            <v-icon>
              bookmarks
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Bookmarked Projects
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click="viewClubsandTeam" avatar>
          <v-list-tile-avatar>
            <v-icon>
              people
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            Clubs and Teams
          </v-list-tile-content>
        </v-list-tile>
      </v-list>


    </v-navigation-drawer>
    <v-dialog v-model="dialog" persistent width="700">
      <newProject @close="dialog = false" :name="name"></newProject>
    </v-dialog>

    <v-toolbar style="z-index:99" :clipped-left="$vuetify.breakpoint.lgAndUp" color="" dark app fixed>

      <v-toolbar-title style="width: 300px;" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">SRM Project Portal</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field flat solo-inverted hide-details prepend-inner-icon="search" append-icon="filter_list" label="Search" class="pill hidden-sm-and-down"></v-text-field>
      <!-- <v-btn icon @click.stop="dialog = true">
        <v-icon>add_circle</v-icon>
      </v-btn> -->
      <v-btn icon @click="requests">
        <v-icon>announcement</v-icon>
      </v-btn>

      <v-badge overlap small>
        <span slot="badge">{{ notifCount }}</span>

        <v-avatar color="grey darken-3 red--after">
          <v-icon dark @click="notifications">notifications</v-icon>
        </v-avatar>
      </v-badge>

      <!-- <v-btn icon @click="notifications">
        <v-icon>notifications</v-icon>
      </v-btn> -->
      <v-btn icon @click="logout">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-2">
        <v-layout>
          <router-view/>
          <v-btn @click.stop="dialog = true" fixed dark fab bottom right color="black lighten-1">
            <v-icon>add</v-icon>
          </v-btn>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      attachblue: false,
      bluecolor: 'blue',
      dialog: false,
      drawer: null,
      name: 'Gilfoyle'

    }),
    beforeCreate() {
      this.$store.dispatch('personalProjects')
      this.$store.dispatch('setNotifCount')
    },
    computed: {
      notifCount ()
      {
        return this.$store.getters.notifCount
      },
      projects() {
        let title = []
        let counter = 0
        let projects = this.$store.getters.getPersonalProjects
        projects.forEach(project => {
          if (counter > 2)
            return
          title.push(project)
          counter += 1
        })
        return title
      },
      uid() {
        return this.$store.getters.userId
      },
      reg_no() {
        return this.$store.getters.regNo
      }
    },
    methods: {
      Project(id) {
        this.$router.push(`/${this.reg_no}/read/${id}`)
        location.reload()
      },
      logout() {
        localStorage.clear()
        this.$store.dispatch('userId', null)
        // this.$store.dispatch('reg_no', '/')
        this.$router.push('/')
        // location.reload()
      },
      requests() {
        this.$router.push(`/${this.reg_no}/requests`)
      },
      notifications() {
        this.$router.push(`/${this.reg_no}/notifications`)
      },
      viewBookmarks() {
        this.$router.push(`/${this.reg_no}/bookmarks`)
      },
      viewPopularProjects() {
        this.$router.push(`/${this.reg_no}/popularProjects`)
      },
      viewProjects() {
        this.$router.push(`/${this.reg_no}/projects`)
      },
      student() {
        this.$router.push(`/${this.reg_no}/`)
      },
      viewProfile() {
        this.$router.push(`/${this.reg_no}/profile`)
      },
      viewEvent() {
        this.$router.push(`/${this.reg_no}/events`)
      },
      viewClubsandTeam() {
        this.$router.push(`/${this.reg_no}/ClubsandTeams`)
      },
      uploadFile() {
        this.$refs.upload.click()
      }
    },
    props: {
      source: String
    }
  }

</script>

<style scoped>
  .v-text-field--solo .v-input__slott {
    border-radius: 50px!important;
  }
</style>