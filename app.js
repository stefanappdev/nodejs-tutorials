const express=require('express');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes.js');

const app=express();




let dbURI=mongoose.connect('mongodb+srv://ailifeadvice2:6BWn4dj2lHbvnskD@nodetuts.okywb1x.mongodb.net/?retryWrites=true&w=majority')
app.listen(3000,'localhost');
console.log('conected to db');





app.use(express.static('public'));

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

app.use('/blogs',blogRoutes);

app.get('/',(req,res,)=>{
    res.render('pages/index.ejs',{title:"home"});
})



app.use((req,res)=>{
    res.status(404);
    res.render('pages/404.ejs',{title:"404 page"});
})