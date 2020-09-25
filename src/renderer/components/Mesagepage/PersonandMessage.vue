<template>
  <div>
      <div class="searchandAdd">
           <div class="searchclass"> <Input prefix="ios-search" placeholder="搜索" style="100%" /></div>
           <div class="Addclass" ><Icon type="ios-add" size="25"  /></div>
      </div> 
  </div>
</template>

<script>
export default {
    data(){
        return {
            color:""
        }
    }
}
</script>
<style lang="scss">
.searchclass{
     input{
    border-radius: 32px;
    }
}
</style>
<style scoped lang="scss">
.searchandAdd{
        display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
}
.searchclass{
    text-align: center;
    width: 100%;
    padding:10px;
     input{
    border-radius: 32px;
    }
}
.Addclass{
       border: 1px solid #f1f1f1;
    box-shadow: 0px 0px 2px #bfbaba;
    border-radius: 50%;
    width: 36px;
    margin-right: 15px;
    text-align: center;
}
.Addclass:hover{
    i{
        color: white;
    }
}
</style>