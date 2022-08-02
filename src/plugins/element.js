import { Icon,Button } from 'element-ui'
import Vue from 'vue'
const element = {
  install: function (Vue) {

    Vue.use(Icon),
    Vue.use(Button)
  }
}
export default element