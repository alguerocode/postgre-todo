const cors = require('cors');
const express = require('express');
const app = express();
const todoRouter = require('./routes/todo');
const path = require('path');

const PORT = process.env.PORT || 5000;

// middleware;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
}
app.use(express.static(path.join(__dirname, "client/build")));

//routes 
app.use('/todo', todoRouter);
// app.use('/', (req,res) => res.send('welcome there'));
// listening 
app.listen(PORT, () => {
  console.log('the server are listening at port ' + PORT);
  console.log(process.env.NODE_ENV);
  console.log(process.env.DATABASE_URL);
  console.log(process.env.PORT);
  console.log(process.env.PG_USER);
  console.log('sdlkhffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
});
// 404 page 
app.use('*', (req,res) => {
  res.sendFile(path.join(__dirname,'client/build/index.html'));
  res.redirect('/')
});