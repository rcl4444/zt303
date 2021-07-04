<template>
  <el-tabs class="box" v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane name="first">
      <div slot="label">
        <span>互联网</span>
      </div>
      <div style="text-align:center;height:245px;">
        <div style="padding-top:30px;">
          <img :src="imgUrl" style="height:45px"/>
        </div>
        <div style="padding:10px 20%;">
          <div style="font-size:14px;border-radius:25px;padding:5px 20px;background-color:#CBE6F3">默认运营商拨号</div>
        </div>
        <div style="padding:40px 0px 20px;">
          <el-button size="small" type="primary" style="width:20%;" @click="normalConnect">联网</el-button>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane name="second">
      <div slot="label">
        <span>公安网</span>
      </div>
      <div style="margin-top:20px;height:225px;font-size:13px;">
        <el-row type="flex" align="middle">
          <el-col :span="4"><div class="colTitle" style="color:red;">*APN名称:</div></el-col>
          <el-col :span="8">
            <div class="colContent">
              <el-input
                size="small"
                v-model="apnName"
                placeholder="请输入APN名称..."
              >
              </el-input>
            </div>
          </el-col>
          <el-col :span="4"><div class="colTitle">APN协议:</div></el-col>
          <el-col :span="8">
            <div class="colContent">
              <el-select
                size="small"
                v-model="apnAgreement"
                placeholder="请选择"
              >
                <el-option key="1" label="IPV4" value="1"></el-option>
                <el-option key="2" label="IPV6" value="2"></el-option>
                <el-option key="3" label="IPV4/IPV6" value="3"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle">
          <el-col :span="4"><div class="colTitle">代理服务器:</div></el-col>
          <el-col :span="8">
            <div class="colContent">
              <el-input
                size="small"
                v-model="proxyServer"
                placeholder="请输入代理服务器..."
              >
              </el-input>
            </div>
          </el-col>
          <el-col :span="4"><div class="colTitle">端口:</div></el-col>
          <el-col :span="8">
            <div class="colContent">
              <el-input
                size="small"
                v-model="proxyPort"
                @input="(e) => (proxyPort = isnumber(e))"
                placeholder="请输入端口..."
              >
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle">
          <el-col :span="4"><div class="colTitle">用户名:</div></el-col>
          <el-col :span="8">
            <div class="colContent">
              <el-input
                size="small"
                v-model="userName"
                placeholder="请输入用户名..."
              >
              </el-input>
            </div>
          </el-col>
          <el-col :span="4"><div class="colTitle">密码:</div></el-col>
          <el-col :span="8">
            <div class="colContent">
              <el-input
                size="small"
                v-model="password"
                placeholder="请输入密码..."
                type="password"
              >
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle">
          <el-col :span="4"><div class="colTitle">身份验证类型:</div></el-col>
          <el-col :span="8">
            <div class="colContent">
              <el-select size="small" v-model="authType" placeholder="请选择">
                <el-option key="1" label="无" value="1"></el-option>
                <el-option key="2" label="PAP" value="2"></el-option>
                <el-option key="3" label="CHAP" value="3"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="4"><div class="colTitle">等待时长(秒):</div></el-col>
          <el-col :span="8">
            <div class="colContent">
              <el-input
                size="small"
                v-model="waitSecond"
                @input="(e) => (waitSecond = isnumber(e))"
                placeholder="默认15秒..."
              >
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div style="display: flex;align-items: center;">
              <div style="margin-left:20px;border:1px solid; border-radius:5px; padding: 10px 20px;background-color: #CBE6F3; float: left; width: 30%;text-align: center;">连接APN专线</div>
              <div style="float: left; width: 30%;text-align: center;"><el-button size="medium" type="primary" @click="apnConfigSave">保存</el-button></div>
              <div style="float: left; width: 30%;text-align: center;"><el-button size="medium" type="primary" @click="apnConnect">联网</el-button></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      apnName: null,
      apnAgreement: "1",
      proxyServer: null,
      proxyPort: null,
      userName: null,
      password: null,
      authType: "1",
      waitSecond: null,
      imgUrl: require("@/assets/u55.png")
    };
  },
  methods: {
    handleClick(tab, event) {

    },
    isnumber(val) {
      val = val.replace(/[^0-9]/gi, "");
      return val;
    },
    normalConnect() {

    },
    apnConfigSave() {

    },
    apnConnect() {
      
    }
  },
};
</script>

<style scoped>
.box {
  margin: 0 5%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom: #D7D7D7 1px solid;
  height: 285px;
}

.box >>> .el-tabs__nav-wrap {
  background-color: #f2f2f2;
}

.box >>> .el-tabs__item {
  padding: 0px;
  width: 200px;
  color: #AAAAAA;
  background-color: #F2F2F2;
  border: #D7D7D7 1px solid;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.box >>> .el-tabs__item.is-active {
  color: #02A7F0;
  background-color: #FFFFFF;
  border: #D7D7D7 1px solid;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: none;
}

.box >>> .el-tabs__nav {
  float: none;
  border: none;
}

.box >>> .el-row {
  margin-bottom: 12px;
}

.box >>> .el-tabs__header {
  margin: 0;
  margin-top: 20px;
  border: none;
}

.box >>> .el-tabs__content {
  border-radius: 12px;
  border: #D7D7D7 1px solid;
  background-color:#FFFFFF;
}

.box >>> .el-button.el-button--primary.el-button--small{
  background-color:#169BD5;
}

.box >>> .el-button.el-button--primary.el-button--small:hover {
  background-color: rgb(22, 155, 213, 0.8);
}

.colTitle {
  width:100%;
  text-align: right;
}

.colContent {
  padding-left: 10px;
  padding-right: 20px;
}

.box >>> .el-row:last-child {
  margin-bottom: 0;
}

.box >>> .el-button--medium {
  padding: 10px 60px;
}

.box >>> input:hover {
  border:#02A7F0 1px solid;
}
</style>