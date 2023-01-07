<template>
  <div>
    <v-row class="Margin-Top vertical-align Center">
      <div>
        <img
          src="../assets/img/undraw_programming_re_kg9v.svg"
          class="homeImg" />
      </div>

      <div>
        <h1 class="homeText">Find The Perfect Job That You</h1>
        <h1 class="homeText">Deserved</h1>
        <h3 class="homeTextSmall grey--text">We have 1000+ jobs & counting</h3>
        <button
          class="Home_btn MarginTop-40 white-space"
          @click="openURL()">
          Get Started
        </button>
      </div>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "HomeHero",
    methods: {
      openURL() {
        window.open("/jobs", "_self");
      },
    },
  };
</script>

<style>
  .Margin-Top {
    margin-top: 8%;
  }
  .Home_btn {
    cursor: pointer;
    border: 1px solid var(--color-purple);
    border-radius: 5px;
    font-size: 1.4rem;
    padding: 5px 10px;
    color: var(--color-white);
    background-color: var(--color-purple);
    transition: 0.3s;
  }
  .Home_btn:hover {
    color: var(--color-purple);
    background-color: var(--color-white);
  }
  .homeImg {
    width: 450px;
    height: 450px;
    -webkit-filter: drop-shadow(5px 5px 5px var(--color-purple));
    filter: drop-shadow(3px 3px 3px var(--color-purple));
  }
  .vertical-align {
    vertical-align: center;
  }
  .homeText {
    font-size: 2.8rem;
    color: white;
  }
  .homeTextSmall {
    font-size: 1.6rem;
    color: white;
  }
  @media (max-width: 1125px) {
    .homeImg {
      width: 350px;
      height: 350px;
    }
    .homeText {
      font-size: 2.4rem;
    }
    .homeTextSmall {
      font-size: 1.4rem;
    }
    .Home_btn {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 930px) {
    .homeImg {
      width: 350px;
      height: 350px;
    }
    .homeText {
      font-size: 2.1rem;
    }
    .homeTextSmall {
      font-size: 1.2rem;
    }
    .Home_btn {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 855px) {
    .homeImg {
      width: 300px;
      height: 350px;
    }
    .homeText {
      font-size: 1.9rem;
    }
    .homeTextSmall {
      font-size: 1rem;
    }
    .Home_btn {
      font-size: 1rem;
    }
  }
  @media (max-width: 760px) {
    .homeImg {
      width: 230px;
      height: 350px;
    }
    .homeText {
      font-size: 1.7rem;
    }
    .homeTextSmall {
      font-size: 0.8rem;
    }
    .Home_btn {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 640px) {
    .homeImg {
      width: 230px;
      height: 220px;
    }
    .Margin-Top {
      margin-top: 0%;
    }
    .homeText {
      font-size: 1.6rem;
    }
    .homeTextSmall {
      font-size: 0.8rem;
    }
    .Home_btn {
      font-size: 0.7rem;
    }
  }
</style>
