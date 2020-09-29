<template>
 <div class="messages">

     <div class="RemoveMessage"><Icon  type="ios-close" /></div>
     <div class="messagesAvd">
          <Avatar icon="ios-person" size="large" />
     </div>
     <div class="UserNames">
         <div class="NameDetail">撒的撒发射点发射点发射点发的发射点发生</div>
         <div class="MessageDetal">撒的撒发射点发射点发射点发的发射点发生</div>
     </div>
      <div class="TimeAndtag">
         <div class="Times">09-27</div>
         <div class="Tags">  <Badge :count="100"  overflow-count="99"></Badge></div>
     </div>
 </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss">
.messages{
    height: 50px;
    display: flex;
    background-color: white;
   justify-items: center;
   align-items: center;
   cursor: pointer;
   border-bottom: 1px solid #f0eeee;
}
.RemoveMessage{
    width: 20px;
    text-align: center;
     i{
        display: none;
    }
}
.messagesAvd{
    width: 50px;
}
.messages:hover{
    background-color: #e6e6e6;
   .RemoveMessage i{
        display: block;
    }
}
.UserNames{
    width: calc(100% - 120px);
    display: flex;
    flex-direction: column;
}
.NameDetail{
    height: 50%;
     white-space: nowrap; 
    width: 100%; 
    overflow: hidden;
    text-overflow:ellipsis;
}
.MessageDetal{
    height: 50%;
    white-space: nowrap; 
    width: 100%; 
    overflow: hidden;
    text-overflow:ellipsis;
    height: 50%;
}
.TimeAndtag{
    text-align: right;
    width: 50px;
    padding-right: 5px;
    display: flex;
    flex-direction: column;
}
</style>