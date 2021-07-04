<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane name="first">
      <div slot="label">
        <img id="tab1" :src="tabIconUrl1" />
        <span>联网拨号</span>
      </div>
      <el-row class="tabHeader">
        <el-col>
          <content-Part1></content-Part1>
        </el-col>
      </el-row>
      <el-row class="bottom">
        <bottom-part :portNum.sync="portNum"></bottom-part>
      </el-row>
    </el-tab-pane>
    <el-tab-pane name="second">
      <div slot="label">
        <img id="tab2" :src="tabIconUrl2" />
        <span>关于我们</span>
      </div>
      <content-Part2></content-Part2>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import BottomPart from "./BottomPart.vue";
import ContentPart1 from "./ContentPart1.vue";
import ContentPart2 from "./ContentPart2.vue";

export default {
  components: {
    BottomPart,
    ContentPart1,
    ContentPart2,
  },
  data() {
    return {
      activeName: "first",
      portNum: 0,
      tabIconUrl1: require("@/assets/u69.png"),
      tabIconUrl2: require("@/assets/u81.png"),
    };
  },
  methods: {
    handleClick(tab, event) {
      if (tab.name === "first") {
        this.tabIconUrl1 = require("@/assets/u69.png");
        this.tabIconUrl2 = require("@/assets/u81.png");
      } else {
        this.tabIconUrl1 = require("@/assets/u70.png");
        this.tabIconUrl2 = require("@/assets/u80.png");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tabHeader {
  width: 100%;
  padding-bottom: 1px;
}

.bottom {
  width: 100%;
  bottom: 0;
  height: 62px;
  position: fixed;
}

.el-tabs__nav {
  float: right;
}

.el-tabs__header img {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  margin: 0px 5px;
}
</style>
