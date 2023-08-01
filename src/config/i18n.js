import { createI18n } from 'vue-i18n'
import enProperties from '@/config/lang/en'
import koProperties from '@/config/lang/ko'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'ko',
    messages: {
      en: Object.assign(enProperties),
      ko: Object.assign(koProperties)
    }
  })
  
  function changeLocale(country) {
    i18n.global.locale = country
    document.querySelector('html').setAttribute('lang', country)
  }
  
  function getLocale() {
    return i18n.global.locale
  }
  
  function getSupportLanguages() {
    return ['ko','en']
  }
  
  export { i18n, changeLocale, getLocale, getSupportLanguages }