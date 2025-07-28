import React from 'react'

function CategoryMenu({ selectedCategory, setSelectedCategory }) {
    const categories = ['All', 'Events', 'Academics', 'Alumni', 'Sports', 'Cultural', 'Placement'];
    return (
    <div style= {{ backgroundColor: '#e2ecf3', padding: '10px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        {categories.map((cat) => (
            <button
                key = {cat}
                onClick={() => setSelectedCategory(cat)}
                className={cat === selectedCategory ? 'active' : ''}
                style = {{
                    backgroundColor: selectedCategory === cat ? '#a427aa1' : '#a4c5d7',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer'
                }}
            >
                {cat}
            </button>
        ))}
    </div>
  );
}

export default CategoryMenu;