const Book = require("./book.model.js")

const postABook = async (req, res) => {
    try {
       
      if (!req.body.title) {
        return res.status(400).send({ message: "Title is required!" });
      }
  
      const newBook = new Book(req.body);   
      await newBook.save();  
  
      res.status(200).send({ message: "Book posted successfully", book: newBook });
    } catch (error) {
      console.error("Error creating book", error);
  
      
      res.status(500).send({ message: "Failed to create book", error: error.message });
    }
  } 

// get all books 
const getAllBooks = async (req,res) =>{
try{
  const books = await Book.find().sort({createdAt: -1});
  res.status(200).send(books)

} catch(error){
console.error("Error fetching books",error);
res.status(500).send({message:"Failed to fetch books"})
}
}

const getSingleBook = async (req,res) =>{

  try{

    const {id} = req.params;
    const book = await Book.findById(id);

if(!book){
 return res.status(400).send({message:"Book no Found"})
}  res.status(200).send(book)
  } catch(error){

    console.error("Error fetching book",error);
    res.status(500).send({message:"Failed to fetch book"})
  }

}


//update book data
const UpdateBook = async (req,res) =>{
  try {

    const {id} = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id,req.body,{new:true});

if(!updatedBook) {
  res.status(404).send({message: "Book is not Found!"})
}
res.status(200).send( {
  message: "Book updated successfully",
  book:updatedBook
})


  } catch(error) {
console.error("Error updating a book",error);
res.status(500).send({message:"Failed to update a book"})
  }
 
}


const deleteBook = async (req,res) => {
try{
const {id} = req.params;
const deletedBook = await Book.findByIdAndDelete(id);


if(!deletedBook) {
  res.status(404).send({messge:"Book is not Found!"})
}
res.status(200).send({
  message: "Book deleted successfully",
  book: deletedBook
})
}
catch (error) {
console.error("Error deleting a book",error);
res.status(500).send({message:"Failed to delete a book"})
}

};


  module.exports = {
    postABook,getAllBooks,getSingleBook,UpdateBook,deleteBook
  }