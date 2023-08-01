<template>
    <div id="dashboardView">
      <div class="panel full"></div>
      <div class="panel col-2"></div>
      <div class="panel col-2"></div>
      <div class="panel col-2"></div>
      <div class="panel col-2"></div>
      <div class="panel col-4"></div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        
      }
    },
    created() {
      
    },
    methods: {
      
    }
  }
  </script>
  
  <style lang="less">
  #dashboardView {
    display: grid;
    padding: 20px;
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr);
  
    .panel {
      background-color: @panel;
      border-radius: 6px;
      padding: 16px;
      box-shadow: @panel-shadow;
      border: 1px solid @panel-border;
      height: 120px;
  
      &.col-2 { grid-column: auto / span 2; }
      &.col-4 { grid-column: auto / span 4; }
      &.full {
        grid-column: auto / span 6;
        height: 50px;
      }
    }
  }
  @media screen and (max-width: 1919px) {
    #dashboardView {
      .panel {
        &.col-2 { grid-column: auto / span 3; }
        &.col-4 { grid-column: auto / span 6; }
      }
    }
  }
  </style>