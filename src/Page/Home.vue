<template>
    <div class="body">
        <div class="menu"><Menu /></div>
        
        <div class="header">
            <div class="left"></div>
            <div  class="center"><ListData /></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
import Menu from '../components/Menu'
import ListData from '../components/ListData'

export default {
    components:{
        Menu,
        ListData
    },
    data(){
        return{
           
        }
    }
}
</script>

<style scoped>
.header{
    width:300px ;
}
.center{
    margin-left: 300px;
}
.menu{
    width: 100%;
    height: 60px;
}
</style>
