<template>
<div class="body">
    <div class="list" v-for="list in page_arrs" :key="list.id">
        <h3><a href="#">{{list.title}}</a></h3>
        <div class="header">
            <div class="left"><img :src='list.img' /></div>
            <div class="right"><p>{{list.text}}</p></div>
        </div>
        <div class="bottom">
            <ul>
                <li><a href="#">{{list.name}}</a></li>
                <li>{{list.time}}</li>
                <li><a href="#"><img src='../Img/点赞.png' />&nbsp;{{giveLikes}}</a></li>
                <li><a href="#"><img src='../Img/评论.png' />&nbsp;{{discuss}}</a></li>
                <li><a href="#"><img src='../Img/看过.png' />&nbsp;{{watch}}</a></li>

                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
    <div class="page">
        <button class="btn" type="submit" @click="primaryPage">首页</button>
        <button class="btn" type="submit" @click="prePage">上页</button>
        <button class="btn" type="submit">{{current_page}}/{{Math.ceil(userlist.length/pagesize)}}</button>
        <button class="btn" type="submit" @click="nextPage">下页</button>
        <button class="btn" type="submit" @click="lastPage">尾页</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            currentPage : 1,//当前页号
            pagesize :10, //每页大小 
            giveLikes:0,        //点赞
            discuss:0,          //评论
            watch:0,            //观看
            userlist:[{
                    id:1,
                    title:'hello world',
                    img:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
                    text:'12346789',
                    name:'Mr.One',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:2,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Two',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:3,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Three',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:4,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Four',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:5,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Five',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:6,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Six',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:7,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Siven',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:8,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Eight',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:9,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Nine',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:10,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Ten',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:11,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Elven',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:12,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Twelve',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:13,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Thirteen',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:14,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Fourteen',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:15,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Fifteen',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:16,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Sixtee',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:17,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Seventeen',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:18,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Eighteen',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:19,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Nineteen',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:20,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.Twenty',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:21,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.TwentyOne',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:22,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.TwentyTwo',
                    time:'2020/8/28',
                    state:false
                },
                {
                    id:23,
                    title:'hello world1',
                    img:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg',
                    text:'123467891',
                    name:'Mr.TwentyThree',
                    time:'2020/8/28',
                    state:false
                }
            ]
        }
        
    },
    computed:{
        page_arrs(){
            let {currentPage,pagesize} = this
            return this.userlist.slice((currentPage-1)*pagesize,currentPage*pagesize)
        },
        current_page(){
            return this.currentPage
        }
    },
    methods: {
        primaryPage(){
            this.currentPage = 1
        },
        prePage(){
            if(this.currentPage == 1){
                return
            }
            this.currentPage = this.currentPage - 1
        },
        nextPage(){
            if(this.currentPage == Math.ceil(this.userlist.length/this.pagesize)){
                return
            }
            this.currentPage = this.currentPage + 1
        },
        lastPage(){
            this.currentPage = Math.ceil(this.userlist.length/this.pagesize)
        }
    },
    
    props :['list'],
    
}
</script>


<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
.body{
    width: 600px;

}
.page{
    margin: 0px auto;
    margin-top: 30px;
    margin-bottom: 50px;
}
.btn{
    width:60px ;
    height: 30px;
    border: none;
    outline: none;
}
.list{
    width: 600px;
    border-bottom: 1px solid rgb(211, 211, 211);
    /* background-color: aqua; */
}
.list h3{
    position: relative;
    left: -220px;
    top: 10px;
    color: blue;
}
.list h3 a:hover{
    color: orange;
}
.header{
    width: 100%;
    height: 60px;
    margin-top: 20px;
}
.left{
    width: 100px;
    height: 55px;
    margin-left: 27px;
    /* background-color: orange; */
    float: left;
}
.header .left img{
    width: 50px;
    height: 52px;
}
.right{
    width:430px ;
    height: 50px;
    float: left;
    /* background-color: orchid; */
    text-align: left;
    font-size: 12px;
}
.bottom{
    width: 100px;
    height: 30px;

}
.bottom ul {
    width: 530px;
    height: 100%;
    
    margin-left: 27px;
    display: flex;
    line-height: 30px;
}
.bottom ul li{
    list-style: none;
    flex: 1;
}
.bottom ul li a{
    color: #000;
    text-decoration: none;
}
.bottom ul li a img{
    width: 15px;
    height: 15px;
}
.bottom ul li:first-child a{
    color: rgb(31, 31, 206);
}
.bottom ul li:first-child a:hover{
    color: orange;
}

.bottom ul li a:hover{
    color: rgb(24, 57, 241);
}
</style>