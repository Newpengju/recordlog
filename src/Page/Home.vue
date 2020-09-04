<template>
    <div class="body">
        <div class="menu"><Menu /></div>
        
        <div class="header">
            <div class="left f"></div>
            <div  class="center f"><ListData /></div>
            <div class="right f"></div>
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
.menu{
    width: 100%;
    height: 65px;
}
.header{
    width: 100%;
    
}

.left{
    width: 230px;
    height: 500px;
    background-color: rgb(248, 3, 3);
}

.center{
    margin-left: 230px;
    width: 700px;

}
.right{
    width: 302px;
    height: 500px;
    background-color: rgb(255, 5, 5);
}
.f{
    float: left;
    margin-left: 5px;
}

</style>
