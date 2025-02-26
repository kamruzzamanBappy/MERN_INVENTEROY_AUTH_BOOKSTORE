const express = require("express");
const router = express.Router();
const Book = require('./book.model.js');

// Post a book
router.post("/create-book", async (req, res) => {
  try {
    // চেক করুন title ফিল্ড আছে কিনা
    if (!req.body.title) {
      return res.status(400).send({ message: "Title is required!" });
    }

    const newBook = new Book(req.body);  // নতুন বই তৈরি
    await newBook.save();  // ডাটাবেজে বইটি সেভ করুন

    res.status(200).send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);

    // যদি কোনো ভুল হয়, তবে সঠিকভাবে রেসপন্স দিন
    res.status(500).send({ message: "Failed to create book", error: error.message });
  }
});

module.exports = router;
