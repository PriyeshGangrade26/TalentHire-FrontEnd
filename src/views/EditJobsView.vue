<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        sm="10"
        class="mx-auto">
        <v-card class="black--text mx-auto pr-5 rounded-lg">
          <v-card-title class="font-size-edit-page">
            Edit Company Details
          </v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="updateForm"
            class="pa-5"
            enctype="multipart/form-data">
            <v-text-field
              label="Company Name"
              placeholder="Name"
              color="deep-purple accent-4"
              v-model="post.companyNameTitle"
              prepend-icon="mdi-domain"
              outlined
              :rules="rules"></v-text-field>
            <v-text-field
              label="Job Role"
              color="deep-purple accent-4"
              placeholder="Role"
              v-model="post.jobProfile"
              prepend-icon="mdi-flare"
              outlined
              :rules="rules">
            </v-text-field>
            <v-textarea
              outlined
              name="input-7-4"
              label="Job Description"
              v-model="post.jobDescription"
              placeholder="Description"
              color="deep-purple accent-4"
              prepend-icon="mdi-pencil-box-outline"
              :rules="rules"></v-textarea>
            <v-text-field
              label="Location"
              color="deep-purple accent-4"
              placeholder="Location"
              v-model="post.location"
              prepend-icon="mdi-map-marker-radius"
              outlined
              :rules="rules">
            </v-text-field>
            <v-text-field
              label="Skills"
              color="deep-purple accent-4"
              placeholder="Skills"
              v-model="post.skills"
              prepend-icon="mdi-creation"
              outlined
              :rules="rules">
            </v-text-field>
            <v-text-field
              label="Salary"
              color="deep-purple accent-4"
              placeholder="Salary"
              v-model="post.salary"
              prepend-icon="mdi-currency-usd"
              outlined
              :rules="rules">
            </v-text-field
            ><v-text-field
              label="Email"
              color="deep-purple accent-4"
              placeholder="Email"
              v-model="post.CompanyEmail"
              prepend-icon="mdi-email"
              outlined
              :rules="rules">
            </v-text-field
            ><v-text-field
              label="URL"
              color="deep-purple accent-4"
              placeholder="URL"
              v-model="post.CompanyLink"
              prepend-icon="mdi-link-variant"
              outlined
              :rules="rules">
            </v-text-field>

            <template>
              <v-file-input
                @change="selectFile"
                color="deep-purple accent-4"
                counter
                label="Company logo"
                multiple
                placeholder="Select your Company logo"
                prepend-icon="mdi-paperclip"
                outlined
                :show-size="1000">
                <template v-slot:selection="{ index, text }">
                  <v-chip
                    v-if="index < 2"
                    color="deep-purple accent-4"
                    dark
                    label
                    small>
                    {{ text }}
                  </v-chip>

                  <span
                    v-else-if="index === 2"
                    class="text-overline grey--text text--darken-3 mx-2">
                    +{{ files.length - 2 }} File(s)
                  </span>
                </template>
              </v-file-input>
            </template>

            <v-img
              :src="`/${post.image}`"
              width="80"
              height="80"
              class="ml-8"></v-img>
            <v-card-actions class="ml-8">
              <v-btn
                type="submit"
                class="mt-3"
                color="success">
                >Update</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import API from "../api";

  export default {
    data() {
      return {
        rules: [(value) => !!value || "This field is required!"],
        post: {
          companyNameTitle: "",
          jobProfile: "",
          jobDescription: "",
          location: "",
          skills: "",
          salary: "",
          CompanyEmail: "",
          CompanyLink: "",
          image: "",
        },
        image: "",
        files: [],
      };
    },
    async created() {
      const response = await API.getPostByID(this.$route.params.id);
      this.post = response;
    },
    methods: {
      selectFile(file) {
        this.image = file[0];
      },
      async updateForm() {
        const formData = new FormData();
        formData.append("image", this.image);
        formData.append("companyNameTitle", this.post.companyNameTitle);
        formData.append("jobProfile", this.post.jobProfile);
        formData.append("jobDescription", this.post.jobDescription);
        formData.append("location", this.post.location);
        formData.append("skills", this.post.skills);
        formData.append("salary", this.post.salary);
        formData.append("CompanyEmail", this.post.CompanyEmail);
        formData.append("CompanyLink", this.post.CompanyLink);
        formData.append("old_image", this.post.image);

        if (this.$refs.form.validate()) {
          const response = await API.updatePost(
            this.$route.params.id,
            formData
          );
          this.$router.push({
            name: "JobsView",
            params: { message: response.message },
          });
        }
      },
    },
  };
</script>

<style scoped>
  .font-size-edit-page {
    font-size: 30px;
    color: var(--color-purple);
  }
  @media (max-width: 900px) {
    .font-size-edit-page {
      font-size: 27px;
    }
    @media (max-width: 500px) {
      .font-size-edit-page {
        font-size: 24px;
      }
    }
    @media (max-width: 350px) {
      .font-size-edit-page {
        font-size: 16px;
      }
    }
  }
</style>
