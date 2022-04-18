// const express=require("express");
// const app=express();
// const path=require("path")
// app.set("view engine","hbs")
// const mypath=path.join(__dirname,"../views")
// console.log(mypath)


// app.get("/",(req,res)=>{
// res.render(`${mypath}`)
// })
// // if the folder name is not views

// const mypaths=path.join(__dirname,"../myapps")
// app.set("views",mypaths)

// app.get("/",(req,res)=>{
//     res.render('index')
// })
// // app.get("/",(req,res)=>{
// //     res.send("bla bla")
// // })
// app.listen(3000,()=>{
//     console.log("done")
// })
















const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")



const mypath=path.join(__dirname,"../server/myapps")
console.log(mypath)
const partialpath=path.join(__dirname,"../server/layout")
hbs.registerPartials(partialpath)
app.set("view engine","hbs")
app.set("views",mypath)
app.get("/",(req,res)=>{
    res.render("index",{
        status:"login "
    })
})
app.get("",(req,res)=>{
    res.send("hety")
})
app.get("*",(req,res)=>{
    res.send("this is 404 error")
})
app.listen(3000,()=>{
    console.log("happy")
})