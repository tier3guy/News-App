import './App.css';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className = "container">
        <h1 className = "text-center mt-3">Welcome to Newster</h1>
        <SearchBar/>
        <Loader/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
