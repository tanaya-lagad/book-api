const express = require("express");
const app = express();
app.use(express.json());

//NEW: our "database" for now, a list of books

let books = [
    {id: 1, title: "Wings of Fire", author: "A. P. J. Abdul Kalam"},
    {id: 2, title:"The Alchemist", author: "Paulo Coelho"},
    {id: 3, title: "Atomic Habits", author: "James Clear"}
    //let nextId = 4;
];
let nextId = 4;
app.get("/", function (req, res){
    res.send("Hello from my first API!");
});

// NEW: get all books
app.get("/books", function (req, res){
    res.json(books);
});

//NEW: get one book by its id
app.get("/books/:id",function (req, res){
    const id = Number(req.params.id);
    const book = books.find(function (b){
        return b.id == id;
    });

    if (!book){
        return res.status(404).json({message: "Book not found"});
    }

    res.json(book);
});
/*app.get("/",function (req,res){
    res.send("Hello from my first API!");
});*/
// NEW: add a new book
app.post("/books", function(req, res){
    if(!req.body.title || !req.body.author){
        return res.status(400).json({message:"Title and author are required"});
    }

    const newBook = {
        id: nextId,
        title: req.body.title,
        author:req.body.author
    };

    nextId++;
    books.push(newBook);
    res.status(201).json(newBook);
});

// NEW: update a book
app.put("/books/:id",function(req, res){
    const id = Number(req.params.id);
    const book = book.find(function (b) {
        return b.id == id;
    });

    if (!book) {
        return res.status(404).json({ message: "Book not found"});
    }

    if (req.body.title){
        book.title = req.body.title;
    }
    if (req.body.author){
        book.author = req.body.author;
    }
    res.json(book);
});

//NEW: delete a book
app.delete("/books/:id",function (req, res) {
    const id = Number(req.params.id);
    const index = books.findIndex(function (b){
        return b.id === id;
    });

    if (index === -1){
        return res.status(404).json({ message: "Book not found"});
    }
    books.splice(index, 1);
    res.json({ message: "Book deleted"});
});
app.listen(3000, function (){
    console.log("Server running at http://localhost:3000");

});

