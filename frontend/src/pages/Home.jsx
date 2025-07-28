import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import CategoryMenu from '../components/CategoryMenu';

function Home() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get('http://localhost:5000/api/articles', {
        params: { category: selectedCategory }
      });
      setArticles(res.data);
    };
    fetchArticles();
  }, [selectedCategory]);

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className = "home-container" style={{ padding: '20px' }}>
      {/* <h2 style = {{ color: 'rgb(5, 10, 98)' }}>UCEK flash updates</h2> */}
      <CategoryMenu 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
      />
      <div className = "article-grid">
        {filteredArticles.map(article => (
          <ArticleCard className = "article-card" key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
