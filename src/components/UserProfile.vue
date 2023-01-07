<template>
  <v-row
    justify="center"
    class="mr-1">
    <v-menu
      bottom
      min-width="250px"
      rounded
      offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          large
          v-on="on">
          <v-avatar
            color="white"
            size="40">
            <img
              class="profileImg"
              :src="$auth.user.picture"
              alt="" />
          </v-avatar>
        </v-btn>
      </template>
      <v-card class="mt-2">
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <img
              class="profileImg"
              :src="$auth.user.picture"
              alt="" />
            <h3>{{ $auth.user.name ? $auth.user.name : "" }}</h3>
            <p class="text-caption mt-1">
              {{ $auth.user.email ? $auth.user.email : "" }}
            </p>
            <v-divider class="my-3"></v-divider>
            <!-- show logout when authenticated -->
            <button
              class="log white-space"
              v-if="$auth.isAuthenticated"
              @click="logout">
              Log out
            </button>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </v-row>
</template>
<script>
  export default {};
</script>
<style scoped>
  .profileImg {
    width: inherit;
    height: inherit;
    border-radius: 10%;
    object-fit: fill;
  }
  .log {
    width: 80px;
  }
</style>
