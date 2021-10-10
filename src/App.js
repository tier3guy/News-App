import './App.css';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className = "container">
        <h1 className = "text-center mt-3 text-color">Welcome to Newster</h1>
        <SearchBar/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
