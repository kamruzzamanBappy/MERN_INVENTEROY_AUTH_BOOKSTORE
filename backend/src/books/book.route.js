const express = require("express");
const router = express.Router();
const Book = require('./book.model.js');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteBook } = require("./book.controller.js");

 
//post a book
router.post("/create-book",postABook );


//get all book
router.get("/",getAllBooks)


// single book endpoint
router.get("/:id",getSingleBook);




//update a book endpoint
router.put("/edit/:id", UpdateBook);


router.delete("/:id",deleteBook)



module.exports = router;


 // frontend => backend server=> controller=>book schema=>database=>send to server=>back to fronend

// post = when submit something frontend to db

// get = when get something back from db

// put/patch = when edit or update something

// delete = when delete something



 //we will send a request from an api from the frontend {we will hit a req to create a post from this frontend using this api(postman)}
 //it will receive this req on the backend server. based on req it will go to controller
 // controller read the logic if logic is valid it will call the schema to match the data
 //