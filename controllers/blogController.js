const Blog=require("../models/blog.js");






function Blog_index(req,res){
    const Blogs=Blog.find()
    .then((result)=>{
        res.render('pages/blogs.ejs',{title:"All blogs",Blogs:result});
    })
    .catch((err)=>{
        console.log(err);
    })
}

function Blog_create_get(req,res,){
    res.render('pages/create.ejs',{title:"create blog"});
}

function Blog_details(req,res){
    const id=req.params.id;
    const blog=Blog.findById(id)
    .then((result)=>{
        res.render('pages/details.ejs',{title:"Blog Details",blog:result});
    })
    .catch(err=>{
        console.log(err.message)
    })
}



function Blog_delete(req,res){
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
    .then(()=>res.json({redirect:'/'}))
    .catch(err=>{
        console.log(err.message)
    })
}




function Blog_create_post(req,res,){
    //console.log(req.body)
    const blog=new Blog(req.body);
    blog.save()
    .then(()=>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err.message)
    })
}


module.exports={

    Blog_index,
    Blog_create_get,
    Blog_details,
    Blog_delete,
    Blog_create_post
}
