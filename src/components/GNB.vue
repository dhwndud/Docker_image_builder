<template>
    <header class="somma-gnb">
      <a class="flex" href="/">
        <img src="/img/somma_white_logo.png" class="logo">
      </a>
      <!-- 메뉴 -->
      <div v-for="(menu, i) in menuList"
        :class="['menu', {'current': isCurrentMenu(menu)}]"
        @mouseover="menuIndex=i"
        @mouseleave.self="menuIndex=-1"
        @click="onClickMenu(menu)">
        {{ $t(menu.menu_key) }}
        <ul v-show="menuIndex == i" class="pop-menu child-menu">
          <li v-for="childMenu in menu.children" @click="onClickMenu(childMenu)">
            {{ $t(childMenu.menu_key) }}
          </li>
        </ul>
      </div>
      <!-- 클립보드 복사 -->
      <input id="clipboard" type="text"/>
      <!-- 계정 관련 -->
      <div class="account"
        @mouseover="activeAccount=true"
        @mouseleave.self="activeAccount=false">
        <n-icon size="30">
          <person-circle/>
        </n-icon>
        <ul v-show="activeAccount" class="pop-menu" @mouseleave.self="activeAccount=false">
          <li>
            <n-icon size="15">
              <lock-closed-sharp/>
            </n-icon>
            {{ $t('account.change_password') }}
          </li>
          <li @click="doSignout">
            <n-icon size="15">
              <exit-outline/>
            </n-icon>
            {{ $t('account.signout') }}
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <script>
  import _ from 'lodash'
  import { GNB_MENU_LIST } from '@/config/menu'
  import { PersonCircle, LockClosedSharp, ExitOutline } from '@vicons/ionicons5'
  
  export default {
    components: {
      PersonCircle,
      LockClosedSharp,
      ExitOutline
    },
    data() {
      return {
        menuList: GNB_MENU_LIST,
        menuIndex: -1,
        activeAccount: false
      }
    },
    created() {
    },
    methods: {
      isCurrentMenu(menu) {
        let routes = []
        
        if (_.hasIn(menu, 'path')) routes.push(menu.path)
        
        if (_.hasIn(menu, 'children')) routes = _.concat(routes, _.map(menu.children, 'path'))
        
        return _.indexOf(routes, this.$route.path) > -1
      },
      onClickMenu(menu) {
        if (_.hasIn(menu, 'name')) this.navigate(menu.name)
      },
      doSignout() {
        this.SHOW_ALERT({
          type: 'confirm',
          message: this.$t('account.confirm_signout'),
          cb: () => {
            this.navigate('signout')
          }
        })
      }
    }
  }
  </script>
  
  <style scoped lang="less">
  .somma-gnb {
    height: 60px;
    display: flex;
    align-items: center;
    background-color: @panel;
  
    .logo {
      width: 120px;
      margin-left: 10px;
      margin-right: 40px;
    }
  
    .menu {
      min-width: 90px;
      height: 100%;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
  
      &:hover { 
        background: @primary;
        color: @white;
        transition-property: color, background-color;
        transition-duration: .6s;
        transition-timing-function: ease-out;
      }
      &.current {
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          left: 0;
          bottom: 0;
          background-color: @primary;
        }
      }
  
      ul.child-menu {
        top: 60px;
        min-width: 110px;
      }
    }
  
    #clipboard {
      opacity: 0;
      width: 1px;
      height: 1px;
    }
  
    .account {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: auto;
      padding: 0 20px;
      position: relative;
      cursor: pointer;
  
      &:hover {
        background: @primary;
        transition-property: color, background-color;
        transition-duration: .6s;
        transition-timing-function: ease-out;
      }
  
      ul {
        top: 60px;
        width: 200px;
        right: 0;
      }
    }
  }
  </style>