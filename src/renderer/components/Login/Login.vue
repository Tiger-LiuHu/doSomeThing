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

<template>
    <div class="loginContain">
        <MainHeader></MainHeader>  
         <div style="width:100%;height:100%;overflow-y: auto; word-break: break-all;border-bottom-right-radius: 3px;border-bottom-left-radius: 3px;">
        <div style="display: flex;flex-direction: column;height: 100%;">
            <div style="display: flex;height: 60px;align-items: center;justify-content: space-around;margin-top: 40px;">
                <div style="display: flex;flex-direction: column;cursor: pointer;">
                    <i class="iconfont icon-guanjiaowangtubiao01" style="font-size: 30px"></i>
                    <span style="text-align: center;font-size: 18px;font-weight: 900;margin-top: 10px;">同城交友登录</span>
                </div>
            </div>
            <div style="display: flex;height:200px;align-items: center;justify-content: space-around;flex-direction: column;padding: 10px">
              <Input  placeholder="请输入用户名"/>
              <Input  placeholder="请输入密码！"/>
              <div style="width: 100%;display: flex">
                <Button style="width: 50%" @click="GoLogin">登录</Button>
                <Button style="width: 50%" @click="Register">注册</Button>
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
import MainHeader from '@/components/Common/MainHeader.vue'
export default {
    components:{
        MainHeader
    },
    methods:{
        GoLogin(){
           let fatherBounds = this.$Win.win.getBounds()
      // 判断右边是否过界
    //   let leftWidth = window.screen.width - fatherBounds.width - fatherBounds.x -300
    //   let x = leftWidth >= 0 ? fatherBounds.width + fatherBounds.x : fatherBounds.x - 1000
      let x=(fatherBounds.x+fatherBounds.width/2-680)<0?0:(fatherBounds.x+fatherBounds.width/2-680);
      let y = (fatherBounds.y+fatherBounds.height/2-480)<0?0:(fatherBounds.y+fatherBounds.height/2-480);

      let win = this.$Win.createWin({
        width: 1360,
        height: 960,
        x: x,
        y: y,
        windowConfig: {
          router: '/mainWindow/MessageMain',
          vibrancy: false,
          name: 'cloud',
          animation: 'fromBottom'
        }
      })
      win.show()
      remote.getCurrentWindow().close();


        },
        Register(){
        this.$store.dispatch('changeTransition', 'slipRight')
            this.$router.push('/Register')
        }
    }

}

</script>