<template>
  <div>
    <div class="MarginTop-100">
      <h1 class="purpleTheme Center">Contact Us</h1>
      <div class="border"></div>
    </div>
    <div class="container">
      <div class="contact-box">
        <div class="left Center">
          <img
            class="ContactFormImage"
            src="../assets/img/undraw_message_sent_re_q2kl.svg" />
        </div>
        <div class="right">
          <h2>Contact Us</h2>
          <form
            action="https://formspree.io/f/xoqzqwyb"
            method="POST">
            <input
              name="name"
              type="text"
              class="field"
              placeholder="Your Name"
              autocomplete="off"
              required />
            <input
              name="email"
              type="email"
              class="field"
              placeholder="Your Email"
              autocomplete="off"
              required />
            <input
              name="phone"
              type="text"
              class="field"
              placeholder="Phone"
              autocomplete="off"
              required />
            <textarea
              name="textarea"
              placeholder="Message"
              class="field"
              autocomplete="off"
              required
              min="5"></textarea>
            <button
              class="btn"
              type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeContactUs",
  };
</script>

<style scoped>
  .border {
    width: 210px;
    height: 5px;
    background: var(--color-gray);
    margin: 12px auto;
  }

  .ContactFormImage {
    width: 250px;
    height: 250px;
    -webkit-filter: drop-shadow(5px 5px 5px var(--color-purple));
    filter: drop-shadow(3px 3px 3px var(--color-purple));
  }

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;
  }

  .container:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
  }
  .contact-box {
    max-width: 850px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: transparent;
    border-radius: 10px;
  }

  .left {
    background-size: cover;
    height: 100%;
  }

  .right {
    padding: 25px 40px;
  }

  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
    color: white;
  }

  h2:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: var(--color-purple);
  }

  .field {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: var(--color-white);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    margin-bottom: 22px;
    transition: 0.3s;
    border-radius: 5px;
  }

  textarea {
    min-height: 150px;
  }

  .btn {
    width: 90px;
    padding: 0.5rem 1rem;
    background-color: var(--color-purple);
    color: var(--color-white);
    font-size: 1.1rem;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn:hover {
    background-color: var(--color-white);
    color: var(--color-purple);
  }

  @media screen and (max-width: 880px) {
    .contact-box {
      grid-template-columns: 1fr;
    }
    .left {
      height: 200px;
    }
  }
</style>
