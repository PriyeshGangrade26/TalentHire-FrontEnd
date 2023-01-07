<template>
  <div>
    <div class="MarginTop-40">
      <v-row class="ma-auto pa-auto vertical-align Center">
        <div>
          <h1 class="homeText MarginTop-100">Our Team</h1>
          <h3 class="homeTextSmall grey--text">
            Meet Our Awesome And Expert Team Members
          </h3>
        </div>
      </v-row>
    </div>

    <h1 class="purpleTheme Center MarginTop-100">Team</h1>
    <div class="border"></div>

    <div class="MarginTop-80"></div>
    <div class="container">
      <div class="profile">
        <img
          src="https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
          alt="" />
        <span class="name">Kashish Singh</span>
      </div>
      <div class="profile ML">
        <img
          src="https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
          alt="" />
        <span class="name">Rahul Tiwari</span>
      </div>
      <div class="profile ML">
        <img
          src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="" />
        <span class="name">Aishwarya</span>
      </div>
      <div class="profile ML">
        <img
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="" />
        <span class="name">Vikas Kushwah</span>
      </div>
      <div class="profile ML">
        <img
          src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
          alt="" />
        <span class="name">Nimish Trivedi</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeTeam",
  };
</script>

<style scoped>
  .border {
    width: 120px;
    height: 5px;
    background: var(--color-gray);
    margin: 12px auto;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .profile {
    position: relative;
    transition: all 0.3s;
    width: 150px;
  }

  .profile:hover {
    transform: translateY(-50px);
  }

  .profile img {
    max-width: 100%;
    border-radius: 50%;
    border: 5px solid var(--color-white);
    cursor: pointer;
  }

  .ML {
    margin-left: -20px;
  }

  .profile .name {
    position: absolute;
    color: #fff;
    padding: 15px 30px;
    bottom: -80px;
    left: 50%;
    white-space: nowrap;
    transform: translate(-50%, -50px);
    font-size: 15px;
    opacity: 0;
    transition: all 0.3s;
  }

  .profile .name::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .profile img:hover + .name {
    opacity: 1;
    transform: translateX(-50%);
  }
</style>
