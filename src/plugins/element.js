import Vue from 'vue'
import {
  Message,
  MessageBox,
  Notification,
  Button,
  Dialog,
  Form,
  FormItem,
  Input
} from 'element-ui'

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Button)
