<template>
  <div class="box">
    <div style="width:80%;;text-align:left;padding-left:10px;">
      <span class="title">设备配置</span>
      <span style="margin-left:25px;">端口号:</span>
      <el-input-number
        v-model="myPortNum"
        size="mini"
        controls-position="right"
        @input="(e) => (myPortNum = isnumber(e))"
        @change="handleChange"
        :min="0"
        :max="65536"
        :maxlength="5"
        style="margin:0 15px;width:80px;"
      ></el-input-number>
      <el-button type="success" style="padding:8px 15px;width:110px;" @click="tryConnect">测试连接</el-button>
    </div>
    <div style="width:20%;text-align:right;height:100%;">
      <el-button type="primary" style="height:100%" @click="resetDrive">
        <img :src="btnImgSrc" style="height:25px;"/>
        <br />
        <span>重启设备</span>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    portNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      myPortNum: this.portNum,
      btnImgSrc: require("@/assets/end2.png")
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("update:portNum", value);
    },
    isnumber(val) {
      val = val.toString().replace(/[^0-9]/gi, "");
      return val === "" ? 0 : parseFloat(val);
    },
    tryConnect() {

    },
    resetDrive() {
      
    }
  },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #D7D7D7;
  width: 100%;
  height: 100%;
}

.title {
  font-weight: 900;
}

.box >>> .el-button.el-button--success {
  background-color: #67B802;
}

.box >>> .el-button.el-button--success:hover {
  background-color: rgba(103, 184, 2, 0.8);
}

.box >>> .el-button.el-button--primary {
   background-color: #AAAAAA;
   border: none;
}

.box >>> .el-button.el-button--primary:hover {
   background-color: #FE96A3;
   border: none;
}

.box >>> .el-input-number.is-controls-right .el-input__inner {
  padding: 0px;
  text-align: left;
}
</style>