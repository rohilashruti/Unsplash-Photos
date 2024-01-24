import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import searchImages from './api';
function App() {

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log(result);
  }
  return (
    <div className="App">
    <SearchBar onSubmit = {handleSubmit}/>
    </div>
  );
}

export default App;
