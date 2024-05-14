const express = require('express')
const dotenv = require('dotenv')
const connectDataBase = require('./config/db')

//route files
const books = require('./routes/books');

//load environment
dotenv.config({path:'./config/config.env'})

connectDataBase();

const app = express();

// app.use('/api/v1/books',books);

app.get('/api/v1/books', (req,res) => {
    res.status(200).json({success:true, msg: 'Show all books'});
});

app.get('/api/v1/books/:id', (req,res) => {
    res.status(200).json({success:true, msg: `Show book ${req.params.id}`})
})

app.post('/api/v1/books', (req,res) => {
    res.status(200).json({succes:true, msg: 'Create new book'})
})

app.put('/api/v1/books/:id', (req,res) => {
    res.status(200).json({success:true, msg: `Update hospital ${req.params.id}`})
})

app.delete('/api/v1/books/:id', (req,res) => {
    res.status(200).json({success:true, msg: `Delete hospital ${req.params.id}`})
})







const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, 'mode on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`)

    //Close server and Exit process
    server.close(()=> process.exit(1));
})