var express=require('express')
var app=express()
var cookieParser=require('cookie-parser')
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send('首页')
   
})
app.get('/set',(req,res)=>{
     // cookie httpOnly防止Xss攻击 true false  domain 域名 MaxAge 有效期  size 大小 Expries
     res.cookie('username','tom',{maxAge:200000,httpOnly:true})
     res.send('cookie设置成功')
    
})
app.get('/get',(req,res)=>{
    var name=req.cookies.username
    console.log(name)
    res.send('cookie读取成功:'+name)
   
})
app.listen(3000)