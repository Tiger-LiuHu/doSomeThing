<template>
    <div id="app" :class="transitionGroup.appClass">
        <transition :name="transitionGroup.trransitionName" :mode="transitionGroup.mode" v-on:after-enter="afterEnter">
            <router-view :class="transitionGroup.routerClass"></router-view>
        </transition>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'myName',
  computed: {
    ...mapGetters([
      'transitionGroup'
    ])
  },
  methods: {
    afterEnter: function () {
      this.$store.dispatch('changeTransition', 'none')
    }
  }
}
</script>
<style lang="scss">
@import "./assets/css/common.scss";
/* CSS */
#app{
    width: 100%;
    height: 100%
}
.InputEnterContent{
        .ivu-input{
             border: none !important;
            resize: none !important;
            text-align: left !important;
            overflow-x: hidden !important;
            overflow-y: hidden !important;
        }
         .ivu-input:focus{
              border: none !important;
            resize: none !important;
            text-align: left !important;
            overflow-x: hidden !important;
            overflow-y: hidden !important;
            box-shadow:0 0 0 0;
         }
}
::-webkit-scrollbar {
    width: 1px;
    height: 1px;
}
::-webkit-scrollbar-track {
    background-color: #bee1eb;
}
::-webkit-scrollbar-thumb {
    background-color: #00aff0;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #9c3;
}
::-webkit-scrollbar-thumb:active {
    background-color: #00aff0;
}
</style>