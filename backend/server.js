const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config(); 
const app = express();
app.use(cors());
app.use(express.json());

// TODO : Add routes here later
app.get('/', (req,res) => {
    res.send('Welcome to college news API');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

const articleRoutes = require('./routes/articleRoutes');
app.use('/api/articles', articleRoutes);