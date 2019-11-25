const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT ,OPTIONS");
  next();
});
console.log("mongodbpath:/usr/local/Cellar/mongodb-community-shell/4.2.0/bin");
mongoose.connect("mongodb+srv://amit:block444@cluster0-y9dqq.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("connection failed"+e);
});

// app.post('/api/posts',(req,res,next) => {
//   const post = new Post({
//     title: req.body.title,
//     content: req.body.content
//   })
//   console.log(post);
//   post.save().then((createdPost) => {
//     res.status(201).json({
//       message: "Post added successfully",
//       postId: createdPost._id
//     });
//   });
// });


// app.put('/api/posts/:id',(req,res,next) => {
//   const post = new Post({
//     _id: req.body.id,
//     title: req.body.title,
//     content: req.body.content
//   })
//   Post.updateOne({_id: req.params.id}, post).then(result => {
//     console.log(result);
//     res.status(200).json({message:"Update successful"});
//   })
// })



// app.delete("/api/posts/:id",(req,res,next) => {
//   Post.deleteOne({_id:req.params.id}).then((result) => {
//     console.log(result);
//   })
//   res.status(200).json({
//     message: "Post deleted successfully"
//   });
// });

// app.use('/api/posts',(req,res,next) => {
  // const posts = [{
  //   id:'hgjb',
  //   title:"This first post from server",
  //   content:"This is first post content"
  // },
  // {
  //   id:'hgjjhub',
  //   title:"This second post from server",
  //   content:"This is second post content"
  // }

  // ];
//   Post.find()
//     .then(documents => {
//       res.status(200).json({
//         message: "posts have been fetched successfully!",
//         posts: documents
//       });
//     })

// });

// app.get("/api/posts", (req, res, next) => {
//   Post.find().then(documents => {
//     res.status(200).json({
//       message: "Posts fetched successfully!",
//       posts: documents
//     });
//   });
// });

// app.get("/api/posts/:id",(req,res,next) => {
//   console.log("Post id");
//   Post.findById(req.params.id).then(post => {
//     if(post) {
//       console.log("Post found");
//       res.status(200).json(post);
//     }
//     else
//     {
//       res.status(404).json({message: "Post not found"});
//     }
//   });
// });

app.use("/api/posts",postRoutes);

module.exports = app;
