import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const Schema = mongoose.Schema
mongoose.connect(process.env.DBURL)

const userSchema = new Schema({
  account: {
    type: String,
    required: [true, '請輸入帳號']
  },
  password: {
    type: String,
    required: [true, '請輸入密碼']
  }
}, {
  versionKey: false
})

const fileSchema = new Schema({
  name: {
    type: String,
    required: [true, '沒有檔案名稱']
  },
  description: {
    type: String
  },
  user: {
    type: String
  }
}, {
  versionKey: false
})

const users = mongoose.model(process.env.COLLECTION_USER, userSchema)
const files = mongoose.model(process.env.COLLECTION_FILE, fileSchema)
const connection = mongoose.connection

export default {
  users,
  files,
  connection
}
