var express=require('express')
var app=express()
var ejs=require('ejs')
// 设置模板引擎
// app.set()
// app.engine('views engine','ejs')
// 设置模板引擎为ejs
// app.set('view engine','ejs')
// // 指定具体目录
// app.set('views',__dirname+'/views/')

app.set('view engine','ejs')
app.set('views',__dirname+'/views/')
app.get('/',(req,res)=>{
    res.render('view',{list:['1','2','3']})
})
app.listen(3000)

