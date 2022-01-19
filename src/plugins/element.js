import Vue from 'vue'
import { Message, MessageBox, Notification } from 'element-ui'

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
