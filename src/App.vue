<template>
  <div id="app">
    <div class="titleBar">
      <div class="titleLeft">
        <img :src="imageUrl" style="width: 175px; margin-left: 20px" />
      </div>
      <div class="titleRight">
        <div style="-webkit-app-region: none">
          <i class="el-icon-close" @click="quitClick"></i>
        </div>
      </div>
    </div>
    <div class="contentContainer">
      <MainPage />
    </div>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "app",
  components: {
    MainPage,
  },
  data() {
    return {
      imageUrl: require("./assets/u12.png"),
    };
  },
  methods: {
    quitClick() {
      this.$confirm('确定要退出该系统?', '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.api.send("toMain", "quit");
      }).catch(() => {
     
      });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
}

#app {
  width: 720px;
  height: 482px;
  border-radius: 4px;
  text-align: center;
  background-color: #f2f2f2;
  -webkit-app-region: drag;
}

.titleBar {
  background-image: linear-gradient(to right, #000000, #81d3f8);
  height: 75px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.titleLeft {
  height: 75px;
  display: table-cell;
  vertical-align: middle;
}

.titleRight {
  height: 75px;
  float: right;
}

.titleBar .titleRight div:hover i {
  background-color: crimson;
}

.el-icon-close {
  top: 5px;
  right: 3px;
  text-align: right;
  position: absolute;
  font-weight: 800;
  -webkit-app-region: none;
}

.contentContainer {
  position: absolute;
  top: 34px;
  left: 0px;
  width: 100%;
  -webkit-app-region: none;
  height: 448px;
}

.contentContainer .el-tabs__header {
  margin: 0 0 20px;
}

.contentContainer .el-tabs__nav {
  -webkit-app-region: none;
}

.contentContainer .el-tabs__nav-wrap {
  -webkit-app-region: drag;
}

.contentContainer .el-tabs__item {
  quotes: 20;
  color: rgba(242, 242, 242, 0.8);
}

.contentContainer .el-tabs__item.is-active {
  background-color: rgba(242, 242, 242, 0.8);
  color: #000000;
}

.contentContainer .el-tabs--card>.el-tabs__header .el-tabs__item {
  border-left: #D7D7D7 1px solid;
}

.el-tabs__item:focus.is-active.is-focus:not(:active){
  box-shadow: none;
}
</style>