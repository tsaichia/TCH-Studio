<template>
<div id="contact">
          <div class="item__img pic pic3"></div>
  <b-container>
        <b-row class="mb-n4">
            <b-col class="contact__text">
                <h1 class="contact__menu__item mb-5 animate__animated animate__fadeInUp col-12 d-flex justify-content-center align-center">Contact Me</h1>
            </b-col>
        </b-row>
    <b-row class="justify-content-center align-items-center">
      <b-col class="mx-auto col-lg-4 col-md-6 col-sm-8 animate__animated animate__fadeInDown" cols="10">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

          <b-form-group
            id="input-group-1"
            label="Name"
            label-for="input-1"
            >
              <b-form-input
                class="mt-n1 mb-n1"
                id="input-1"
                v-model="form.name"
                required
                placeholder="請輸入姓名"
              ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Phone"
            label-for="input-2"
            >
              <b-form-input
                class="mt-n1 mb-n1"
                id="input-2"
                v-model="form.tel"
                required
                placeholder="請輸入電話"
              ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Email"
            label-for="input-3"
            description=""
          >
            <b-form-input
              class="mt-n1 mb-n1"
              id="input-3"
              v-model="form.email"
              type="email"
              required
              placeholder="email@example.com"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="What can I do for you?"
            label-for="input-4"
            >
              <b-form-select
                class="mt-n1 mb-n1"
                id="input-4"
                v-model="form.need"
                :options="needs"
                required
              ></b-form-select>
          </b-form-group>

          <b-form-textarea
            class="mt-5"
            id="textarea"
            v-model="form.text"
            placeholder="請告訴我您的意見，我會盡快聯絡您!"
            rows="4"
            max-rows="8"
            no-resize
          ></b-form-textarea>

          <div class="mx-auto mt-4 text-center">
          <b-button class="mr-1" type="submit" variant="outline-dark">送出</b-button>
          <b-button class="ml-1" type="reset" variant="outline-dark">清除</b-button>
          </div>

        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card> -->
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<style scoped>

    body {
        font-family:'微軟正黑體', 'Microsoft JhengHei';
    }

    .item__img {
      opacity: 0.4 !important;
}

    .contact__menu__item {
        display: flex;
        font-weight: 800;
        font-size: 8vw;
        line-height:0.8;
        cursor: crosshair;
        -webkit-text-stroke: 2px var(--color-menu-text);
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    .contact__menu__item:hover {
      -webkit-text-fill-color: var(--color-menu-text);
    }

    .pic3 {
      background-image: url(https://images.unsplash.com/photo-1528688636434-e8f5f163a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    }

    .pic {
      background-size: cover;
      position: absolute;
      width: 100vw;
      height: 35vh;
      background-size: cover;
      background-position-y: 80%;
      left: 0;
      top: 0;
    }

</style>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        tel: '',
        need: null,
        text: '',
        checked: [],
        date: ''
      },
      needs: [{ text: '請告訴我需求', value: null }, 'Logo設計', '平面設計', '商品設計', '其他設計'],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      const date = new Date()
      this.form.date = date
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      console.log(this.form)
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.tel = ''
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
