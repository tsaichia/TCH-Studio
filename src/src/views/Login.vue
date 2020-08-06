<template>
<div id="login">
        <div class="item__img pic pic3"></div>
    <b-container>
        <b-row id="tch_logo" class="mb-n4">
            <b-col class="login__text">
                <h1 class="login__menu__item mb-5 animate__animated animate__fadeInUp col-12 d-flex justify-content-center align-center">Manager Only</h1>
            </b-col>
        </b-row>
        <b-row class="d-flex" id="tch_form">
            <b-col class="mx-auto col-lg-4 col-md-6 col-sm-8" cols="10">
                <b-form class="d-flex flex-column animate__animated animate__fadeInDown" @submit="submit">

                    <b-form-group
                      class="mt-4"
                      label="Manager Account"
                      label-for="input-account"
                      :state="state('account')">
                        <b-form-input
                          id="input-account"
                          type="text"
                          v-model="account"
                          :state="state('account')"
                          placeholder="管理員帳號"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    label="Manager Password"
                    label-for="input-password"
                    :state="state('password')">
                      <b-form-input
                      id="input-account"
                      type="password"
                      v-model="password"
                      :state="state('password')"
                      placeholder="管理員密碼">
                      </b-form-input>
                    </b-form-group>

                    <div class="mx-auto mt-4 text-center">
                      <b-button type="submit" variant="outline-dark">登入</b-button>
                    </div>

                </b-form>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    state (type) {
      if (type === 'account') {
        if (this.account.length < 4 || this.account.length > 10) {
          return null
        } else {
          return null
        }
      } else if (type === 'password') {
        if (this.password.length < 4 || this.password.length > 10) {
          return null
        } else {
          return null
        }
      }
    },
    submit (event) {
      event.preventDefault()
      if (this.account.length < 4 || this.account.length > 10) {
        alert('帳號格式不符')
      } else if (this.password.length < 4 || this.password.length > 10) {
        alert('密碼格式不符')
      }

      this.axios.post(
        process.env.VUE_APP_APIURL + '/login',
        { account: this.account, password: this.password }
      )
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('登入成功')
            // 呼叫 vuex 的登入
            this.$store.commit('login', this.account)
            // 跳到登入後的管理頁
            this.$router.push('manage')
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

    .pic3 {
      background-image: url(https://images.unsplash.com/photo-1501163109389-abf37ca1276a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    }

    .pic {
      background-size: cover;
      position: absolute;
      width: 100vw;
      height: 35vh;
      background-size: cover;
      background-position-y: 70%;
      left: 0;
      top: 0;
    }

    body {
        font-family:'微軟正黑體', 'Microsoft JhengHei';
        overflow-x: hidden;
    }

    .login__menu__item {
        display: flex;
        font-weight: 800;
        font-size: 8vw;
        line-height:0.8;
        cursor: crosshair;
        -webkit-text-stroke: 2px var(--color-menu-text);
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    .login__menu__item:hover {
      -webkit-text-fill-color: var(--color-menu-text);
    }

    @media (max-width: 992px) {

    .login__menu__item {
        display: flex;
        font-weight: 800;
        font-size: 15vw;
        line-height:0.5;
        cursor: crosshair;
        -webkit-text-stroke: 2px var(--color-menu-text);
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

      .pic {
      background-size: cover;
      position: absolute;
      width: 100vw;
      height: 20vh;
      background-size: cover;
      background-position-y: 70%;
      left: 0;
      top: 0;
    }

    #tch_logo {
      margin-top: 45%;
    }

}

</style>
