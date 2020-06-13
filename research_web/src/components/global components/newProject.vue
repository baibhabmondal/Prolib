<template>

        <v-card style="border-radius: 10px;">
          <v-card-title>
            <h2>
              <v-icon left pr-2>add_circle_outline</v-icon> {{ task === 'edit'? "Edit project" : "Add new Project"}}</h2>
          </v-card-title>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout row wrap>
              <v-text-field required :rules="titleRules" :counter="50" prepend-inner-icon="code" v-model="title" label="Project title"></v-text-field>
            </v-layout>
            <v-layout row wrap>
              <v-text-field required :rules="aboutRules" :counter="100" v-model="about" prepend-inner-icon="layers" label="About"></v-text-field>
            </v-layout>
            <v-layout row wrap>
              <v-textarea required :rules="desRules" auto-grow v-model="description" prepend-inner-icon="notes" label="Description"></v-textarea>
            </v-layout>
            <v-layout row wrap>
              <v-combobox v-model="chips" :items="items" label="Stack" chips clearable prepend-inner-icon="dns"
                multiple>
                <template slot="selection" slot-scope="data">
                  <v-chip :selected="data.selected" close @input="remove(data.item)">
                    <strong>{{ data.item }}</strong>
                  </v-chip>
                </template>
              </v-combobox>
            </v-layout>
            <v-layout row wrap justify-center>
              <input type="file" name="project" ref="upload" v-show="false">
              <v-btn class="primary--text" outline @click="uploadFile"><v-icon left>cloud_upload</v-icon>Upload Media</v-btn>
            </v-layout>
            <v-layout row wrap>
              <v-text-field :rules="linkRules" v-model="link" prepend-inner-icon="link" label="Project link"></v-text-field>
            </v-layout>
            <v-layout row wrap>
              <v-textarea auto-grow v-model="achievements" prepend-inner-icon=grade label="Achievements"></v-textarea>
            </v-layout>
            <v-layout row wrap>
              <v-flex text-xs-right>
                <v-btn color="red lighten-1" @click="cancel" outline>Cancel</v-btn>
              </v-flex>
              <v-flex text-xs-left>
                <v-btn :disabled="!valid" color="green lighten-1" @click="submit" outline>Save</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
          </v-container>
        </v-card>

</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      task: String,
      projectId: String
    },
    data () {
      return {
        chips:[],
        items: [
        'Vue',
        'Node',
        'React',
        'Angular',
        'frontend',
        'Backende',
        ],
        valid: true,
        title: '',
        about: '',
        achievements: '',
        description: '',
        collaborators:[],
        stack: '',
        link: '',
        titleRules: [
          v => !!v || 'Title is required',
          // v => v.length <= 50 || 'Title should be within 50 words',
        ],
        aboutRules: [
          v => !!v || 'About is required',
          // v => v.length <= 100 || 'About should be within 100 words',
        ],
        desRules: [
          v => !!v || 'Description is required'
        ],
        linkRules: [
          v => !!v || 'Project link is required'
        ],
      }
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
    created () {
      this.callProject()
    },
    methods: {
      async callProject () {
        if (this.task === 'edit') {
          try {
            const response = await axios.post(`/project/read/${this.projectId}`)
            this.title = response.data.item.title
            this.about = response.data.item.abstract
            this.description = response.data.item.description
            this.link = response.data.item.github_url
            response.data.item.achievements.forEach((item) => {
              this.achievements += item
              this.achievements +='\n'
            })
            this.chips = response.data.item.stack
          } catch (e) {
            console.log(e)
          }
        }
      },
      remove(item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
      uploadFile() {
        this.$refs.upload.click()
      },
      cancel () {
        this.clear()
        this.$emit('close')
      },
      async submit () {
        // this.$store.dispatch('loading', true)
        try {
          if (this.$refs.form.validate()){
            const postData  = {
            title: this.title,
            abstract: this.about,
            description: this.description,
            github_url: this.link,
            stack: this.chips,
            achievements: this.achievements,
            owner_id: this.uid,
            owner_name: this.name,
            collaborators: this.collaborators


            // members: [`${this.name}`],
        }
        if (this.task === 'edit') {
          await axios.post(`/project/update/${this.projectId}`, postData)
          this.$emit('change')

        } else {
          await axios.post('/project/create', postData)
        }
      //  this.$store.dispatch('loading', false)
        this.clear()
        this.$emit('close')
      }
      } catch (e) {
        console.log(e)
      }
      },
      clear () {
        this.$refs.form.reset()
        this.title = ''
        this.description = ''
        this.stack = []
        this.about = ''
        this.link = ''
      }
    }
  }
</script>
