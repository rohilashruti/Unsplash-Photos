import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import searchImages from './api';
import ImageList from './Components/ImageList';
import { useState } from 'react';
function App() {

  const[images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }
  return (
    <div className="App">
    <SearchBar onSubmit = {handleSubmit}/>
    <ImageList images= {images}/>
    </div>
  );
}

export default App;
