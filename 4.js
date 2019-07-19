var express=require('express')
var app=express()
var router=express.Router()
app.use(router)
router.get('/',(req,res)=>{
    res.send({'success':"ok"})
})
// 写接口
router.get('/getcode',(req,res)=>{
    var roudomNum=function (min,max){
        return parseInt(Math.random()*(max-min)+min)
    }
    var str='abcdefghijklmnopqrstuvwxyz0123456789'
    var code=''
    for(var i=0;i<4;i++){
        code+=str[roudomNum(0,str.length)]
    }
    res.send(code)

})
app.listen(3000)
/*
验证码接口
第一步 有一个循环
第二步 for循环
第三步 导出数据
*/