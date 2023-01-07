<template>
  <v-app id="app">
    <div class="center_header_container Center">
      <header class="Header">
        <router-link
          class="Center"
          to="/"
          ><box-icon
            name="color"
            type="solid"
            animation="spin"
            color="#7e22ce"
            class="box-Icon"
            size="md"></box-icon>
          <span class="logo-title white-space">Talent Hire</span>
        </router-link>

        <ul
          class="navbar Center"
          :class="{ 'header-visible': toggle }">
          <li>
            <router-link
              to="/"
              class="routerlink"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/jobs"
              class="routerlink"
              >Jobs</router-link
            >
          </li>
          <li>
            <router-link
              to="/add-post"
              class="routerlink white-space"
              >Post Jobs</router-link
            >
          </li>
          <li>
            <router-link
              to="/company"
              class="routerlink"
              >Company</router-link
            >
          </li>
          <li>
            <router-link
              to="/reviews"
              class="routerlink"
              >Reviews</router-link
            >
          </li>
        </ul>

        <div class="Center">
          <div class="Center">
            <box-icon
              v-if="!$auth.isAuthenticated"
              name="log-in"
              animation="fade-left"
              color="#7e22ce"></box-icon>
            <div
              class="Center"
              v-if="!$auth.loading">
              <!-- show login when not authenticated -->
              <button
                class="log white-space"
                v-if="!$auth.isAuthenticated"
                @click="login">
                Log in
              </button>

              <UserProfile v-if="$auth.isAuthenticated" />

              <!-- show logout when authenticated -->
              <button
                class="log white-space nonBTN"
                v-if="$auth.isAuthenticated"
                @click="logout">
                Log out
              </button>
            </div>
          </div>
          <v-btn
            fab
            small
            text
            right
            class="menu-btn"
            @click="toggle = !toggle">
            <v-icon
              class="gray-text"
              large
              >mdi-menu</v-icon
            >
          </v-btn>
        </div>
      </header>
    </div>

    <!-- Sizes your content based upon application components -->
    <v-main :style="myStyle">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <div class="center_footer_container Center">
      <div class="footer">
        <div class="Row Center">
          <a href="https://github.com/PriyeshGangrade26">
            <v-icon>mdi-github</v-icon>
            <!-- <box-icon
              name="github"
              type="logo"
              animation="tada"
              color="#7e22ce"
              size="sm"
              class="Center"></box-icon> -->
          </a>
          <a href="https://www.instagram.com/priyesh_gangrade/">
            <v-icon>mdi-github</v-icon>
<!--            <box-icon-->
<!--              name="instagram"-->
<!--              type="logo"-->
<!--              animation="tada"-->
<!--              color="#7e22ce"-->
<!--              size="sm"-->
<!--              class="Center"></box-icon>-->
          </a>
          <a href="https://www.youtube.com/channel/UCMZ0U9C13wjwZ8y-p56Gpng">
            <v-icon>mdi-github</v-icon>
<!--            <box-icon-->
<!--              name="youtube"-->
<!--              type="logo"-->
<!--              animation="tada"-->
<!--              color="#7e22ce"-->
<!--              size="sm"-->
<!--              class="Center"></box-icon>-->
          </a>
          <a href="https://twitter.com/PriyeshGangrade">
            <v-icon>mdi-github</v-icon>
<!--            <box-icon-->
<!--              name="twitter"-->
<!--              type="logo"-->
<!--              animation="tada"-->
<!--              color="#7e22ce"-->
<!--              size="sm"-->
<!--              class="Center"></box-icon>-->
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006191267045">
            <v-icon>mdi-github</v-icon>
<!--            <box-icon-->
<!--              name="meta"-->
<!--              type="logo"-->
<!--              animation="tada"-->
<!--              color="#7e22ce"-->
<!--              size="sm"-->
<!--              class="Center"></box-icon>-->
          </a>
          <a href="https://www.linkedin.com/in/priyeshgangrade/">
            <v-icon>mdi-github</v-icon>
<!--            <box-icon-->
<!--              name="linkedin-square"-->
<!--              type="logo"-->
<!--              animation="tada"-->
<!--              color="#7e22ce"-->
<!--              size="sm"-->
<!--              class="Center"></box-icon>-->
          </a>
        </div>

        <div>
          <div class="footer-details Center">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact</a></li>
          </div>
        </div>

        <div class="purple-color Center">
          Talent Hire © 2022 - All rights reserved || Designed By : Priyesh
          Gangrade
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        myStyle: {
          backgroundColor: "#000000",
        },
        toggle: false,
      };
    },
    components: {
      UserProfile: () => import("@/components/UserProfile.vue"),
    },
    methods: {
      // Log the user in
      login() {
        this.$auth.loginWithRedirect();
      },
      // Log the user out
      logout() {
        this.$auth.logout({
          returnTo: window.location.origin,
        });
      },
    },
  };
</script>

<style>
  @import "./assets/css/utils.css";
  @import "./assets/css/header.css";
  @import "./assets/css/footer.css";
  @import "./assets/css/fetchjobs.css";
</style>
