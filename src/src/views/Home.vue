<template>
  <div id="home">

    <div class="logo__item">TCH Studio</div>
    <div class="content content--first">
      <div class="content__move">

        <div class="columns">
          <div class="column img-up">
            <div class="column__img bg2"></div>
            <div class="column__img bg6"></div>
            <div class="column__img bg13"></div>
            <div class="column__img bg14"></div>
            <div class="column__img bg5"></div>
            <div class="column__img bg6"></div>
            <div class="column__img bg7"></div>
            <div class="column__img bg8"></div>
            <div class="column__img bg9"></div>
          </div>
          <div class="column column--bottom img-down">
            <div class="column__img bg3"></div>
            <div class="column__img bg11"></div>
            <div class="column__img bg1"></div>
            <div class="column__img bg15"></div>
            <div class="column__img bg14"></div>
            <div class="column__img bg13"></div>
            <div class="column__img bg12"></div>
            <div class="column__img bg3"></div>
            <div class="column__img bg15"></div>
          </div>
          <div class="column img-up">
            <div class="column__img bg7"></div>
            <div class="column__img bg4"></div>
            <div class="column__img bg9"></div>
            <div class="column__img bg11"></div>
            <div class="column__img bg5"></div>
            <div class="column__img bg3"></div>
            <div class="column__img bg2"></div>
            <div class="column__img bg1"></div>
            <div class="column__img bg5"></div>
            <div class="column__img bg14"></div>
          </div>
          <div class="column column--bottom img-down">
            <div class="column__img bg1"></div>
            <div class="column__img bg2"></div>
            <div class="column__img bg3"></div>
            <div class="column__img bg7"></div>
            <div class="column__img bg4"></div>
            <div class="column__img bg6"></div>
            <div class="column__img bg5"></div>
            <div class="column__img bg8"></div>
            <div class="column__img bg10"></div>
          </div>
        </div><!--/columns-->
              <div class="menu">
                <router-link class="menu__item " to="/about">About Me</router-link>
                <router-link class="menu__item " to="/work">Portfolio</router-link>
                <router-link class="menu__item " to="/service">Service</router-link>
                <router-link class="menu__item " to="/process">Process</router-link>
                <router-link class="menu__item " to="/contact">Contact Me</router-link>
              </div>

      </div><!--/content--move-->
    </div><!--/content-->

      <router-view />

  </div>

</template>

<style scoped>

#nav__menu {
  display: none;
}

.logo__item {
  display: flex;
  font-weight: 800;
  font-size: 16vw;
  line-height: 1.1;
  cursor: pointer;
  padding-bottom: 1rem;
  -webkit-text-stroke: 2px var(--color-menu-text);
  -webkit-text-fill-color: transparent;
  color: transparent;
  z-index: 99999;
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

.img-scale {
  animation: img-scale 48s ease forwards;
}

@keyframes img-scale {
  0% {
      transform: scale(1.3);
  }

  100% {
    transform: scale(1.5);
}
}

.img-up {
  position: relative;
  animation: img-up infinite linear 40s;
}

@keyframes img-up {
  0% {
      bottom: 550px;
  }

  50% {
      bottom: -50px;
}

  100% {
      bottom: 550px;
  }
}

.img-down {
  position: relative;
  animation: img-down infinite linear 40s;
}

@keyframes img-down {
  0% {
      top: 550px;
  }

  50% {
      top: -50px;
}

  100% {
      top: 550px;
  }
}

@media screen and (min-width: 53em) {

  .menu__item {
    font-size: 14vh;
  }

}

</style>
