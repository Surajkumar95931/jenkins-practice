const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("working here ")
})

app.listen(8000,'0.0.0.0',()=>{
    console.log("app running")
})