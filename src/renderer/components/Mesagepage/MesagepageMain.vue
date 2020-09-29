<template>
  <div class="MesagepageFrameContaint">
      <MesagepageFrame >
             <PersonandMessage slot="PersonandMessage"></PersonandMessage>
             <MessageSend slot="SendMessage"></MessageSend>
      </MesagepageFrame >
  </div>
</template>
<script>
import MesagepageFrame from '@/components/Mesagepage/MesagepageFrame.vue'
import PersonandMessage from '@/components/Mesagepage/PersonandMessage.vue'
import MessageSend from '@/components/Mesagepage/MessageSend.vue'



export default {
    components:{MesagepageFrame ,PersonandMessage,MessageSend}
}
</script>

<style>
.MesagepageFrameContaint{
    width: 100%;
    height: 100%;
}
</style>