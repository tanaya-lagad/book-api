# 📚 Book Library REST API

A simple REST API to manage a library of books, built with **Node.js** and **Express**.
It supports full CRUD (Create, Read, Update, Delete) and saves data to a JSON file.

## Features
- Get all books or a single book by ID
- Add, update and delete books
- Input validation with proper error messages
- Correct HTTP status codes (200, 201, 400, 404)
- Data saved permanently in `books.json`

## Tech Stack
- Node.js
- Express.js
- File system (`fs`) for storage
- REST Client (VS Code) for testing

## How to Run
```bash
git clone https://github.com/tanaya-lagad/book-api.git
cd book-api
npm install
npm start
```
The server runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description | Success |
|--------|----------|-------------|---------|
| GET | `/books` | Get all books | 200 |
| GET | `/books/:id` | Get one book | 200 |
| POST | `/books` | Add a new book | 201 |
| PUT | `/books/:id` | Update a book | 200 |
| DELETE | `/books/:id` | Delete a book | 200 |

## Examples

### Add a book
**Request**
```http
POST /books
Content-Type: application/json

{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki"
}
```
**Response (201 Created)**
```json
{
  "id": 4,
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki"
}
```

### Error: missing data
**Response (400 Bad Request)**
```json
{
  "message": "Title and author are required"
}
```

### Error: book not found
**Response (404 Not Found)**
```json
{
  "message": "Book not found"
}
```

## Testing
All requests can be tested using the `requests.http` file with the
REST Client extension in VS Code.

## Project Structure
```
book-api/
├── index.js        # Server and all routes
├── books.json      # Data storage
├── requests.http   # API test requests
├── package.json    # Project info and dependencies
└── README.md
```

## What I Learned
- Building a REST API with Express
- Routing and HTTP methods (GET, POST, PUT, DELETE)
- Handling request data with `req.params` and `req.body`
- Input validation and HTTP status codes
- Reading and writing files with Node's `fs` module

## Future Improvements
- Store data in a real database (MongoDB or PostgreSQL)
- Add search by title or author
- Add user authentication
- Deploy the API online

## Author
**Tanaya Lagad** – [GitHub](https://github.com/tanaya-lagad)
