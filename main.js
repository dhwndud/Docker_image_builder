import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import router from '@/config/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { i18n } from '@/config/i18n'
import Loading from '@/components/modal/Loading.vue'
import Alert from '@/components/modal/Alert.vue'
import CommonMixin from '@/helper/mixins/common'

import '@/assets/css/font.css'
import '@/assets/css/base.less'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
.component('Loading', Loading)
.component('Alert', Alert)
.mixin(CommonMixin)
.use(naive)
.use(i18n)
.use(pinia)
.use(router)

app.mount('#app')