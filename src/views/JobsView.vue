<template>
  <v-container>
    <v-alert
      close-text="Close Alert"
      color="green accent-4"
      dark
      dense
      type="success"
      icon="mdi-check-decagram"
      dismissible
      v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <v-row no-gutters>
      <v-col
        class="pa-3"
        v-for="post in posts"
        :key="post._id">
        <v-card
          class="ma-auto"
          max-width="320"
          :to="{ name: 'post', params: { id: post._id } }">
          <v-img
            height="180"
            :src="`/${post.image}`"></v-img>

          <v-card-title class="text-h5 purpleTheme white-space">
            {{
              companyNameTitlelength >= 21
                ? post.companyNameTitle.substring(0, 21) + "..."
                : post.companyNameTitle
            }}</v-card-title
          >

          <v-card-text>
            <v-row
              align="center"
              class="mx-0">
              <div class="grey--text text-h6 white-space">
                {{
                  jobProfilelength >= 29
                    ? post.jobProfile.substring(0, 29) + "..."
                    : post.jobProfile
                }}
              </div>
            </v-row>
            <v-row
              align="center"
              class="mx-0">
              <div class="grey--text white-space">
                {{
                  jobDescriptionlength >= 43
                    ? post.jobDescription.substring(0, 43) + "..."
                    : post.jobDescription
                }}
              </div>
            </v-row>
          </v-card-text>
          <v-col class="grey--text mt-5 ml-1">
            <div>
              Location :
              {{
                locationlength >= 18
                  ? post.location.substring(0, 18) + "..."
                  : post.location
              }}
            </div>
            <div>
              Skills :
              {{
                skillslength >= 27
                  ? post.skills.substring(0, 27) + "..."
                  : post.skills
              }}
            </div>
            <div>
              Salary :
              {{
                salarylength >= 25
                  ? post.salary.substring(0, 25) + "..."
                  : post.salary
              }}
            </div>
          </v-col>
          <v-btn
            text
            color="deep-purple accent-4"
            :href="`${post.CompanyLink}`">
            More
          </v-btn>
          <v-divider></v-divider>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                :src="`/${post.image}`"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ post.companyNameTitle }}</v-list-item-title>
            </v-list-item-content>

            <v-row
              align="center"
              justify="end">
              <v-icon class="mr-1 v-chip--clickable"> mdi-heart </v-icon>
              <v-icon class="mr-1 v-chip--clickable"> mdi-bookmark </v-icon>
              <v-icon class="mr-1 v-chip--clickable">
                mdi-share-variant
              </v-icon>
            </v-row>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from "../api";
  export default {
    name: "JobsView",
    data() {
      return {
        posts: [],
      };
    },
    computed: {
      companyNameTitlelength() {
        if (!this.post) {
          return 0;
        }
        return this.post.companyNameTitle.length;
      },
      jobProfilelength() {
        if (!this.post) {
          return 0;
        }
        return this.post.jobProfile.length;
      },
      jobDescriptionlength() {
        if (!this.post) {
          return 0;
        }
        return this.post.jobDescription.length;
      },
      locationlength() {
        if (!this.post) {
          return 0;
        }
        return this.post.location.length;
      },
      skillslength() {
        if (!this.post) {
          return 0;
        }
        return this.post.skills.length;
      },
      salarylength() {
        if (!this.post) {
          return 0;
        }
        return this.post.salary.length;
      },
    },
    async created() {
      this.posts = await API.getAllPost();
    },
  };
</script>
