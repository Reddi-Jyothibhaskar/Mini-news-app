const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    author: String,
    imageUrl: String,
    publishedAt: {
        type: Date,
        default: Date.now.toLocaleString()  // Automatically set to current date        
    },
    category : String,
});
module.exports = mongoose.model('Article', articleSchema);


