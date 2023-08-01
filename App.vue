<template>
    <n-config-provider
      :theme="theme"
      :theme-overrides="theme === null ? lightTheme : darkTheme">
      <RouterView :key="$route.fullPath" />
      <Loading v-if="LOADING"/>
      <Alert :active="ALERT.SHOW" @close="CLOSE_ALERT"/>
    </n-config-provider>
  </template>
  
  <script>
  import { NConfigProvider, darkTheme } from 'naive-ui'
  import { lightThemeOverrides, darkThemeOverrides } from '@/helper/define/theme'
  
  export default {
    components: {
      NConfigProvider
    },
    data() {
      return {
        theme: darkTheme,
        lightTheme: lightThemeOverrides,
        darkTheme: darkThemeOverrides
      }
    },
  }
  </script>
  
  <style lang="less">
  #app {
    height: 100%;
    .n-config-provider {
      height: inherit;
    }
  }
  </style>
  