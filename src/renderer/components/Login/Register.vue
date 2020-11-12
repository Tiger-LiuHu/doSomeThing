<template>
    <div class="loginContain">
     <MainHeader></MainHeader>  
    <div style="width:100%;height:100%;overflow-y: auto; word-break: break-all;border-bottom-right-radius: 3px;border-bottom-left-radius: 3px;">
        <div style="display: flex;flex-direction: column;height: 100%;">
            <div style="display: flex;height: 60px;align-items: center;justify-content: space-around;margin-top: 40px;">
                <div style="display: flex;flex-direction: column;cursor: pointer;" >
                    <i class="iconfont icon-zhuce" style="font-size: 30px"></i>
                    <span style="text-align: center;font-size: 18px;font-weight: 900;margin-top: 10px;">同城交友注册</span>
                </div>
            </div>
            <div style="display: flex;height:200px;align-items: center;justify-content: space-around;flex-direction: column;padding: 10px">
              <Input v-model="input" placeholder="请输入用户名"/>
              <Input v-model="input" placeholder="请输入密码！"/>
              <Input v-model="input" placeholder="请确认密码！"/>
              <div style="width: 100%;display: flex">
                <Button style="width: 50%"@click="Register">注册</Button>
                <Button style="width: 50%" @click="login">已有帐号去登录</Button>
              </div>
            </div>
            <div>
              <p style="text-align: center;font-size: 12px;">--其他方式登录--</p>
               <div style="display: flex;justify-content: center;margin-top: 10px;">
                  <span class="otherlogin" > <svg class="otherloginicon" aria-hidden="true">
                <use xlink:href="#icon-qq" ></use>
                </svg></span>
                <span class="otherlogin" > <svg class="otherloginicon" aria-hidden="true">
                <use xlink:href="#icon-custom-wechat" ></use>
                </svg></span>
                <!-- <i class="iconfont icon-qq " style="font-size: 20px;margin: 0 5px;"></i>
                <i class="iconfont icon-custom-wechat " style="font-size: 20px;margin: 0 5px;"></i> -->

              </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import { remote } from 'electron';
import MainHeader from '@/components/Common/MainHeader.vue';
export default {
  name: 'Login',
  components: { MainHeader },

  methods: {
    closeWindow () {
      remote.app.quit()
    },
    fullWindow () {
      let win = remote.getCurrentWindow()
      let html = document.getElementsByTagName('html')[0]
      if (!html.style.padding || html.style.padding === '5px') {
        html.style.padding = '0px'
        win.maximize()
        win.setMovable(false)
      } else {
        html.style.padding = '5px'
        win.unmaximize()
        win.setMovable(true)
      }
    },
    hideWindow () {
      let win = remote.getCurrentWindow()
      if (win.isMinimized()) {
        win.restore()
      } else {
        win.minimize()
      }
    },
    gotoHome () {
      this.$store.dispatch('changeTransition', 'flip')
      this.$router.push('/')
    },
    Register(){
        this.$store.dispatch('changeTransition', 'slipLeft')
        this.$router.push('/login')   
    },
    login () {
      this.$store.dispatch('changeTransition', 'slipLeft')
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="scss" scoped>
.loginContain{
    height: 100%;
    width: 100%;
}
.otherloginicon{
    width: 2rem;
  height: 2rem;
  margin: 10px;
}

</style>