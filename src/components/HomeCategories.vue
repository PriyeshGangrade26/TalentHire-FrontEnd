<template>
  <div>
    <h1 class="purpleTheme Center MarginTop-100">Services</h1>
    <div class="border"></div>

    <div class="container MarginTop-40">
      <div class="card">
        <div class="circle">
          <h2 class="MarginTop-40 white-space">Find Jobs</h2>
        </div>
        <div class="content">
          <p>
            Find a career you'll love Explore which careers have the highest job
            satisfaction, best salaries and more.
          </p>
          <button
            class="Service_btn white-space crimson-card-color"
            @click="jobsURL()">
            Find
          </button>
        </div>
      </div>

      <div class="card">
        <div class="circle">
          <h2 class="white-space MarginTop-40">Post Jobs</h2>
        </div>
        <div class="content">
          <p>
            It’s free and easy to post a job. Simply fill in a title,
            description, role, skills, and salary.
          </p>
          <button
            class="Service_btn white-space btn-purpleTheme"
            @click="postURL()">
            Post
          </button>
        </div>
      </div>

      <div class="card">
        <div class="circle">
          <h2 class="MarginTop-40 white-space">Freelancing</h2>
        </div>
        <div class="content">
          <p>
            No job is too big or too small. We've got freelancers for jobs of
            any size or budget, across 300+ skills. No job is too complex. We
            can get it done!
          </p>
          <button
            class="Service_btn white-space crimson-card-color"
            @click="freelancingURL()">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
  export default {
    name: "HomeCategories",
    methods: {
      jobsURL() {
        window.open("/jobs", "_self");
      },
      postURL() {
        window.open("/add-post", "_self");
      },
      freelancingURL() {
        window.open("/company", "_self");
      },
    },
  };
</script>

<style scoped>
  .Service_btn {
    cursor: pointer;
    border-radius: 7px;
    font-size: 1.1rem;
    padding: 8px 18px;
    color: var(--color-white);
    transition: 0.3s;
  }
  .crimson-card-color {
    background-color: #da2268;
  }
  .btn-purpleTheme {
    background-color: rgb(126, 34, 206);
  }
  .border {
    width: 160px;
    height: 5px;
    background: var(--color-gray);
    margin: 12px auto;
  }
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .container .card {
    position: relative;
    width: 300px;
    height: 450px;
    background: var(--color-white);
    margin: 15px;
    border-radius: 15px;
    overflow: hidden;
    opacity: 0.3;
  }
  .container:hover .card {
    transform: scale(0.95);
    opacity: 1;
  }
  .container .card:hover {
    filter: blur(0px);
    transform: scale(1.03);
    opacity: 1;
  }
  .container .card .circle {
    position: relative;
    width: 100%;
    height: 100%;
    clip-path: circle(180px at center 0);
    text-align: center;
  }
  .container .card .circle h2 {
    color: var(--color-white);
    font-size: 2em;
    padding: 25px;
  }
  .container .card .content {
    padding: 10px 35px;
    text-align: center;
  }
  .container .card .content p {
    color: var(--color-gray);
  }
  .container .card .content a {
    display: inline-block;
    padding: 10px 20px;
    color: var(--color-white);
    border-radius: 8px;
    text-decoration: none;
    margin-top: 15px;
  }
  .container .card:nth-child(1) .circle,
  .container .card:nth-child(1) .content a {
    background: #da2268 !important;
  }
  .container .card:nth-child(2) .circle,
  .container .card:nth-child(2) .content a {
    background: var(--color-purple) !important;
  }
  .container .card:nth-child(3) .circle,
  .container .card:nth-child(3) .content a {
    background: #da2268;
  }
  @media (max-width: 710px) {
    .container .card {
      overflow: hidden;
      opacity: 1;
    }
    .container:hover .card {
      transform: scale(1);
      opacity: 1;
    }
    .container .card:hover {
      opacity: 1;
    }
  }
</style>
