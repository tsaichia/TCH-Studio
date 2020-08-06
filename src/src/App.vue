<template>
  <div id="app" @mousemove="mousemove">
    <div class="cursor">
      <div :style="cursorstyle" class="cursor__inner cursor__inner--circle"></div>
    </div>
    <div id="nav" class="col-12 text-right menu-left">
      <div id="nav__logo" class="text-left">
        <router-link to="/">TCH Studio</router-link>
      </div>
      <router-link to="/">
        <font-awesome-icon size="1x" class="mr-2" :icon="['fas', 'align-justify']" color="dark"></font-awesome-icon>
      </router-link>|
      <router-link v-if="user.length === 0" to="/login">
        <font-awesome-icon size="1x" class="ml-1" :icon="['fas', 'hammer']" color="dark"></font-awesome-icon>
      </router-link>
      <b-button v-else @click="logout" class="mr-3" type="submit" variant="outline-dark">登出</b-button>
      <!-- <router-link to="/"><font-awesome-icon class="mt-5" id="play" size="1x" :icon="['fas', 'align-justify']" color="dark" ></font-awesome-icon></router-link>
      <router-link to="/login"><font-awesome-icon class="mt-5" id="play" size="1x" :icon="['fas', 'hammer']" color="dark" ></font-awesome-icon></router-link>-->
    </div>
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  data () {
    return {
      cursorstyle: {}
    }
  },
  methods: {
    mousemove (event) {
      this.cursorstyle = {
        left: `${event.pageX}px`,
        top: `${event.pageY}px`
      }
    },
    logout () {
      this.axios
        .delete(process.env.VUE_APP_APIURL + '/logout')
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('登出成功')
            // 呼叫 vuex 的登入
            this.$store.commit('logout')
            // 如果現在不是在首頁，跳到登入後的首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    }
  }
}
</script>

<style scoped>
#nav {
  float: right;
  margin-top: 2rem;
  margin-right: 3rem;
  z-index: 999;
  position: relative;
}

#nav__logo {
  position: absolute;
  font-weight: 500;
  margin-left: 5rem;
  font-style: italic;
  font-size: 0.8vw;
}
</style>
