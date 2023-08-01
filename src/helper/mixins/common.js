import _ from 'lodash'
import { mapState, mapActions } from 'pinia'
import CommonStore from '@/stores/common'

export default {
  mounted() {
    window.addEventListener('resize', this.resize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resize)
  },
  computed: {
    ...mapState(CommonStore, [
      'LOADING',
      'ALERT'
    ]),
  },
  methods: {
    ...mapActions(CommonStore, [
      'SHOW_LOADING',
      'HIDE_LOADING',
      'SHOW_ALERT',
      'CLOSE_ALERT'
    ]),
    navigate(name, query) {  // 내부 메뉴 이동
      let nav = { name }
      if (query) nav.query = query

      this.$router.push(nav)
    },
    navigateNewTab(name, params) {  // 새 탭으로 띄우기
      const routeData = this.$router.resolve({name, params: params})
      window.open(routeData.href, '_blank')
    },
    copyClipboard(element='clipboard', data) {  // 클립보드 복사
      const target = document.getElementById(element)
      target.value = data
      this.$nextTick(() => {
        target.select()
        document.execCommand('copy')
      })
    }
  }
}