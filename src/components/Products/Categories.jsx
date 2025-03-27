import React from 'react';

const categories = [
  { name: 'House Plants', img: '/resources/products-cat-img1.png' },
  { name: 'Vegetable Plant', img: '/resources/products-cat-img2.png' },
  { name: 'Herbs Plants', img: '/resources/products-cat-img3.png' },
  { name: 'Fruits Plants', img: '/resources/products-cat-img4.png' },
  { name: 'Climbing Plants', img: '/resources/products-cat-img5.png' }
];

const Categories = () => {
  return (
    <div className="overflow-x-hidden w-screen">
      <h2 className="text-3xl font-semibold my-8 text-center">Category</h2>
      <div className="flex justify-center space-x-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-52 rounded-lg overflow-hidden shadow-md border border-gray-300">
              <img src={category.img} alt={category.name} className="w-full h-full object-cover" />
            </div>
            <p className="mt-2 text-gray-700 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
