const express=require('express');
const router=express.Router();
const blogController=require('../controllers/blogController.js');




router.get('/',blogController.Blog_index);

router.get('/create',blogController.Blog_create_get);

router.get("/:id",blogController.Blog_details);

router.delete('/:id',blogController.Blog_delete);



router.post('/',blogController.Blog_create_post);


module.exports=router
