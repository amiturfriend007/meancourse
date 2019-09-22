const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT ,OPTIONS");
  next();
});

app.post('/api/posts',(req,res,next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
  // next();
})

app.use('/api/posts',(req,res,next) => {
  const posts = [{
    id:'hgjb',
    title:"This first post from server",
    content:"This is first post content"
  },
  {
    id:'hgjjhub',
    title:"This second post from server",
    content:"This is second post content"
  }

  ];
  res.status(200).json({
    message: "posts have been fetched successfully!",
    posts: posts
  });
});

module.exports = app;
