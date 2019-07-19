var express=require('express')
var app=express()
var art=require('express-art-template')
// 设置模板引擎为art
app.engine('art',art)
// 第一个参数 解析文件的后缀名 第二个参数art
// 必须是veiws中的
app.get('/',(req,res)=>{
    res.render('a.art',{
        list:['1','2','3']
    })
})
app.listen(3000)
