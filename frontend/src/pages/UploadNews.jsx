import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UploadNews() {

  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    author: '',
    imageUrl: '',
    publishedAt: new Date().toISOString(), // Default to current date
    category: '' // Initialize category
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/articles', formData);
      toast.success('✅ Article uploaded successfully!');
      setFormData({ title: '', summary: '', content: '', author: '', imageUrl: '', publishedAt: new Date().toISOString() }); // Reset form after submission
    } catch (error) {
      toast.error('❌ Error uploading article');
      console.error(error);
    }
  };  

  return (
    <div>
      
      <div className = "upload-page" style={{ padding: '20px' }}>
        <h2>Upload News Article</h2>
        <form onSubmit={handleSubmit}>
          <input style = {{ width: '70%', height: '30px', marginBottom: '20px' }}
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          /><br /><br />


          <input style = {{ width: '70%', height: '30px', marginBottom: '20px' }}
            type="text"
            name="summary"
            placeholder="Summary"
            value={formData.summary}
            onChange={handleChange}
            required
          /><br /><br />

          <textarea style = {{ width: '70%', height: '100px', marginBottom: '20px' }}
            name="content"
            placeholder="Full content..."
            value={formData.content}
            onChange={handleChange}
            rows={5}
            required
          /><br /><br />

          <input style = {{ width: '70%', height: '30px', marginBottom: '20px' }}
            type ="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            required
          /><br /><br />

          <input style = {{ width: '70%', height: '30px', marginBottom: '20px' }}
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
          /><br /><br />

          <select name = "category" value = {formData.category} onChange= {handleChange} required>
            <option value="">Select Category</option>
            <option value="All">All</option>
            <option value="Events">Events</option>
            <option value="Academics">Academics</option>
            <option value="Alumni">Alumni</option>
            <option value="Sports">Sports</option>
            <option value="Cultural">Cultural</option>
            <option value="Placement">Placement</option>
          </select>
          <br/><br />

          <button type="submit">Upload</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable/>
    </div>
  );
}

export default UploadNews;