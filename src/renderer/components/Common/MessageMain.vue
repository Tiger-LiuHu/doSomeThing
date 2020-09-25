 <template>
  <div class="messageContain">
    <div class="headDiv">
      <mainHead></mainHead>
    </div>
    <main class="bodyDiv">
      <slot>
        <transition
          :name="transitionGroup.trransitionName"
          :mode="transitionGroup.mode"
        >
          <router-view :class="transitionGroup.routerClass"></router-view>
        </transition>
      </slot>
    </main>
    <footer class="footDiv">
        <mainFooter></mainFooter>
    </footer>
  </div>
</template>
 <script>
 import mainHead from '@/components/Common/MainHeader.vue'
import mainFooter from '@/components/Common/MainFooter.vue'
import { mapGetters } from "vuex";
export default {
  name: "mainFrame",
  components:{mainHead,mainFooter},
  computed: {
    ...mapGetters([
      "backGroundParent",
      "backGroundChild",
      "fontColor",
      "transitionGroup",
    ]),
  },
};
</script>
 
 <style lang="scss" scoped>
    .messageContain {
        width: 100%;
        height: 100%;       
    }
    
.bodyDiv {
  width:100%;
  height: calc(100% - 50px);
  overflow-y: auto;
  word-break: break-all;
  flex-grow: 1;
  position: relative;
  overflow-x: hidden;
}
.headDiv {
  flex-shrink: 0;
}
.footDiv {
  flex-shrink: 0;
  height:20px;
}
.backgroundclass{
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
/* .backgroundclass::after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    background: inherit;
    filter: attr(data-attr);
    overflow: hidden;
    box-sizing: border-box;
} */
.backBodyClass{
  width:100%;
  height:100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>