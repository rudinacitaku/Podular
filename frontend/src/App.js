
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Browse from './components/Browse';
import Create from './components/Create';
import Navbar from './components/NavBar';
import Shop from './components/Shop';
import Following from './components/Following';
import Favorites from './components/Favorites';

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
    </div>
  );
}

export default App;
