import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_BASE = "https://college-news-f6u9.onrender.com";

function ArticleView() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE}/api/articles/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className = "article-view-page" style={{ padding: '20px' }}>
      <h2>{article.title}</h2>
      <img src={article.imageUrl} alt="cover" style={{ width: '80%', height: '400px', objectFit: 'cover' }} />
      <p style = {{ fontSize : '18px'}}><strong>Author:</strong> {article.author}</p>
      <p style = {{ fontSize : '18px'}}><strong>Date:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
      <p style = {{ marginTop: '20px', fontSize : '18px' }}>{article.content}</p>
    </div>
  );
}

export default ArticleView;
