<template>
  <div id="manage">
        <div class="item__img pic pic3"></div>
        <b-row id="tch_logo" class="mb-n4">
            <b-col class="manager__text">
                <h1 class="manager__menu__item mb-5 animate__animated animate__fadeInUp col-12 d-flex justify-content-center align-center">Manager Only</h1>
            </b-col>
        </b-row>

            <b-col class="mx-auto col-lg-4 col-md-6 col-sm-8" cols="10">

              <h2 class="text-center">檔案上傳</h2>
              <br />
              <b-form @submit="submit">
                <b-form-file
                  v-model="file"
                  :state="state"
                  placeholder="選擇檔案或拖曳至此"
                  drop-placeholder="將檔案拖曳至此"
                  required="required"
                  browse-text="瀏覽"
                  accept="image/*"
                  @input="validateFile"
                ></b-form-file>
                <p class="text-dark">僅支援 1MB 以下的圖片</p>
                <b-form-textarea
                  v-model="description"
                  placeholder="相片說明"
                  rows="3"
                  max-rows="6"
                  maxlength="200"
                  @input="validateText"
                  :state="textstate"
                ></b-form-textarea>
                <br />
                <div class="mx-auto mt-4 text-center">
                <b-button type="submit" variant="outline-dark">上傳</b-button>
                </div>
              </b-form>

            </b-col>

            <Photoswipe>
              <b-container>
              <b-row>
                <b-col cols="12" md="6" lg="3" v-for="(image, idx) in images" :key="idx">
                  <b-card class="card d-flex text-center">
                    <b-card-img class="mt-4" :src="image.src" v-pswp="image"></b-card-img>
                    <b-card-body>
                      <b-btn class="mt-2 mr-1 ml-1" v-if="image.edit" variant="outline-dark" @click="cancel(image)">取消</b-btn>
                      <b-btn class="mt-2 mr-1 ml-1" v-else variant="outline-dark" @click="edit(image)">編輯</b-btn>
                      <b-btn class="mt-2 mr-1 ml-1" v-if="image.edit" variant="outline-dark" @click="update(image)">更新</b-btn>
                      <b-btn class="mt-2 mr-1 ml-1" v-else variant="outline-dark" @click="del(image, idx)">刪除</b-btn>
                      <pre class="pt-3 text" v-if="!image.edit">{{ image.title }}</pre>
                      <b-form-textarea v-else v-model="image.model"></b-form-textarea>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
              </b-container>
            </Photoswipe>
  </div>
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {
      file: null,
      description: '',
      state: null,
      textstate: null,
      images: []
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    validateFile () {
      if (this.file != null) {
        if (
          this.file.size >= 1024 * 1024 ||
          !this.file.type.includes('image')
        ) {
          this.state = false
          this.file = null
        } else {
          this.state = true
        }
      }
    },
    validateText () {
      if (this.description.length > 200) {
        this.textstate = false
      } else {
        this.textstate = true
      }
      // this.textstate = (!this.description.length > 200)
    },
    submit (event) {
      event.preventDefault()
      if (
        this.file === null ||
        this.file.size >= 1024 * 1024 ||
        !this.file.type.includes('image')
      ) {
        alert('檔案格式不符')
      } else {
        // FormData 可以同時傳送檔案和表單資料
        const fd = new FormData()
        fd.append('image', this.file)
        fd.append('description', this.description)

        this.axios
          .post(process.env.VUE_APP_APIURL + '/file', fd, {
            // 因為 axios 預設是送 json，所以要自己設定成 formdata
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response) => {
            this.images.push(
              {
                title: this.description,
                src: process.env.VUE_APP_APIURL + '/file/' + response.data.name,
                _id: response.data._id,
                edit: false,
                model: response.data.name
              }
            )
            this.file = null
            this.description = ''
          })
          .catch((error) => {
            alert(error.response.data.message)
          })
      }
    },
    edit (image) {
      image.edit = true
      image.model = image.title
    },
    update (image) {
      this.axios
        .patch(process.env.VUE_APP_APIURL + '/file/' + image._id, {
          description: image.model
        })
        .then((response) => {
          image.edit = false
          image.title = image.model
        })
        .catch(() => {
          alert('發生錯誤')
        })
    },
    cancel (image) {
      image.edit = false
      image.model = image.title
    },
    del (image, idx) {
      this.axios.delete(process.env.VUE_APP_APIURL + '/file/' + image._id)
        .then(response => {
          this.images.splice(idx, 1)
        })
        .catch(() => {
          alert('發生錯誤')
        })
    }
  },
  mounted () {
    const user = this.$store.getters.user
    this.axios
      .get(process.env.VUE_APP_APIURL + '/manage/' + user)
      .then((response) => {
        this.images = response.data.result.map((d) => {
          return {
            title: d.description,
            src: process.env.VUE_APP_APIURL + '/file/' + d.name,
            _id: d._id,
            edit: false,
            model: d.name
          }
        })
      })
      .catch(() => {
        alert('發生錯誤')
      })
  }
}
</script>

<style scoped>

    body {
      font-family:'微軟正黑體', 'Microsoft JhengHei';
      overflow-x: hidden;
    }

    .text {
      font-size: 2rem;
      font-family:'微軟正黑體', 'Microsoft JhengHei';
    }

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

    .manager__menu__item {
      display: flex;
      font-weight: 800;
      font-size: 8vw;
      line-height:0.8;
      cursor: crosshair;
      -webkit-text-stroke: 2px var(--color-menu-text);
      -webkit-text-fill-color: transparent;
      color: transparent;
    }

    .manager__menu__item:hover {
      -webkit-text-fill-color: var(--color-menu-text);
    }

    .card {
      height: auto;
    }

    @media (max-width: 992px) {

    .manager__menu__item {
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
