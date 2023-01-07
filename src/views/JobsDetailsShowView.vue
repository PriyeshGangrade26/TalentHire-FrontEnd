<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        sm="10"
        class="pa-4 mx-auto">
        <template>
          <v-card
            class="mx-auto"
            max-width="800"
            outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-h4 purpleTheme">
                  {{ post.companyNameTitle }}
                </div>
                <v-list-item-title class="text-h5">
                  {{ post.jobProfile }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ post.location }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar
                tile
                size="130"
                color="white"
                ><v-img :src="`/${post.image}`"> </v-img
              ></v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-list-item-subtitle class="ml-2 grey--text">
                Skills : {{ post.skills }}</v-list-item-subtitle
              >
            </v-card-actions>
            <v-card-actions>
              <v-list-item-subtitle class="ml-2 grey--text">
                Salary : {{ post.salary }}</v-list-item-subtitle
              >
            </v-card-actions>
            <v-card-actions>
              <v-list-item-subtitle class="ml-2 grey--text">
                Email : {{ post.CompanyEmail }}
              </v-list-item-subtitle>
            </v-card-actions>
            <v-card-actions>
              <v-row class="d-flex justify-space-between mt-4 mb-2">
                <v-btn
                  text
                  color="deep-purple accent-4"
                  :href="`${post.CompanyLink}`">
                  Apply
                </v-btn>
                <v-btn
                  color="success"
                  text
                  :to="{ name: 'edit-post', params: { id: post._id } }"
                  >Edit</v-btn
                >
                <v-btn
                  color="red"
                  text
                  @click="removePost(post._id)"
                  >Delete</v-btn
                >
                <div>
                  <v-btn
                    color="orange"
                    text
                    @click="show = !show">
                    Job Description
                  </v-btn>
                  <v-btn
                    icon
                    @click="show = !show">
                    <v-icon>{{
                      show ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </div>
              </v-row>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  {{ post.jobDescription }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from "../api";
  export default {
    data() {
      return {
        post: {},
        show: false,
      };
    },
    async created() {
      const response = await API.getPostByID(this.$route.params.id);
      this.post = response;
    },
    methods: {
      async removePost(id) {
        const response = await API.deletePost(id);
        this.$router.push({
          name: "JobsView",
          params: { message: response.message },
        });
      },
    },
  };
</script>
