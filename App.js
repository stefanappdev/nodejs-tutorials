//require express

const express = require('express');

// initialize express app
const app = express();

//register view engine
app.set('view engine','ejs');


//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    
    res.render('index',{title:'Home',blogs:[

        {title:'Magic of computers',id:1,snippet:"LOREM IPSUM DOLOR Blog 1"}, 
        {title:'Physics from the future',id:2,snippet:"LOREM IPSUM DOLOR Blog 2"},
        {title:'Earth Angels weekly',snippet:"LOREM IPSUM DOLOR Blog 3"}
    ]


});

})


app.get('/about', (req, res) => {
    res.render('about',{title:'about'});
})

app.get('/blogs/create', (req, res) => {

    res.render('create',{title:'create blogs'});
})


//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})


//404 page
app.use((req, res) => {
    res.status(404)
    res.render("404",{title:'404 Error'});
})