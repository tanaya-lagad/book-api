const express = require("express");
const app = express();


//NEW: our "database" for now, a list of books

let books = [
    {id: 1, title: "Wings of Fire", author: "A. P. J. Abdul Kalam"},
    {id: 2, title:"The Alchemist", author: "Paulo Coelho"},
    {id: 3, title: "Atomic Habits", author: "James Clear"}

];

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

app.listen(3000, function (){
    console.log("Server running at http://localhost:3000");

});