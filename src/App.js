import './App.css';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className = "container">
        <h1 className = "text-center mt-3">Welcome to Newster</h1>
        <SearchBar/>
        <div className= "container mt-4">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
