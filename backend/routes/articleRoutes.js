const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// GET all articles
router.get('/', async (req, res) => {
  const {category} = req.query;

  const filter = category && category !== 'All' ? { category } : {};
  try {
    const articles = await Article.find(filter).sort({ publishedAt: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


// GET single article by ID
// router.get('/:id', ... )

router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


// POST /api/articles
router.post('/', async (req, res) => {
  const { title, summary, content, author, imageUrl, publishedAt, category } = req.body;

  if (!title || !summary || !content) {
    return res.status(400).json({error: 'Missing fields' });
  }

try {
  const newArticle = new Article({ title,
    summary,
    content,
    author,
    imageUrl,
    publishedAt,
    category
  });
  await newArticle.save();
  res.status(201).json({message: 'Article uploaded successfully' });
} catch(err) {
  res.status(500).json({error: 'Server error'});
}

})

module.exports = router;
