var express=require('express')
var bodyParser=require('body-parser')
var path=require('path')
var app=express()
//  post json 字符串
// 处理json 数据
app.use(bodyParser.json())
// 处理字符串
app.use(bodyParser.urlencoded({extends:false}))
var formPath=path.resolve(__dirname)
console.log(formPath)
app.use(express.static(formPath))
app.get('/',(req,res)=>{
    res.send('首页')
})
app.post('/red',(req,res)=>{
    var body=req.body
    console.log(body)
    res.send('数据传输成功')
})
app.listen(3000)