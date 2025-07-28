import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';  

function ArticleCard({ article }) {
  return (
    <div style={{ border: '1px solid black', marginBottom: '15px', padding: '15px', borderRadius: '8px', backgroundColor: 'rgb(178, 186, 192)', display: 'block'}}>
      <h2 style = {{ backgroundColor: 'rgb(178, 186, 192)' }}>{article.title}</h2>
      <img src = {article.imageUrl} alt="cover" style={{ width: '75%', height: '150px ', objectFit: 'cover' }} />
      <p style = {{ backgroundColor: 'rgb(178, 186, 192)', fontSize: '18px'}} >{article.summary}</p>
      <p style = {{ backgroundColor: 'rgb(178, 186, 192)', fontSize: '18px'}} >
        {new Date(article.publishedAt).toLocaleString()}
      </p>
      <Link style = {{ backgroundColor: 'rgb(178, 186, 192)', fontSize: '18px' }} to={`/article/${article._id}`}  >Read More</Link>
    </div>
  );
}

export default ArticleCard;
