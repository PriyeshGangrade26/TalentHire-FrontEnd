<template>
  <div class="testimonials">
    <div class="inner">
      <h1>Reviews</h1>
      <div class="border"></div>

      <div class="row">
        <div class="col">
          <div class="testimonial">
            <img
              src="../assets/img/Priyesh.jpg"
              alt="" />
            <div class="name">Priyesh Gangrade</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>

            <p class="grey--text">
              I had amazing experience at FYND academy.This class teaches all of
              the necessary components to become a full stack web developer.I
              have learned Javascript, VUE, Express and mongo with strong
              foundations. I have also learned best coding practices including
              TDD, version controlling and Devops.
            </p>
          </div>
        </div>

        <div class="col">
          <div class="testimonial">
            <img
              src="../assets/img/p1.png"
              alt="" />
            <div class="name">Rohan Singh</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>

            <p class="grey--text">
              Fynd academy for me was a correct timing, correct opportunity. I
              wanted to learn something new and develop new skills and fynd
              academy was a one stop solution for me i guess and I grabbed this
              opportunity.
            </p>
          </div>
        </div>

        <div class="col">
          <div class="testimonial">
            <img
              src="../assets/img/p3.png"
              alt="" />
            <div class="name">Avani Shah</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>

            <p class="grey--text">
              I have worked with front-end technologies before joining Fynd
              Academy. But being an instructor led training, Fynd Academy has
              helped me clear out on all the fundamentals that I missed out on
              while self learning. It has helped me to understand all the
              fundamentals of HTML, CSS, JS, Node, VueJs and Express.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReviewView",
  };
</script>

<style scoped>
  .testimonials {
    padding: 40px 0;
    background: transparent;
    color: var(--color-purple);
    text-align: center;
  }
  .inner {
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
    padding: 0 20px;
  }

  .border {
    width: 160px;
    height: 5px;
    background: var(--color-gray);
    margin: 26px auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .col {
    flex: 33.33%;
    max-width: 33.33%;
    box-sizing: border-box;
    padding: 15px;
  }
  .testimonial {
    background: #fff;
    padding: 30px;
  }
  .testimonial img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .name {
    font-size: 20px;
    text-transform: uppercase;
    margin: 20px 0;
  }
  .stars {
    color: #6ab04c;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 960px) {
    .col {
      flex: 100%;
      max-width: 80%;
    }
  }

  @media screen and (max-width: 600px) {
    .col {
      flex: 100%;
      max-width: 100%;
    }
  }
</style>
