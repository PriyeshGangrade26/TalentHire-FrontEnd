<template>
  <div>
    <HomeHero />
    <HomeCategories />
    <HomeFeature />
    <HomeTeam />
    <HomePricing />
    <HomeAppDownload />
    <HomeContactUs />
  </div>
</template>
<script>
  import HomeTeam from "../components/HomeTeam.vue";
  import HomeCategories from "../components/HomeCategories.vue";
  import HomeFeature from "../components/HomeFeature.vue";
  import HomePricing from "../components/HomePricing.vue";
  import HomeHero from "../components/HomeHero.vue";
  import HomeAppDownload from "../components/HomeAppDownload.vue";
  import HomeContactUs from "../components/HomeContactUs.vue";
  export default {
    name: "HomeView",
    components: {
      HomeTeam,
      HomeCategories,
      HomeFeature,
      HomePricing,
      HomeHero,
      HomeAppDownload,
      HomeContactUs,
    },
  };
</script>

<style scoped></style>
