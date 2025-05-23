import React, { useState } from 'react';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';


const images = [
  { id: 1, src: image1, name: 'Image 1', categories: ['Nature', 'Animals'] },
  { id: 2, src: image2, name: 'Image 2', categories: ['Nature'] },
  { id: 3, src: image3, name: 'Image 3', categories: ['Architecture'] },
  { id: 4, src: image4, name: 'Image 4', categories: ['Animals', 'Architecture'] },
  { id: 5, src: image5, name: 'Image 5', categories: ['Nature', 'Architecture'] },
];

const categories = ['Nature', 'Animals', 'Architecture'];

function App() {
  const [selectedCategories, setSelectedCategories] = useState(categories);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredImages = images.filter((image) =>
    image.categories.some((category) => selectedCategories.includes(category))
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Galeria Zdjęć</h1>
        <div className="checkbox-group">
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <div className="gallery">
          {filteredImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.name} />
              <h3>{image.name}</h3>
              <p>{image.categories.join(', ')}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;