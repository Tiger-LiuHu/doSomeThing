<template>
  <div class="MesagepageFrameContaint">
      <MesagepageFrame>
             <PersonandMessage slot="PersonandMessage"></PersonandMessage>
      </MesagepageFrame>
  </div>
</template>
<script>
import MesagepageFrame from '@/components/Mesagepage/MesagepageFrame.vue'
import PersonandMessage from '@/components/Mesagepage/PersonandMessage.vue'

export default {
    components:{MesagepageFrame,PersonandMessage}
}
</script>

<style>
.MesagepageFrameContaint{
    width: 100%;
    height: 100%;
}
</style>