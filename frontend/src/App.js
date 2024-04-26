
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Browse from './components/Browse';
import Create from './components/Create';
import Navbar from './components/NavBar';
import Shop from './components/Shop';
import Following from './components/Following';
import Favorites from './components/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';


//Seller panel
import SellerRegister from './components/Seller/SellerRegister';
import SellerLogin from './components/Seller/SellerLogin';
import SellerLogout from './components/Seller/SellerLogout';
import SellerDashboard from './components/Seller/SellerDashboard';
import SellerProducts from './components/Seller/SellerProducts';
import AddProduct from './components/Seller/AddProduct';
import UpdateProduct from './components/Seller/UpdateProduct';
import SellerOrders from './components/Seller/SellerOrders';
import Customers from './components/Seller/Customers';
import Reports from './components/Seller/Reports';
import SellerProfile from './components/Seller/SellerProfile';


//Customer panel
import Register from './components/Customer/Register';
import Login from './components/Customer/Login';
import Dashboard from './components/Customer/Dashboard';
import AddressList from './components/Customer/AddressList';
import AddAddress from './components/Customer/AddAddress';
import SellerChangePassword from './components/Seller/SellerChangePassword';
import UpdateAddress from './components/Customer/UpdateAddress';


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
            <Route path="/seller/logout" element={<SellerLogout/>}/>
            <Route path="/seller/dashboard" element={<SellerDashboard/>} />
            <Route path="/seller/products" element={<SellerProducts/>} />
            <Route path='/seller/add-product' element={<AddProduct/>}/>
            <Route path='/seller/update-product/:podcast_id' element={<UpdateProduct/>}/>
            <Route path='/seller/orders' element={<SellerOrders/>}/>
            <Route path='/seller/customers' element={<Customers/>}/>
            <Route path='/seller/reports' element={<Reports/>}/>
            <Route path='/seller/profile' element={<SellerProfile/>}/>
            <Route path='/seller/seller-change-password' element={<SellerChangePassword/>}/>

            {/*Customer Routes*/}
            <Route path='/customer/register' element={<Register/>}/>
            <Route path='/customer/login' element={<Login/>}/>
            <Route path='/customer/dashboard' element={<Dashboard/>}/>
            <Route path='/customer/addresses' element={<AddressList/>}/>
            <Route path='/customer/add-address' element={<AddAddress/>}/>
            <Route path='/customer/update-address/:address_id' element={<UpdateAddress/>}/>


          </Routes>
        
        }
      />
    </div>
  );
}

export default App;