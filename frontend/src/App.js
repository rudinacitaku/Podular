
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Browse from './components/Browse';
import Create from './components/Create';
import Navbar from './components/NavBar';
import Shop from './components/Shop';
import Following from './components/Following';
import Favorites from './components/Favorites';
import 'bootstrap/dist/css/bootstrap.css';

//Seller panel
import SellerRegister from './components/Seller/SellerRegister';
import SellerLogin from './components/Seller/SellerLogin';
import SellerDashboard from './components/Seller/SellerDashboard';
import SellerProducts from './components/Seller/SellerProducts';
import AddProduct from './components/Seller/AddProduct';

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

            {/*Seller Routes*/}
            <Route path="/seller/register" element={<SellerRegister/>} />
            <Route path="/seller/login" element={<SellerLogin/>} />
            <Route path="/seller/dashboard" element={<SellerDashboard/>} />
            <Route path="/seller/products" element={<SellerProducts/>} />
            <Route path='/seller/add-product' element={<AddProduct/>}/>
          </Routes>
        
        }
      />
    </div>
  );
}

export default App;

