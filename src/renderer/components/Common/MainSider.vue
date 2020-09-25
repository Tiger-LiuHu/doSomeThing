<template>
  <div class="sider">
      <div  class="meuns">
          <div class="meusItems avatar"> <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /></div>
           <div class="meusItems meusItem" :class="ActiveMenus=='MessageMain'?'meusItemactive':''" @click="GOPage('MessageMain')">
              <p><svg class="ownicon" aria-hidden="true">
                <use xlink:href="#icon-message" ></use>
                </svg></p>
              <p>消息</p>
          </div>
          <div class="meusItems meusItem"   :class="ActiveMenus=='PendingMain'?'meusItemactive':''"  @click="GOPage('PendingMain')">
              <p><svg class="ownicon" aria-hidden="true">
                <use xlink:href="#icon-daiban" ></use>
                </svg></p>
              <p>待办</p>
          </div>
      </div>
  </div>
</template>
<script>
import { remote } from 'electron'
export default {
  name: 'mainHead',
  data(){
      return {
            ActiveMenus:"MessageMain"
      }
  },
  methods: {
    gotoHome () {
    //   this.$store.dispatch('changeTransition', 'flip')
      this.$router.push('/login')
    },
    GOPage(val){
        if(this.ActiveMenus!=val){
            this.ActiveMenus=val;
          this.$router.push('/'+val)
        }
    },
  },
//   components: { userHeadInfo }
}
</script>

<style scoped lang="scss">
.sider{
    width: 100%;
    height: 100%;
    -webkit-app-region: no-drag;
}
.avatar{
    margin: 30px 0 15px 0;
}
  .meuns {
    width: 100%;
    display: flex;
    padding: 2px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    -webkit-app-region: no-drag;
    .meusItems{
        flex: 1;
        color: rgb(194, 191, 191);
    }
}
.meusItem{
    width: 100%;
    text-align: center;
    height: 60px;
    margin: 7px 0px;
    cursor: pointer;
}
.meusItemactive{
  color: white;
        .ownicon{
             fill: white;
        }
}
.meusItem:hover{
        color: white;
        .ownicon{
             fill: white;
        }
}

.rightIcon {
    float: right;
    font-size: 18px;
    padding: 5px 0px 5px 4px;
    cursor: pointer;
    -webkit-app-region: no-drag;
}

.rightIcon:hover {
    color: #ff001a;
}

.rightIconLast {
    padding-right: 5px;
}

.rightBox{
	width: 25%;
	display: flex;
	justify-content: flex-end;
}
</style>
