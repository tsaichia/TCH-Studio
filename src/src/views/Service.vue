<template>
  <div id="service">
    <div class="item__img pic pic3"></div>
    <b-container>
      <b-row class="mb-4">
        <b-col class="contact__text">
          <h1
            class="service__menu__item animate__animated animate__fadeInUp col-12 d-flex justify-content-center align-center"
          >Service</h1>
        </b-col>
      </b-row>

      <div class=" d-flex mt-5 mb-5 m-auto animate__animated animate__fadeInDown">
          <div class="row d-flex justify-content-center">
              <div class="col-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/300/200/?random=1" class="card-img-top">
                  <div class="card-body">
                    <h5 class="font__bold">Logo設計</h5>
                    <p class="card-text">企業標誌設計 | 餐飲標誌設計 | 活動標誌設計</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/300/200/?random=2" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">平面文宣設計</h5>
                    <p class="card-text">海報設計 | DM折頁設計 | 名片設計 | 明信片設計 | 會員卡設計 | Banner設計
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/300/200/?random=3" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">包裝設計</h5>
                    <p class="card-text">化妝品包裝設計 | 食品包裝設計 | 禮盒包裝設計</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/300/200/?random=4" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">禮品設計</h5>
                    <p class="card-text">喜帖設計 | 賀卡設計 | 邀請卡設計 | 提袋設計</p>
                  </div>
                </div>
              </div>
                <div class="col-6 col-lg-4">
                <router-link to="/work">
                <div class="card" style="background:url(https://images.unsplash.com/photo-1595364237783-18144c05cd79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80);">
                  <div class="card-body ml-2 mt-2">
                    <h5 class="card-title" style="color:white; font-size:5rem ;">Enter To My Portfolio</h5>
                    <p class="card-text" style="color:white; font-size:2rem ; font-weight:600;">點這邊進入我的作品集</p>
                  </div>
                </div>
                </router-link>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/300/200/?random=5" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">商品設計</h5>
                    <p class="card-text">T-Shirt設計 | 各式商品設計</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/300/200/?random=6" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">其他設計</h5>
                    <p class="card-text">活動背板設計 | 招牌設計 | 餐車外觀設計</p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/300/200/?random=8" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">插畫繪製</h5>
                    <p class="card-text">電腦繪圖 | 手繪插畫 | 素描 </p>
                  </div>
              </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card">
                  <img src="https://picsum.photos/300/200/?random=7" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">印刷服務</h5>
                    <p class="card-text">擁有合作的印刷廠商，可提供各式的印刷服務。
                    </p>
                  </div>
                </div>
              </div>

          </div>
      </div>
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
