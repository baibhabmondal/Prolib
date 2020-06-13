
<template>
  <!-- <v-layout row justify-center> -->

      <v-card>
        <v-card-title>
          <h2><v-icon left pr-2>edit</v-icon> Edit Profile</h2>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>

              <v-flex xs12 sm6 md6 >
                <v-text-field  prepend-inner-icon="person" v-model="name" label="Name"></v-text-field>
                  <v-text-field prepend-inner-icon="code" v-model="regno" label="Registration Number"></v-text-field>
                    <v-text-field prepend-inner-icon="email" v-model="email" label="Email"></v-text-field>

              </v-flex>

              <v-flex xs12 sm6 md6>
                <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="birthdate" lazy transition="scale-transition"
                  offset-y full-width min-width="290px">
                  <v-text-field slot="activator" v-model="birthdate" label="birthdate" prepend-icon="event" readonly></v-text-field>
                  <v-date-picker v-model="birthdate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(birthdate)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
                <v-text-field  prepend-inner-icon="phone" v-model="contact" label="Contact Number"></v-text-field>
                  <v-select prepend-icon="person" v-bind:items="designation" v-model="work_as" label="Work As"></v-select>
              </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <input type="file" name="project" ref="upload" v-show="false">
                <v-btn class="primary--text" outline @click="uploadFile"><v-icon left>cloud_upload</v-icon>Upload Image</v-btn>
              </v-layout>
              <v-layout>
              <v-flex xs12 sm6 md6>
                <v-combobox v-model="interests" :items="items" label="Interests" chips clearable prepend-inner-icon="dns" multiple required>
                  <template slot="selection" slot-scope="data">
                    <v-chip :selected="data.selected" close @input="remove1(data.item)">
                      <strong>{{ data.item }}</strong>
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-combobox v-model="skills" :items="items" label="Skills" chips clearable prepend-inner-icon="dns" multiple required>
                  <template slot="selection" slot-scope="data">
                    <v-chip :selected="data.selected" close @input="remove(data.item)">
                      <strong>{{ data.item }}</strong>
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs12 sm6 md6>
                    <v-combobox v-model="qualifications" :items="qualification" label="Qualifications" chips clearable prepend-inner-icon="layers" multiple required>
                      <template slot="selection" slot-scope="data">
                        <v-chip :selected="data.selected" close @input="remove2(data.item)">
                          <strong>{{ data.item }}</strong>
                        </v-chip>
                      </template>
                    </v-combobox>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-combobox v-model="worksat" label="Works At" chips clearable prepend-inner-icon="work" multiple required>
                      <template slot="selection" slot-scope="data">
                        <v-chip :selected="data.selected" close @input="remove3(data.item)">
                          <strong>{{ data.item }}</strong>
                        </v-chip>
                      </template>
                    </v-combobox>
                  </v-flex>

                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md12 >
                        <v-text-field  prepend-inner-icon="room" v-model="location" label="Location"></v-text-field>
                        <v-textarea auto-grow v-model="about" prepend-inner-icon="notes" label="About Me"></v-textarea>
                        <v-textarea auto-grow v-model="achievements" prepend-inner-icon="notes" label="Achievements"></v-textarea>
                    </v-flex>
                  </v-layout>


          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" outline @click="cancel">Cancel</v-btn>
          <v-btn color="green darken-1" outline @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>

  <!-- </v-layout> -->
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
          menu: false,
      dialog:false,
      birthdate:null,
      work_as:'',
      designation:['Student','Faculty'],
      items: [
        'Vue',
        'Node',
        'React',
        'Angular',
        'frontend',
        'Backende',
      ],
      qualification:[],
      work_as:'',
      name:'',
      regno:'',
      qualifications:[],
      worksat:[],
      about:'',
      contact:'',
      email:'',
      birthdate:'',
      location:'',
      skills:[],
      interests:[],
      achievements:''
    }
    },
    computed: {
      uid () {
        return this.$store.getters.userId
      },
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
      cancel () {

        this.$emit('close')
      },
      uploadFile() {
        this.$refs.upload.click()
      },

      remove(item) {
        this.skills.splice(this.skills.indexOf(item), 1)
        this.skills = [...this.skills]
      },
      remove1(item) {
        this.interests.splice(this.interests.indexOf(item), 1)
        this.interests = [...this.interests]
      },
      remove2(item) {
        this.qualifications.splice(this.interests.indexOf(item), 1)
        this.interests = [...this.interests]
      },
      remove3(item) {
        this.worksat.splice(this.interests.indexOf(item), 1)
        this.interests = [...this.interests]
      },
      async save () {
        // this.$store.dispatch('loading', true)
        try {
          this.$store.dispatch('loading', true)
            const postData  = {
              name    : this.name ,
              reg_no  : this.regno ,
              DOB     : this.birthdate,
              email   : this.email,
              address : this.location,
              contact : this.contact,
              about   : this.about,
              work_as : this.work_as,
              skills  : this.skills ,
              interests: this.interests,
              works_at : this.worksat ,
         qualifications:this.qualifications ,
          achievements : this.achievements,

        }

          await axios.post(`/user/update/${this.uid}`, postData)
          
            // this.$router.push(`/${this.regno}/profile`)

        // this.clear()
        this.$emit('refresh')
        this.$emit('close')

      } catch (e) {
        this.$store.dispatch('loading', false)
        console.log(e)
      }
      },


    },

    async created () {
        try {
          console.log(this.uid)
        const response = await axios.post(`/user/read/${this.uid}`)
        console.log(response.data)
        // this.profile = response.data.item
            this.name =    response.data.item.name
            this.regno =    response.data.item.reg_no
            this.birthdate =  response.data.item.DOB
            this.email =  response.data.item.email
            this.location = response.data.item.address
            this.contact =  response.data.item.contact
            this.about =  response.data.item.about
            this.work_as =  response.data.item.work_as
            this.skills =  response.data.item.skills
            this.interests =  response.data.item.interests
            this.worksat =  response.data.item.works_at
            this.qualifications =  response.data.item.qualifications
            this.achievements =  response.data.item.achievements
        } catch (e) {
          console.log(e)
        }
      }

  }
</script>
