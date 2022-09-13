import './App.css'
import Search from "./components/Search/search";
import CurrentWeather from "./components/Current-Weather/current-weather"

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
