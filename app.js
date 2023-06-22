//require express and setup view engine

const express=require('express');
const mongoose=require('mongoose')
const Blog=require('./models/blog.js')

//initialize express app
const app=express();

     //connect to mongoDB
const dbURI='mongodb+srv://Stefan:VBksbmbxphhsF3zy@cluster0.peo97wy.mongodb.net/node-tuts?retryWrites=true&w=majority' 
mongoose.connect(dbURI)
    .then((result)=>{
        app.listen(3000);
        console.log('connected to db')
    })
    .catch(err=>{
        console.log(err.message)
    })
        

app.set(`view engine`,`ejs`);

//setup server to listen to localhost port 3000


app.use(express.static(`public`));
app.use(express.urlencoded({extended:true}));

//setup routes and responses
app.get(`/`,(req,res)=>{

    res.redirect(`/blogs`);
})

app.get(`/about`,(req,res)=>{
    res.render(`pages/about.ejs`,{title:"About"});
})

app.get('/blogs/create',(req,res)=>{
    res.render(`pages/create.ejs`,{title:"Create blogs"});
})
 
/*mongoose sandbox routes
app.get('/add-blog',(req,res)=>{
   const blog=new Blog({
    title:'new blog 2',
    snippet:'about blog 2',
    body:'more about my new blog 2'

   });


   blog.save()
   .then(result=>{
    res.send(result)
   })

   .catch(err=>{
    console.log(err.message)
   })

})*/

app.get('/blogs',(req,res)=>{
     Blog.find()
     .then(result=>{
        res.render(`pages/index.ejs`,{title:"All blogs",blogs:result});
     })
     .catch(err=>{
        console.log(err.message)
     })
})

app.post('/blogs',(req,res)=>{
    const blog=new Blog(req.body);
    blog.save()
    .then(()=>{
        res.redirect(`/`)
    })
    .catch(err=>{
        console.log(err.message)
    })
})

app.use((req,res)=>{
    res.status(404);
    res.render(`pages/404.ejs`,{title:"404 Error"});
})