<template>
  <div id="work">
      <div id="work__container">

        <p id="scroll" class="animate__animated animate__fadeInLeft" style="animation-duration: 1.5s;">───────&nbsp;&nbsp;&nbsp;scroll</p>

      <!-- <lottie-player id="scroll" src="https://assets4.lottiefiles.com/packages/lf20_FTXoC2.json"  background="transparent"  speed="1"  style="width:300px; height: 300px;"  loop  autoplay></lottie-player> -->

      <hooper class="animate__animated animate__fadeInUp" id="hooper__bg" group="group1" :initialSlide="0" :itemsToShow="1" :itemsToSlide="1" :infiniteScroll="false" :centerMode="true" :touchDrag="false" :shortDrag="false" :autoPlay="false" :playSpeed="3000" :transition="800">
        <slide class="pic1 bg">
        </slide>
        <slide class="pic2 bg">
        </slide>
        <slide class="pic4 bg">
        </slide>
        <slide class="pic3 bg">
        </slide>
      </hooper>

      <hooper class="animate__animated animate__fadeInDown" id="hooper__text" group="group1" :itemsToSlide="0" :itemsToShow="1" :initialSlide="1" :infiniteScroll="false" :centerMode="true" :touchDrag="false" :shortDrag="false" :autoPlay="false" :playSpeed="3000" :transition="800">
        <slide>
          <router-link class="menu__item" to="/graphic">商標設計</router-link>
        </slide>
        <slide>
          <router-link class="menu__item" to="/graphic">平面設計</router-link>
        </slide>
        <slide>
          <router-link class="menu__item" to="/graphic">商品設計</router-link>
        </slide>
        <slide>
          <router-link class="menu__item" to="/graphic">其他設計</router-link>
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
      </div>

  </div>

</template>

<script>

import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  }
}
</script>

<style scoped>

.hooper:last-child{
  height: 140px !important;
}

.hooper li {
  padding-top: 5px;
}

#work__container {
  position: relative;
}

#hooper__bg {
  height: 100vh;
}

#hooper__text {
  width: 100vw;
  position: absolute;
  top: 85%;
  left: 30%;
  /* pointer-events: none; */
}

.bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
  cursor: grab;
}

.bg:active {
  cursor: grabbing;
}

.work__text {
  font-size: 4rem;
}

.menu__item:hover{

  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: headShake;
  animation-name: headShake;

}

.pic1 {
  background-image: url(https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80);
}

.pic2 {
  background-image: url(https://images.unsplash.com/photo-1466690672306-5f92132f7248?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80);
}

.pic3 {
  background-image: url(https://images.unsplash.com/photo-1501163109389-abf37ca1276a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
}

.pic4 {
  background-image: url(../img/VDM.jpg);
  background-size: cover;
  background-position-y: 70%;
}

.animate__animated.animate__fadeInLeft {
  --animate-duration: 2s;
}

.animate__animated.animate__fadeInRight {
  --animate-duration: 1s;
}

.animate__animated.animate__fadeInUp {
  --animate-duration: 1s;
}

.animate__animated.animate__fadeInDown {
  --animate-duration: 1s;
}

/* @media (min-width: 53em) {

#hooper__bg {
  height: 100vh;
}

#hooper__text {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 81%;
  left: 65%;
}

#scroll {
  position: absolute;
  bottom: 5rem;
  left: 4rem;
  font-size: medium;
}

} */

@media (max-width: 992px) {

#scroll {
  display: none;
}

#hooper__text {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 82%;
  left: 30%;
}

}

@media (min-width: 992px) {

#scroll {
  position: absolute;
  bottom: 6%;
  left: 8%;
  font-size: larger;
}

#hooper__text {
  width: 100vw;
  position: absolute;
  top: 81%;
  left: 60%;
}

}
</style>
