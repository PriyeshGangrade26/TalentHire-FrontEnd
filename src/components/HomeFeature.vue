<template>
  <div>
    <div class="MarginTop-80 Center">
      <v-row class="Center">
        <div class="MarginTop-80 MarginRight-60">
          <h1 class="FeatureText">Discover Jobs Across Popular Roles</h1>
          <h3 class="FeatureTextSmall grey--text text-h6">
            Quick and effective hiring experience
          </h3>
          <h3 class="FeatureTextSmall grey--text">
            More than 100K Recruiters trust
            <span class="purpleTheme">Talent Hire.</span>
          </h3>
        </div>
        <div>
          <img
            src="../assets/img/undraw_online_resume_re_ru7s.svg"
            class="FeatureImg" />
        </div>
      </v-row>
    </div>

    <div class="wrapper MarginTop-100">
      <h1 class="purpleTheme Center">Featured Companies Actively Hiring</h1>
      <div class="border"></div>

      <v-container class="MarginTop-60">
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
                  post.companyNameTitle.length >= 21
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
                      post.jobProfile.length >= 29
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
                      post.jobDescription.length >= 43
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
                    post.location.length >= 18
                      ? post.location.substring(0, 18) + "..."
                      : post.location
                  }}
                </div>
                <div>
                  Skills :
                  {{
                    post.skills.length >= 27
                      ? post.skills.substring(0, 27) + "..."
                      : post.skills
                  }}
                </div>
                <div>
                  Salary :
                  {{
                    post.salary.length >= 25
                      ? post.salary.substring(0, 25) + "..."
                      : post.salary
                  }}
                </div>
              </v-col>
              <v-btn
                text
                color="deep-purple accent-4">
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
                  <v-list-item-title>{{
                    post.companyNameTitle
                  }}</v-list-item-title>
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
    </div>
  </div>
</template>

<script scoped>
  import API from "../api";
  export default {
    name: "HomeFeature",
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      this.posts = await API.getAllPost();
      //  Show only 3 id data
      this.posts = this.posts.slice(0, 3);
    },
  };
</script>

<style scoped>
  .MarginRight-60 {
    margin-right: 60px;
  }
  .FeatureImg {
    width: 300px;
    height: 300px;
    -webkit-filter: drop-shadow(5px 5px 5px var(--color-purple));
    filter: drop-shadow(3px 3px 3px var(--color-purple));
  }
  .border {
    width: 620px;
    height: 5px;
    background: var(--color-gray);
    margin: 12px auto;
  }
  .FeatureText {
    font-size: 2.4rem;
    color: var(--color-white);
  }
  .FeatureTextSmall {
    font-size: 2rem;
  }
  @media (max-width: 1060px) {
    .FeatureImg {
      width: 250px;
      height: 250px;
    }
    .FeatureText {
      font-size: 2.1rem;
    }
    .FeatureTextSmall {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 915px) {
    .FeatureImg {
      width: 250px;
      height: 250px;
    }
    .FeatureText {
      font-size: 1.8rem;
    }
    .FeatureTextSmall {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 830px) {
    .FeatureText {
      font-size: 1.5rem;
    }
    .FeatureTextSmall {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 765px) {
    .FeatureText {
      font-size: 1.3rem;
    }
    .FeatureTextSmall {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 700px) {
    .FeatureText {
      font-size: 1.1rem;
    }
    .FeatureTextSmall {
      font-size: 1rem;
    }
    .MarginRight-60 {
      margin-right: 0px;
    }
  }
  @media (max-width: 597px) {
    .FeatureText {
      font-size: 1.5rem;
    }
    .FeatureTextSmall {
      font-size: 1.2rem;
    }
  }
</style>
