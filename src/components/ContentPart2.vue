<template>
  <div class="box">
    <p>Zhuo Teng Application</p>
    <p>ZT303</p>
    <p>2.0.1.1</p>
    <p>Copyright © 2020 Zhuo Teng<br />保留所有权</p>
    <div style="height: 100px; border: solid 1px; margin-bottom: 10px">
      <span>ZT303 APN拨号专用工具</span>
    </div>
    <span style="color: red">请在下方输入授权信息:</span>
    <el-input v-model="licenseKey" type="textarea" rows="3"></el-input>
    <el-button icon="el-icon-key" style="width: 100%" @click="regist">注册授权码</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      licenseKey: null,
    };
  },
  methods: {
    regist() {
      
    }
  }
};
</script>

<style scoped>
.box {
  color: darkgray;
  text-align: left;
  width: 90%;
  margin: 0 5%;
}

.box p {
  font-size: 15px;
  margin: 5px 0px;
}

.box >>> .el-button.el-button--default {
  background-color: #f2f2f2;
  border: none;
}

.box >>> .el-button.el-button--default:hover {
  background-color: #78e26ab4;
  border:#02A7F0 1px solid;
}
</style>