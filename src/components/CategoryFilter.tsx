import React from 'react';
import { categories } from '../types/categories';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <h3>Categories</h3>
      <button onClick={() => onCategoryChange(null)} className={selectedCategory === null ? 'active' : ''}>
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;