
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Browse from './components/Browse';
import Create from './components/Create';
import Navbar from './components/NavBar';
import Shop from './components/Shop';
import Following from './components/Following';
import Favorites from './components/Favorites';
import Photo1 from './components/photos/photo1.jpg';


function App() {
  const navWidth = 220
  return (
    <div className="App">
      <Navbar 
        drawerWidth={navWidth}
        content = {
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/browse" element={<Browse/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/following" element={<Following/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        
        }
      />
      <div className="banner">
        <img src={Photo1} alt="Example" />
        <h1 className="photo-text">Top Picks for you!</h1>
          <h3 className="photo-subtext">Head on to your personalized picks to find more of what you like</h3>
      </div>
    </div>
  );
}

export default App;

