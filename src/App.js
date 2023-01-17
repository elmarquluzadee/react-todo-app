
import React, { useState }  from 'react';

import image from './images'
import './App.css';
import images from './images';

function App() {

  const [selectedImg,setSelectedImg] = useState(images[0])

  return (
    <div className='App-header'>
    <div className='App ' >
      <div className="container">
          <img src={selectedImg} alt="search" />
      </div>
      <div className='imgContainer'>
        {images.map((img,index) => (
          <img key={index} src = {img} alt = "pizza" 
          onClick={ () => setSelectedImg (img)}
          />
        ))} 
       </div>
    </div>
    </div>
  );
}

export default App;
