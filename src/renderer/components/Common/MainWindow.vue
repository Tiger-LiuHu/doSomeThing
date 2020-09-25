<template>
    <Frame>
      <mainSider slot="sider"></mainSider>
    </Frame>
</template>
<script>
import Frame from '@/components/Common/MainFrame.vue'
import mainSider from '@/components/Common/MainSider.vue'
export default {
  name: 'MainWindow',
  components: { Frame,mainSider }
}
</script>
<style>

.iconfont{
  cursor: pointer;
}
</style>