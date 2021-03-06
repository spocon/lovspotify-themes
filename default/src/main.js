import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faClock,
    faGreaterThan,
    faLessThan,
    faMinusCircle,
    faMusic,
    faPlayCircle,
    faPauseCircle,
    faPlusCircle,
    faUserTie
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faFontAwesome} from '@fortawesome/free-brands-svg-icons'
import Axios from "axios";


library.add(faFontAwesome, faMusic, faUserTie, faClock, faGreaterThan, faLessThan, faMinusCircle, faPlusCircle, faPlayCircle, faPauseCircle)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue, IconsPlugin)
Vue.use(Axios)

new Vue({
    render: h => h(App)
}).$mount('#app')
