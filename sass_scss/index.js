// const  http = require ('http');
// const fs = require('fs')
// const _= require('lodash')
// const server = http.createServer((req,res)=>{
//     let path="./views/"
//     switch (req.url) {
//       case "/":
//         path += "index.html";
//         break;
//       case "/about":
//         path += "about.html";
//         break;
//       case "/about-me":
//         res.statusCode=301
//         res.setHeader('Location','/about')
//         res.end()
//         break;
//       case "/blogs":
//         path += "/blogs.html";
//         break;
//       default:
//         path += "notfound.html";
//         break;
//     }
//     res.setHeader('content-type','Text/html');
//     fs.readFile(path,(error,data)=>{
//         const rnum = _.random(0,20)
//         console.log(rnum)
//         if(error){
//             console.log(error)
//         }
//         res.end(data)
//     })
    
// })
// server.listen(3000,'localhost',()=>{
//     console.log("the server is running on 3000 port ")
// })


// const express = require('express')
// const app = express();
// app.listen(3000);
// app.get('/data',(req,res)=>{
//    res.setHeader('content-Type','text/plain')
//    res.send('hello world')
// })
//   app.get('/data',(req,res)=>{
//     res.send("hello world")
//   })
// app.post('/post',async(req,res)=>{
//   try {
//       const blog = await blogModel(req.body);
//       res.status(200).json(blog)
//     blog.save().then(result=>res.end(result)).catch((error)=>console.log(error))
//   } catch (error) {
//     res.status(500).json({message:"there is something wrong"})
//   }
// })
//  app.put('/put/:id',async(req,res)=>{
//   // const{id}= req.params
//   // const blog = await blogModel.findByIdAndUpdate(id,req.body)
//   // if(!blog){
//   //   res.status(404).json({message:"the blog is not found"})
//   // }
//   // const updateblog = await blogModel.findById(id);
//   // res.status(200).json(updateblog)
//   try {
//     const {id} = req.params
//     const blog = await blogModel.findByIdAndUpdate(id,req.body)
//     if(!blog){
//       res.status(404).json({message:"the blog is not found"})
//     }
//     const updated = await blogModel.findById(id)
//     res.status(200).json(updated)
//   } catch (error) {
//     res.status(500).json({message:"the error comming"})
//   }
//  })

//  app.delete('/delete/:id',async(req,res)=>{
//     try {
//       const {id} = req.params
//       const blog = await blogModel.findByIdAndDelete(id);
//       if(!blog){
//        res.status(404).res.json({message:"the blog is not found"})
//       }
//       res.status(200).json({message:"the blog is succefully deleted"})
//     } catch (error) {
//       res.status(500).json({message:"the server is functioning "})
//     }
//  })








// app.put('/put/:id',async(req,res)=>{
//   try {
//     const {id} =req.params
//     const blogs = await blogModel.findByIdAndUpdate(id,req.body)
//     if(!blogs){
//       res.status(404).json({message:"the blogs is not found"})
//     }
//     const update = await blogModel.findById(id)
//     res.status(200).json(update)
    
//   } catch (error) {
//     res.status(500).json({message:"the server is in trouble"})
//   }
// })
// app.delete("/delete/:id",async(req,res)=>{
//   try {
//     const {id} = req.params
//     const blogs = await blogModel.findByIdAndDelete(id)
//     if (!blogs){
//       res.status(404).json({message:"the blog is not in the database"})
//     }
//     res.status(200).json({message:"the blog is succefully deleted"})
//   } catch (error) {
//     res.status(500).json({message:"the server is running out of control"})
//   }
// })











// const express = require("express");
// const { default: mongoose } = require("mongoose");
// const Blog = require("./views/models/blogs");

// const app = express();
// // app.use(express.urlencoded({extended:true}))
// const dburl =
//   "mongodb+srv://pange-23:123@cluster0.qtxbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(dburl)
//   .then((result) => app.listen(3000))
//   .catch((error) => {
//     console.log("something is wrong ");
//   });


// app.set("view engine", "ejs");

  


// app.get('/',(req,res)=>{
// res.redirect('./blogs')
// })
// app.get("/about", (req, res) => {
//   res.render("about");
// });


// app.get("/create",(req,res)=>{
//   res.render('create')
// })
// app.get ("/blogs",(req,res)=>{
//   Blog.find().sort({created:-1})
//   .then((result)=>{
//     const blogs=[]
//     res.render('index',{title:"home",blogs})
//   }).catch((error)=>{console.log(error)})
// })
// app.use((req, res) => {
//   res.render("notfound");
// });




// // Filename - index.js

// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Without middleware
// app.get('/', function (req, res) {
//     res.send({ title: 'GeeksforGeeks' });
// });

// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });



// //app.js 

// const express = require("express");
// const bodyParser = require("body-parser")
// const fs = require('fs')

// // New app using express module
// const app = express();
// app.use(
// 	bodyParser.urlencoded({
// 		extended: true
// 	})
// );

// app.get('/data',(req,res)=>{
// 	res.end("hello world")
// })
// // app.post("/",
// // 	function (req, res) {
// // 		var num1 =
// // 			Number(req.body.num1);
// // 		var num2 =
// // 			Number(req.body.num2);

// // 		var result = num1 + num2;
// // 		res.send("Addition - " + result);
// // 	});

// app.listen(3000, function () {
// 	console.log(
// 		"server is running on port 3000"
// 	);
// })

