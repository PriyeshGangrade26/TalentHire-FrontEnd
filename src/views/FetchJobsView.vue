<template>
  <div class="FetchJobsWidth">
    <div id="card_container">
      <div
        class="card"
        v-for="item in jobs"
        :key="item.id">
        <div class="card-img">
          <button class="label">NEW</button>
        </div>

        <div class="card-desc">
          <div class="card-margin">
            <div class="card-job-main-info">
              <div class="font-size-company-name white-space">
                {{
                  item.company.length >= 55
                    ? item.company.substring(0, 55) + "..."
                    : item.company
                }}
              </div>

              <div class="font-size-job-description white-space">
                {{
                  item.name.length >= 55
                    ? item.name.substring(0, 55) + "..."
                    : item.name
                }}
              </div>

              <div class="font-size-job-id white-space">
                Job ID :- {{ item._id }}
              </div>
            </div>

            <div class="job-details">
              <div class="job-card-detail white-space">
                Location : {{ item.actualCity }},
                {{
                  item.address.length >= 55
                    ? item.address.substring(0, 55) + "..."
                    : item.address
                }}
              </div>

              <div class="job-card-detail white-space">
                Skills : {{ item.technologies.slice(0, 3) }}
              </div>

              <div class="job-card-detail white-space">
                Salary : {{ item.annualSalaryFrom }} -
                {{ item.annualSalaryTo }}
              </div>

              <div class="job-tags">
                <div class="tag white-space">{{ item.companyType }}-Based</div>
                <div class="tag white-space">{{ item.expLevel }}</div>
                <div class="tag white-space">{{ item.jobType }}</div>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="links Center">
              <div class="Center">
                <a
                  class="btn-apply Center"
                  :href="`${item.redirectJobUrl}`"
                  >Apply</a
                >
              </div>

              <div class="Center">
                <a
                  class="btn-website Center"
                  :href="`https://www.${item.companyWebsiteLink}`"
                  >Website</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        jobs: [],
      };
    },
    mounted() {
      this.getJobs();
    },
    methods: {
      getJobs() {
        try {
          axios
            .get("https://devitjobs.uk/api/jobsLight")
            .then((res) => {
              this.jobs = res.data;
              this.jobs = this.jobs.filter((item) => item.redirectJobUrl);
              this.jobs = this.jobs.filter((item) => item.companyWebsiteLink);
              // console.log(this.jobs);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
      },
      // getJobs() {
      //   axios.get("https://devitjobs.uk/api/jobsLight").then((response) => {
      //     this.jobs = response.data;
      //     console.log(this.jobs);
      //   });
      // },
    },
  };
</script>
