<template>
  <div class="MessageSend">
    <div class="messageContent">
      <div class="MessageHeader">
        <div class="MessageAvd">
          <Avatar icon="ios-person" size="large" />
        </div>
        <div class="PersonName">
          <Tooltip
            content="Bottom Center text"
            style="vertical-align: -webkit-baseline-middle; margin-top: 10px"
            placement="bottom"
          >
            Name
          </Tooltip>
        </div>
      </div>
      <div class="MessageShow"></div>
      <div class="MessageInput">
        <div class="inputTool">
          <div class="inputToolitem"><Icon type="ios-albums-outline" /></div>
          <div class="inputToolitem"><Icon type="ios-albums-outline" /></div>
          <div class="inputToolitem"><Icon type="ios-albums-outline" /></div>
          <div class="inputToolitem"><Icon type="ios-albums-outline" /></div>
          <div class="inputToolitem"><Icon type="ios-albums-outline" /></div>
        </div>
        <div class="InputEnter">
            <div class="InputEnterContent">
                <Input class="input3" style="border: none;resize: none" v-model="Message" type="textarea" :rows="9" placeholder="Enter something..." />
            </div>
            <div class="InputEnterbutton">
             <span style="color:#e3e3e3;margin-right:30px">Enter 发送,Ctrl+Enter 换行</span><Button disabled shape="circle">发送</Button>
            </div>
        </div>
      </div>
    </div>
    <div class="SiderTool">
      <div class="evertool">
        <Icon type="ios-albums-outline" /><span class="evertoolInfo"
          >12qweqweqw31</span
        >
      </div>
      <div class="evertool">
        <Icon type="ios-albums-outline" /><span class="evertoolInfo">1231</span>
      </div>
      <div class="evertool">
        <Icon type="ios-albums-outline" /><span class="evertoolInfo">1231</span>
      </div>
      <div class="evertool">
        <Icon type="ios-albums-outline" /><span class="evertoolInfo">1231</span>
      </div>
      <div class="evertool">
        <Icon type="ios-albums-outline" /><span class="evertoolInfo">1231</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            Message:""
        }
    }
};
</script>

<style lang="scss" scoped>
.MesagepageFrameContaint {
  width: 100%;
  height: 100%;
  
}

.MessageSend {
  height: 100%;
}
.messageContent {
  height: 100%;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
}
.MessageHeader {
  height: 50px;
  border-bottom: 1px solid #e3e3e3;
  border-top: 1px solid #e3e3e3;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.MessageAvd {
  width: 50px;
  margin: 5px 30px;
}
.PersonName {
  font-size: 18px;
}
.MessageShow {
  overflow: scroll;
  height: calc(100% - 280px);
  width: 100%;
}
  
.MessageInput {
  height: 230px;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  width: 100%;
  .inputTool {
    height: 30px;
    display: flex;
    // border-bottom: 1px solid #e3e3e3;
    justify-items: flex-start;
    padding-left: 30px;
    align-items: center;
    .inputToolitem {
      width: 50px;
    }
  }
  .InputEnter {
      position: relative;
    height: 200px;
    .InputEnterContent{
        .ivu-input{
             border: none !important;
            resize: none !important;
            text-align: left !important;
            overflow-x: hidden !important;
            overflow-y: hidden !important;
        }
    }
    .InputEnterbutton{
        position:absolute;
        right: 30px;
        bottom: 30px;
    }
  }
}
.SiderTool {
  padding-top: 30px;
  width: 52px;
  border: 1px solid #e3e3e3;
  background-color: white;
  border-right: none;
  height: 100%;
  float: right;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  .evertoolInfo {
    display: none;
  }
  .evertool {
    height: 50px;
    display: inline-block;
    vertical-align: middle;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
}
.SiderTool:hover {
  width: 120px;
  align-items: flex-start;
  padding: 30px 20px;
  .evertoolInfo {
    padding-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    width: calc(100% - 40px);
    text-overflow: ellipsis;
    display: inline-block;
    cursor: pointer;
  }
}
</style>