<template>
  <div class="Center">
    <div class="container">
      <v-img
        src="../assets/img/404-2.png"
        height="280"
        width="300"></v-img>
      <h3>404 Error</h3>
      <p>OH N0! You're lost...!!!</p>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery, But you can click the button below to go back to the homepage.
      </p>
      <button
        class="log Center white-space"
        type="button"
        @click="goHome()">
        HOME
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PageNotFoundView",
    methods: {
      goHome() {
        this.$router.push("/");
      },
    },
  };
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container h3 {
    color: red;
    font-size: 3em;
    filter: drop-shadow(1px 1px 8px red);
  }
  .container p {
    color: var(--color-gray);
    font-size: 1em;
  }

  .RED {
    color: red;
    font-size: 1.2em;
  }
</style>
