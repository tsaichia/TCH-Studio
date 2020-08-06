<template>
  <div id="graphic">
    <div class="item__img pic pic3"></div>
    <b-container>
      <b-row class="mb-4">
        <b-col class="contact__text">
          <h1
            class="service__menu__item animate__animated animate__fadeInUp col-12 d-flex justify-content-center align-center"
          >Graphic Design</h1>
        </b-col>
      </b-row>

        <div class="graphic__columns">
          <div class="graphic__column">
            <div class="graphic__column__img bg2"></div>
            <div class="graphic__column__img bg6"></div>
            <div class="graphic__column__img bg13"></div>
            <div class="graphic__column__img bg14"></div>
            <div class="graphic__column__img bg5"></div>
            <div class="graphic__column__img bg6"></div>
            <div class="graphic__column__img bg7"></div>
            <div class="graphic__column__img bg8"></div>
            <div class="graphic__column__img bg9"></div>
          </div>
          <div class="graphic__column graphic__column--bottom">
            <div class="graphic__column__img bg3"></div>
            <div class="graphic__column__img bg11"></div>
            <div class="graphic__column__img bg1"></div>
            <div class="graphic__column__img bg15"></div>
            <div class="graphic__column__img bg14"></div>
            <div class="graphic__column__img bg13"></div>
            <div class="graphic__column__img bg12"></div>
            <div class="graphic__column__img bg3"></div>
            <div class="graphic__column__img bg15"></div>
          </div>
          <div class="graphic__column">
            <div class="graphic__column__img bg7"></div>
            <div class="graphic__column__img bg4"></div>
            <div class="graphic__column__img bg9"></div>
            <div class="graphic__column__img bg11"></div>
            <div class="graphic__column__img bg5"></div>
            <div class="graphic__column__img bg3"></div>
            <div class="graphic__column__img bg2"></div>
            <div class="graphic__column__img bg1"></div>
            <div class="graphic__column__img bg5"></div>
          </div>
          <div class="graphic__column graphic__column--bottom">
            <div class="graphic__column__img bg1"></div>
            <div class="graphic__column__img bg2"></div>
            <div class="graphic__column__img bg3"></div>
            <div class="graphic__column__img bg7"></div>
            <div class="graphic__column__img bg4"></div>
            <div class="graphic__column__img bg6"></div>
            <div class="graphic__column__img bg5"></div>
            <div class="graphic__column__img bg8"></div>
            <div class="graphic__column__img bg10"></div>
          </div>
        </div><!--/columns-->

        <!-- <div class="col-6 col-lg-3">
          <a class="image-popup-no-margins" href="https://images.unsplash.com/photo-1596474846859-d993c83b8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80">
            <div class="view">
              <img src="https://images.unsplash.com/photo-1596474846859-d993c83b8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80" class="img-fluid">
              <div class="text">
                <h4 class="text-center">台北市立動物園</h4>
              </div>
            </div>
          </a>
        </div> -->
<!--
      <div class="d-flex mt-5 mb-5 m-auto animate__animated animate__fadeInDown">
          <div class="row d-flex justify-content-center">

              <div class="box col-6 col-lg-4">

                  <img src="https://picsum.photos/300/300/?random=1" class="card-img-top">

                    <h5 class="font__bold">Logo設計</h5>
                    <p class="card-text">企業標誌設計 | 餐飲標誌設計 | 活動標誌設計</p>

                  </div>

          </div>
      </div>

      <div class="d-flex mt-5 mb-5 m-auto animate__animated animate__fadeInDown">
          <div class="row d-flex justify-content-center">

              <div class="box col-6 col-lg-4">

                  <img src="https://picsum.photos/300/300/?random=1" class="card-img-top">

                    <h5 class="font__bold">Logo設計</h5>
                    <p class="card-text">企業標誌設計 | 餐飲標誌設計 | 活動標誌設計</p>

                  </div>

          </div>
      </div>

      <div class="d-flex mt-5 mb-5 m-auto animate__animated animate__fadeInDown">
          <div class="row d-flex justify-content-center">

              <div class="box col-6 col-lg-4">

                  <img src="https://picsum.photos/300/300/?random=1" class="card-img-top">

                    <h5 class="font__bold">Logo設計</h5>
                    <p class="card-text">企業標誌設計 | 餐飲標誌設計 | 活動標誌設計</p>

                  </div>

          </div>
      </div> -->

    </b-container>
  </div>

</template>

<script>
export default {
  data () {
    return {
      cursorstyle: {
      }
    }
  },
  methods: {
    mousemove (event) {
      this.cursorstyle = {
        left: `${event.clientX}px`,
        top: `${event.clientY}px`
      }
    }

  }
}
</script>

<style scoped>

.graphic__columns {
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100vh;
  position: absolute;
  top:40%;
  left: 0;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: 100%;
  grid-gap: 1.5rem;
  padding: 0 8vw;
}

.graphic__column {
  position: relative;
  align-self: start;
}

.graphic__column--bottom {
  align-self: auto;
}

.graphic__column__img {
  width: 100%;
  opacity: 0.4;
  background-size: cover;
  background-position: 50% 50%;
  height: 25vw;
  transition: 1s;
}

.graphic__column__img:hover {
  width: 100%;
  opacity: 1;
  background-size: cover;
  background-position: 50% 50%;
  height: 25vw;
}

.graphic__column__img:nth-child(odd) {
  height: 30vw;
}

.graphic__column__img:not(:last-child) {
  margin-bottom: 1.5rem;
}

.pic3 {
  background-image: url(https://images.unsplash.com/photo-1477120206578-46b3ca98a4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80);
}

.pic {
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 35vh;
  background-size: cover;
  background-position-y: 60%;
  left: 0;
  top: 0;
}

.content {
  width: 70%;
}

#service .card {
  border: 0px;
  transition: 0.3s;
  box-shadow: 3 3 0.5 black;
  height: 100%;
  opacity: 0.8 !important;
  background-color: white;
}

#service .card:hover {
  transform: translateY(-0.5rem);
  opacity: 1 !important;
}

h5 {
  font-weight: 800;
  font-size: 2rem;
  color:rgb(0,0,0);

}

/* .card-text {
  font-size: medium;
} */

.service__menu__item {
  display: flex;
  font-weight: 800;
  font-size: 8vw;
  line-height: 0.8;
  cursor: crosshair;
  -webkit-text-stroke: 2px var(--color-menu-text);
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.service__menu__item:hover {
  -webkit-text-fill-color: var(--color-menu-text);
}
</style>
