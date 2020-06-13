<template>
  <v-container style="position: relative;top:10%">
    <v-layout row align-center justify-center>
      <v-flex xs12 sm10 md6>
        <v-card class="elevation-3" height="400px" style="border:10px;border-radius:15px">
          <v-layout align-center justify-center row v-if="error">
            <v-flex xs12>
              <app-alert :text="error" @dismissed="onClose"></app-alert>
            </v-flex>
          </v-layout>
          <v-card-title primary-title>
            <div>
              <b> <h2 class="headline mb-0">Login</h2><br></b>
              <!-- <div>Use your SRM ID</div> -->
            </div>
          </v-card-title>
          <v-card-text>
            <v-form ref="loginForm" lazy-validation>
              <v-text-field prepend-icon="email" label="E-mail" v-model="email" required></v-text-field>
              <v-text-field prepend-icon="lock" label="Password" :rules="passwordRules" v-model="password" type="password" required> </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :loading="loading" :disabled="loading" color="secondary" @click="login">Login</v-btn>
          </v-card-actions>
          <v-card-title primary-title>
            <div>Don't have an account? <a href="signup" style="text-decoration:none;">Sign Up</a></div>
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
        email: '',
        password: '',
        id: '',
        name: '',
        reg_no: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'password is required',
          v => v.length > 8 && v.length < 12 || 'password must be between  8-12'
        ]
      }
    },
    beforeCreate() {
      localStorage.clear()
    },
    computed: {
      userId() {
        return this.$store.getters.userId
      },
      error(){
        return this.$store.getters.error
      },
      loading() {
        return this.$store.getters.loading
      }
    },
    methods: {
      onClose() {
        this.$store.dispatch('clearError')
      },
      async login() {
        if (this.$refs.loginForm.validate()) {
        this.$store.dispatch('loading', true)
        try {
          const response = await axios.post('/authenticate', {
            "email": this.email,
            "password": this.password
          })
          this.$store.dispatch('loading', false)
          console.log(response.data)
          if  (response.data.success === false)
          {
            this.$store.dispatch("setError", "username or password is wrong.")
          }
          else
          {
            this.id = response.data.uid
            this.reg_no = response.data.reg_no
            this.name = response.data.name
            // this.id = "5b97ada2d9cc3a40f44a8a79"
            // this.reg_no = "RA160003030303"
            localStorage.id = this.id
            localStorage.reg_no = this.reg_no
            localStorage.name = this.name
            this.$store.dispatch('reg_no', this.reg_no)
            this.$store.dispatch('userId', this.id)
            this.$store.dispatch('name', this.name)
            this.$router.push(`/${this.reg_no}`)
          }
        } catch (e) {
          this.$store.dispatch('loading', false)
          console.log(e)
        }
      }
    }
    }
  }

</script>
