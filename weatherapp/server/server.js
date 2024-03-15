const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import Mongoose
// const api = require('./api');
const authRoutes = require('./routes/authRoutes');

const cors=require('cors');

const port = 8081;
const app = express();
app.use(cors());
// Connecting to MongoDB using Mongoose
mongoose.connect('mongodb+srv://sardra9988:NyuafcKBiWno7plV@cluster0.paokpsx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.use('/auth', authRoutes);


app.listen(port, function () {
  console.log("Server is listening at port:" + port);
});



