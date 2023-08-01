<template>
    <GNB />
    <RouterView :key="$route.fullPath" />
  </template>
  
  <script>
  import GNB from '@/components/GNB.vue'
import NewComponent from './NewComponent.vue'
  
  export default {
    components: {
    GNB,
    NewComponent
}
  }
  </script>
  
  <style lang="less">
  .view {
    width: calc(100% - 40px);
    padding: 20px;
  }
  </style>