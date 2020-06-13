<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm10 md7>
        <v-card class="elevation-12" height="auto">
          <v-toolbar dark color="cyan">
            <v-toolbar-title>SignUp </v-toolbar-title>
          </v-toolbar>
          <v-layout row align-center justify-center>
            <v-flex xs10 sm10 md10 style="margin-top:60px; margin-bottom:60px;">

              <v-stepper v-model="e1">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1">Basic</v-stepper-step>
                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2">personel</v-stepper-step>

                  <v-divider></v-divider>

            <v-stepper-step step="3">educational</v-stepper-step>
            </v-stepper-header>
             <v-stepper-items>
             <v-stepper-content step="1">
                       <v-card-text>
                         <v-form ref="form1" v-model="valid1" lazy-validation>
                           <v-text-field prepend-icon="person" v-model="name" :counter="20" label="Name"  :rules="nameRules" type="text"  required ></v-text-field>
                           <v-text-field  prepend-icon="email" label="E-mail"  v-model="email"   required ></v-text-field>
                           <v-text-field   prepend-icon="lock" label="Password" :counter="12" :rules="passwordRules" v-model="password" type="password"  required>  </v-text-field>
                           <v-text-field  prepend-icon="person" v-model="reg_number" :counter="15" label="Registration Number"  :rules="regRules" type="text"  required ></v-text-field>
                           <v-text-field prepend-icon="person" v-model="father_name" :counter="20" label="Father Name"  type="text" ></v-text-field>
                           </v-form>
                         </v-card-text>
                      <v-btn color="primary" :disabled="!valid1"  @click="continu">Continue</v-btn>
                  <v-btn flat   @click="reset1">RESET</v-btn>

                  </v-stepper-content>
                  <v-stepper-content step="2">
                    <v-card-text>
                      <v-form ref="form2" v-model="valid2" lazy-validation>
                        <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition"
                          offset-y full-width min-width="290px">
                          <v-text-field slot="activator" v-model="date" label="birthdate" prepend-icon="event" readonly></v-text-field>
                          <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                          </v-date-picker>
                        </v-menu>



                        <v-select prepend-icon="person" v-bind:items="gender1" v-model="gender" label="Gender"></v-select>
                        <v-textarea required :rules="addRules" auto-grow v-model="address" prepend-inner-icon="notes" label="Address"></v-textarea>
                        <v-text-field prepend-icon="person" v-model="city" :counter="20" label="city" :rules="cityRules" type="text" required></v-text-field>
                        <v-text-field prepend-icon="person" v-model="state" :counter="20" label="state" :rules="stateRules" type="text" required></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-btn color="primary" :disabled="!valid2" @click="continu1">Continue </v-btn>
                    <v-btn flat @click="reset2">RESET</v-btn>
                    <v-btn flat @click="e1 = 1">BACK</v-btn>
                  </v-stepper-content>
                  <v-stepper-content step="3">
                    <v-card-text>
                      <v-form ref="form3" v-model="valid3">
                        <v-text-field prepend-icon="person" v-model="country" :counter="20" label="Country" :rules="countryRules" type="text" required></v-text-field>
                        <v-text-field prepend-icon="person" v-model="pincode" :counter="10" label="Pincode" :rules="pinRules" type="number" required></v-text-field>
                        <v-combobox v-model="skills" :items="items" label="Skills" chips clearable prepend-inner-icon="dns" multiple required>
                          <template slot="selection" slot-scope="data">
                            <v-chip :selected="data.selected" close @input="remove(data.item)">
                              <strong>{{ data.item }}</strong>
                            </v-chip>
                          </template>
                        </v-combobox>
                        <v-select prepend-icon="person" v-bind:items="dept" v-model="department" label="Department"></v-select>
                        <v-select prepend-icon="person" v-bind:items="degree2" v-model="qualifications" label="Degree"></v-select>
                        <v-combobox v-model="interests" :items="items1" label="Interests" chips clearable prepend-inner-icon="dns" multiple required>
                          <template slot="selection" slot-scope="data">
                            <v-chip :selected="data.selected" close @input="remove1(data.item)">
                              <strong>{{ data.item }}</strong>
                            </v-chip>
                          </template>
                        </v-combobox>
                      </v-form>
                    </v-card-text>
                    <v-btn color="primary" :loading="loading" :disabled="!valid3 || loading" @click="submit">SUBMIT</v-btn>
                    <v-btn flat @click="reset3">RESET</v-btn>
                    <v-btn flat @click="e1 = 2">BACK</v-btn>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>

            </v-flex>
          </v-layout>
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
        menu: false,
        skills: [],
        interests: [],
        items: [
          'Vue',
          'Node',
          'React',
          'Angular',
          'frontend',
          'Backende',
        ],
        items1: [
          'Vue',
          'Node',
          'React',
          'Angular',
          'frontend',
          'Backende',
        ],
        date: null,
        name: '',
        email: '',
        password: '',
        reg_number: '',
        father_name: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        department: '',
        qualifications: '',
        valid1: true,
        valid2: true,
        valid3: true,



        e1: 0,
        valid: true,
        gender1: ['Male', 'Female'],
        dept: ['CSE', 'MECHANICAL', 'CIVIL', 'ECE'],
        degree2: ['BTECH', 'BCA', 'MCA', 'BBA', 'MBA'],
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 20 || 'Name must be less than 20 characters'
        ],

        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'password is required',
          v => v.length > 8 && v.length < 12 || 'password must be between  8-12'

        ],
        regRules: [
          v => !!v || 'Registration number is required',
          v => v.length <= 20 || 'Registration number must be less than 14 characters'
        ],
        addRules: [
          v => !!v || 'Address is required'
        ],
        cityRules: [
          v => !!v || 'City is required',
          v => v.length <= 20 || 'City must be less than 20 characters'
        ],
        stateRules: [
          v => !!v || 'State is required',
          v => v.length <= 20 || 'State must be less than 20 characters'
        ],
        countryRules: [
          v => !!v || 'Country is required',
          v => v.length <= 20 || 'Country must be less than 20 characters'
        ],
        pinRules: [
          v => !!v || 'Pincode is required',
          v => v.length <= 20 || 'Pincode must be less than 20 characters'
        ],
        skillRules: [
          v => !!v || 'Skills is required',

        ],


      }
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
      remove(item) {
        this.skills.splice(this.skills.indexOf(item), 1)
        this.skills = [...this.skills]
      },
      remove1(item) {
        this.interests.splice(this.interests.indexOf(item), 1)
        this.interests = [...this.interests]
      },

      continu() {

        if (this.$refs.form1.validate()) {
          this.e1 = 2
        }
      },
      continu1() {

        if (this.$refs.form2.validate()) {
          this.e1 = 3
        }
      },
      reset1() {
        this.$refs.form1.reset()
      },
      reset2() {
        this.$refs.form2.reset()
      },
      reset3() {
        this.$refs.form3.reset()
      },
      async submit() {
        this.$store.dispatch('loading', true)
        //  console.log(this.loading)
        try {
          if (this.$refs.form3.validate()) {

            const postData = {
              name: this.name,
              email: this.email,
              password: this.password,
              reg_no: this.reg_number,
              father_name: this.father_name,
              DOB: this.date,
              gender: this.gender,
              address: this.address,
              city: this.city,
              state: this.state,
              country: this.country,
              pincode: this.pincode,
              skills: this.skills,
              department: this.department,
              qualifications: this.qualifications,
              interests: this.interests
            }
            const response = await axios.post('/user/create', postData)
            this.$store.dispatch('loading', false)
            //  console.log(this.loading)
            //sconsole.log(response.data.uid)
            this.$store.dispatch('userId', response.data.uid)
            this.reset3()
            this.$router.push(`/login`)

          }
        } catch (e) {
          this.$store.dispatch('loading', false)
          console.log(this.loading)
          console.log(e)
        }



      },
    }
  }

</script>
