<template>
  <div class="MesagepageFrameContaint">
      <div class="PersonandMessage">
          <slot name="PersonandMessage"></slot>
      </div>
      <div class="SendMessage">
          <slot name="SendMessage"></slot>
      </div>
  </div>
</template>
<script>
export default {

}
</script>

<style>
.MesagepageFrameContaint{
    width: 100%;
    height: 100%;
    display: flex;
}
.PersonandMessage{
    background-color: bisque;
    width: 20%;
    min-width:250px;
    border-right: 1px solid #e3e3e3;
}
.SendMessage{
    width:  100%;
}
</style>