// Import data
import { postings } from './postings';

// Import components
import './App.css';
import Searchbar from './searchbar';
import Directory from './directory';
import Sidebar from './sidebar';
import Gallery from './gallery';


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar/>
        <Directory/>
        <Gallery/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
