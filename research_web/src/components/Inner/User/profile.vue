<!--
<template>

<v-container>
<v-layout row mb-4>

<v-flex xs4 sm2 md1 >
<v-avatar color="teal" size="70px" >
     <span class="white--text headline">{{ letter }}</span>
</v-avatar>
</v-flex>
<v-flex xs4 sm4 md3 pt-4>
<strong  style="font-size:18px">{{profile.name}}</strong>
</v-flex>

</v-layout>

<v-layout row justify-center>
<v-flex xs12 sm12 md12>
<v-card  height="auto">
<v-toolbar dark color="teal " style="height:40px;">
    <v-toolbar-title style="margin-bottom:20px" >Profile Info</v-toolbar-title>
</v-toolbar>
    <v-list >
         <v-list-tile >
          <v-list-tile-avatar>
             <v-icon color="teal">email</v-icon>
           </v-list-tile-avatar>

           <v-list-tile-content>
             <v-list-tile-title> E-mail  &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp</v-list-tile-title>
           </v-list-tile-content>

            <v-list-tile-content>
               <v-list-tile-title>{{profile.email}}</v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>
       </v-list>
       <v-list >
            <v-list-tile >
             <v-list-tile-avatar>
                <v-icon color="teal">person</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Registration Id</v-list-tile-title>
              </v-list-tile-content>

               <v-list-tile-content>
                  <v-list-tile-title>{{profile.reg_no}}</v-list-tile-title>
               </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-list >
               <v-list-tile >
                <v-list-tile-avatar>
                   <v-icon color="teal">view_carousel</v-icon>
                 </v-list-tile-avatar>
                 <v-list-tile-content>
                   <v-list-tile-title>Department  </v-list-tile-title>
                 </v-list-tile-content>

                  <v-list-tile-content>
                     <v-list-tile-title>{{profile.department}}</v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
             </v-list>
             <v-list >
                  <v-list-tile >
                   <v-list-tile-avatar>
                      <v-icon color="teal">view_agenda</v-icon>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title>Degree </v-list-tile-title>
                    </v-list-tile-content>

                     <v-list-tile-content>
                        <v-list-tile-title>{{profile.degree}}</v-list-tile-title>
                     </v-list-tile-content>
                  </v-list-tile>
                </v-list>

</v-card>
</v-flex>
</v-layout>
<v-layout row justify-center>
<v-flex xs12 sm12 md12 >
<v-card  height="auto">
<v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in 1"
      :key="i"
    >
      <div slot="header">

             <v-list-tile >
              <v-list-tile-avatar >
                 <v-icon color="teal darken-3">insert_chart_outlined</v-icon>
               </v-list-tile-avatar>

               <v-list-tile-content>
                 <v-list-tile-title>Skills</v-list-tile-title>
               </v-list-tile-content>


             </v-list-tile>

           </div>
      <v-card>
      <v-list >
           <v-list-tile   v-for="profile in profile.skills" :key="profile" >
            <v-list-tile-avatar>
               <v-icon color="teal">graphic_eq</v-icon>
             </v-list-tile-avatar>

             <v-list-tile-content>
               <v-list-tile-title>{{ profile }} </v-list-tile-title>
             </v-list-tile-content>

           </v-list-tile>
         </v-list>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  <v-expansion-panel>
        <v-expansion-panel-content
          v-for="(item,i) in 1"
          :key="i"
        >
          <div slot="header">

                 <v-list-tile >
                  <v-list-tile-avatar >
                     <v-icon color="teal darken-3">local_activity</v-icon>
                   </v-list-tile-avatar>

                   <v-list-tile-content>
                     <v-list-tile-title>Interests</v-list-tile-title>
                   </v-list-tile-content>


                 </v-list-tile>

               </div>
          <v-card>
          <v-list >
               <v-list-tile  v-for="interest in profile.interests" :key="interest"  >
                <v-list-tile-avatar>
                   <v-icon color="teal">graphic_eq</v-icon>
                 </v-list-tile-avatar>

                 <v-list-tile-content>
                   <v-list-tile-title>{{interest}}</v-list-tile-title>
                 </v-list-tile-content>


               </v-list-tile>
             </v-list>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-card>
</v-flex>
</v-layout>
</v-container>
</template> -->



<template>
<v-container>
<v-layout row wrap class="{'ma-0': $vuetify.breakpoint.smAndDown, 'ma-5': $vuetify.breakpoint.mdAndUp}">
  <v-flex class="det-card">
    <v-card class="elevation-3" style="border:10px;border-radius:15px">




        <div class="top-cover">






          <div class="top-head text-lg-right" style="padding-top:5%;">
            <div class="mb-0 mr-4 topText" style="font-size: 20pt;"><b>{{ work_as }}</b></div>
            <div class="mb-0 mr-4 topText"><b>Department of Computer Science and Engineering</b></div>
            <div class="mb-0 mr-4 topText" v-if="work_as === 'Faculty'"><b>Faculty of Engineering and Technology</b></div>
            <div class="extraBottom"></div>
          </div>
        </div>
<v-divider></v-divider>



        <v-flex class="av">
          <v-avatar class="avatarPhoto" size="100px">
            <img
              :src="imageurl"
              alt="John"
            />
          </v-avatar>
        </v-flex>



      <div class="name text-md-left">{{ name }} ({{ regno }})</div>

      <v-layout row wrap>
      <v-flex class="deg-card2">


      <div class="qualification" ><B>QUALIFICATIONS</B></div>

      <div class="px-0 dc2">
       <div class="text-sm-left ml-4" v-for="degree in qualifications">{{ degree}}</div>

      </div>


      </v-flex>

     <v-flex sm3 xs6 class="mt-5 works-at-card">


      <div class="mb-0 ml-4 mr-4" style="font-size:13pt;"><b>WORKS AT</b></div>

      <div class="px-0">

       <div class="text-sm-left ml-4" v-for="work in worksat">{{ work }}</div>

      </div>

      </v-flex>

</v-layout>


<v-layout>
<v-flex xs12>

      <div class="mt-5 am"><b>ABOUT ME</b></div>
</v-flex>
</v-layout>
  <v-layout row wrap>
      <v-flex xs12 sm4 md4>

      <div class="icons" >

        <div class="contacts">
          <v-icon class="mpad">phone   :</v-icon>
          {{ contact }}
        </div>

        <div class="email">
          <v-icon class="mpad" >email   :</v-icon>
          {{ email }}
        </div>

        <div class="DOB">
          <v-icon class="mpad">cake    :</v-icon>
          {{ birthdate }}
        </div>

        <div class="location">
          <v-icon class="mpad">room    :</v-icon>
          {{ location }}
        </div>

      </div>

</v-flex>


<v-flex xs12 sm8 md8 >


<div class="about-text" >
{{ about }}
</div>


</v-flex>
  </v-layout>








    </v-card>
  </v-flex>
</v-layout>

<v-layout row wrap >
  <v-flex class="skill-card" md6 xs12 pr-1 >
    <v-card class="elevation-3" style="border:10px;border-radius:15px">
      <v-card-title primary-title>
        <div>
          <h3 class="headline text-md-center" style="padding-left:25%;">Skills</h3>
        </div>
      </v-card-title>
      <div class="text-xs" >
          <v-chip outline class="elevation-2"  v-for="skill in skills" color="green">{{ skill }}</v-chip>
        </div>
    </v-card>
  </v-flex>





  <v-flex xs12 md6 pl-1  class="skill-card">
    <v-card class="elevation-3" style="border:10px;border-radius:15px">
      <v-card-title primary-title>
        <div>
          <h3 class="headline text-xs-center mb-0" style="padding-left:25%;">Interests</h3>
        </div>
      </v-card-title>
      <div class="text-xs">
           <v-chip outline class="elevation-2" v-for="interest in   interests"  color="green">{{ interest }}</v-chip>
        </div>
    </v-card>
  </v-flex>
</v-layout>



<div class="tabs-bar">
  <v-toolbar class="elevation-3" style="border:10px;border-top-right-radius:15px;border-top-left-radius:15px"
    color="black"
    dark
    tabs
  >
    <v-tabs
      v-model="model"
      centered
      color="black"
      slider-color="white"
      grow
    >
      <v-tab>
        Projects
      </v-tab>
      <v-tab>
        Achievements
      </v-tab>
    </v-tabs>
  </v-toolbar>

  <v-tabs-items v-model="model" class="elevation-3" style="border:10px;border-bottom-left-radius:15px;border-bottom-right-radius:15px;">
    <v-tab-item>
      <v-card flat color="white">
        <v-card-text v-text="text"></v-card-text>
      </v-card>
    </v-tab-item>

    <v-tab-item>
      <v-card flat color="white">
        <v-card-text v-text="text2"></v-card-text>
      </v-card>
    </v-tab-item>

  </v-tabs-items>
</div>
<v-dialog v-model="dialog" persistent max-width="650px">
  <v-btn
      style="z-index:999"
      fixed
    slot="activator"
      dark
      fab
     bottom
      right
      color="black darken-3"
    >
      <v-icon>edit</v-icon>
    </v-btn>
<edit_Profile   @close= "dialog=false" @refresh="getuser" ></edit_Profile>
</v-dialog>

</v-container>
</template>

<script>
 import axios from 'axios'
export default {
  data () {
    return {
      dialog: false,
      work_as:'Student',
      name:'',
      regno:'',
      qualifications:['Directorate of Philosophy','Masters in Computers','Bachelors in Computers'],
      worksat:['WEBARCH','SRM'],
      about:'I am a science enthusiast looking for spellbinding opportunities.  I am very passionate about teamwork while working with project teams.I am good at leadership and I never take a step back from learning new technologies.I always balance looking fresh with being effective.',
      contact:'842289928',
      email:'',
      birthdate:'',
      location:'',
      skills:['vue','node','java','vue','node','java','vue','node'],
      interests:['blockchains','machine learning','blockchains','machine learning'],
      achievements:'',
      imageurl:'https://cdn.vuetifyjs.com/images/john.jpg',
      model: 'tab-2',
      text: 'projects',
      text2:'achievements',

    }
  },
  created() {
    this.getuser()
  },
  methods:   {

    async getuser () {
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


      // this.profile.name = this.profile.name.toUpperCase()
      // this.letter = this.profile.name[0].toUpperCase()
      // console.log(this.profile)
      } catch (e) {
        console.log(e)
      }

    }


  },
  computed: {
    uid () {
      return this.$store.getters.userId
    }
  }

}
</script>




<style scoped>



.top-cover{
padding-bottom: 5%;
color:white;
 background-image: url("cover.jpg");
 background-size: cover;
}
.mpad{padding-left:10%;padding-right:5%;}
.qualification{
font-size:13pt; padding-left:22px;
margin-top:10%;
margin-bottom: 0;
}
.name{
font-size: 15pt;
padding-top:2%;
padding-left: 160px;
}
.deg-card{
margin-right: 22rem;
margin-left:2rem;
}

.deg-card2{
margin-right: 22rem;
margin-left:2rem;
}

.av{
margin-left: 5%;
}

.avatarPhoto {
position:absolute; z-index:10; margin-top: -6%;
}
.icons{
/* display: none; */
padding-bottom:6%;

}

.achievements-card{
margin-left:15rem;
}

.contact{
margin-right:41px;
}

.vitals{
padding-left:50px;
margin-right:80px;
margin-bottom:20px;
}
.am{
font-size:13pt; padding-left:45%;
}
.works-at-card{
padding-left:-200px;
}
.about-text{
padding:5% 5% 5% 5%;;
text-align:justify;
}
.tabs-bar{
margin-top:25px;
}
.skill-card{
margin-top:20px;
padding: 0;
}
.top-head{
font-size: 15pt;
}

@media only screen and (max-width: 600px) {
.avatarPhoto {
  margin-top: -20%;
}
.mpad{padding-left:5%;padding-right:2%;}
.av{
margin-left: 35%;
}.topText{
text-align: center;
font-size: 10pt;
}.extraBottom {
padding: 25px;
}.name{
font-size: 12pt;
padding-top:12%;
padding-left: 0px;
text-align: center;
}.qualification{
padding-left:0px;
}.deg-card2{
margin:0;
text-align: center;
}.dc2{
margin-top: 5%;
text-align: left;
}.icons{
/* display: none; */
padding-top:6%;

}
.about-text{
  text-align:justify;
padding:10% 5% 10% 5%;
/* width: 50vh; */
}
.am{
padding-left:37%;
}
}
</style>







<!--<script>
//   import axios from 'axios'
// export default {
// data () {
// return {
// letter: '',
// profile: {}
// }
// },
// computed: {
//   uid () {
//     return this.$store.getters.userId
//   }
// },
// async created () {
//     try {
//       console.log(this.uid)
//     const response = await axios.post(`/user/read/${this.uid}`)
//     console.log(response.data)
//     this.profile = response.data.item


//     this.profile.name = this.profile.name.toUpperCase()
//     this.letter = this.profile.name[0].toUpperCase()
//     console.log(this.profile)
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }
// </script> -->
}
<!--
.top-head{
font-size: 15pt;
} -->

<!-- </style> -->







<!--<script>
//   import axios from 'axios'
// export default {
// data () {
// return {
// letter: '',
// profile: {}
// }
// },
// computed: {
//   uid () {
//     return this.$store.getters.userId
//   }
// },
// async created () {
//     try {
//       console.log(this.uid)
//     const response = await axios.post(`/user/read/${this.uid}`)
//     console.log(response.data)
//     this.profile = response.data.item


//     this.profile.name = this.profile.name.toUpperCase()
//     this.letter = this.profile.name[0].toUpperCase()
//     console.log(this.profile)
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }
// </script> -->
