import _ from 'lodash'
import { defineStore } from 'pinia'

const ALERT_OPTION = {
  SHOW: false,
  TYPE: '', // info, confirm, warning, error
  MESSAGE: '',
  CB: null
}

export default defineStore('common', {
  state: () => ({
    LOADING: false,
    ALERT: ALERT_OPTION
  }),
  getters: {},
  actions: {
    SHOW_ALERT (param) {
      const { type, message, cb } = param
      this.ALERT = {
        SHOW: true,
        TYPE: type,
        MESSAGE: message,
        CB: cb
      }
    },
    CLOSE_ALERT () {
      this.ALERT = _.cloneDeep(ALERT_OPTION)
    },
    SHOW_LOADING () {
      this.LOADING = true
    },
    HIDE_LOADING () {
      this.LOADING = false
    }
  }
})