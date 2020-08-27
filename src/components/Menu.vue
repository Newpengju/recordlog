<template>
    <div class="header">
        <div class="img menu">
            <img src="https://www.cnblogs.com/images/logo.svg?v=R9M0WmLAIPVydmdzE2keuvnjl-bPR7_35oHqtiBzGsM" />
        </div> 
        <div class="title menu">
            <ul class="list">
                <li v-for='list in menulist' :key='list'><a href="#">{{list}}</a></li>
                <li><a href="#">{{find}}</a>
                    <ul class="f">
                        <li v-for='flist in findlist' :key='flist'><a>{{flist}}</a></li>
                    </ul>
                </li>
            </ul>
            
        </div>
        <div class="me menu">
            <ul>
                <li>
                    <input type="text" class="txt" placeholder="   代码改变世界" />
                    <input type="button" value="搜索" class="btn" />
                </li>
                <li></li>
                <li><a href="#">注册</a></li>
                <li><a href="#">登录</a></li>
                <!-- <li><a href="#"><img src="../Img/xiaoxi.png" /></a></li>
                <li><a href="#"><img src="../Img/tixing.png" /></a></li>
                <li><a href="#"><img src="../Img/user.png" /></a></li> -->
            </ul>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    data(){
        return{
            menulist:['首页','新闻','博问','专区','闪存','班级','怀旧'],
            find:'发现',
            findlist:['园子','小组','收藏','招聘','找找看'] 
        }
    },
    methods:{
        // mouseOver:()=>{
        //     let f= document.getElementById('f')
        //     f.style.display='block'
        // },
        // mouseout:()=>{
        //     let f= document.getElementById('f')
        //     f.style.display='none'
        // }
    }
}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.header{
    margin-top: -53px;
    width: 100%;
    height: 55px;
}
.header hr{
    margin-top: 20px;
    width: 100%;
    height: 2px;
    background-color: rgb(87, 58, 255);
}
.img{
    width: 200px;
    height: 50px;
}
.header img{
    width: 200px;
    height: 100%;
    margin-left: 0px;
}
.menu{
    float: left;
}
.title{
    width: 700px;
    height: 55px;
    /* background-color: aquamarine; */
}
.title .list{
    display: flex;
    
}

.title .list li
{
    flex: 0.1;
    line-height: 55px;
    list-style: none;
}
.list li:last-child:hover .f li{
    visibility:visible;
    transition: all 0.3s linear;
    opacity: 1;
    height: 40px;
    line-height: 40px;
}

.title ul li a{
    color: rgb(131, 130, 130);
    text-decoration: none;
    font-size: 18px;
}
.title ul li a:hover{
    text-decoration: underline;
}
.me{
    width: 363px;
    height: 55px;
    /* background-color: blueviolet; */
}

.f{
    width: 60px;
    position: absolute;
    left: 710px;
    top: 40px;
    /* display: none; */
    visibility:hidden;
    margin-top: 5px;
    background-color: navy;
}
.f li{
    height: 30px;
    list-style: none;
    /* margin-top: -25px; */
    background-color: rgb(221, 221, 221);
    transition: all 0.3s linear;
    opacity: 0.1;
    height: 0px;
}
.me ul{
    display: flex;
}
.me ul li{
    flex: 0.3;
    line-height: 55px;
    list-style: none;
}
.me ul li a{
    text-decoration: none;
    color: rgb(131, 130, 130);
}
.me ul li a:hover{
    text-decoration: underline;
}
.me ul li img{
    width: 23px;
    height: 25px;
    margin-top: 11px;
}

.btn{
    height: 40px;
    border: none;
    background-color: rgba(240, 240, 240, 0.884);
    position: absolute;
    right: 180px;
    top: 15px;
    outline: none;
}
.txt{
    border: none;
    width: 200px;
    height: 40px;
    line-height: 55px;
    background-color: rgba(240, 240, 240, 0.884);
    outline: none;
    border-radius: 10px;
}
</style>
