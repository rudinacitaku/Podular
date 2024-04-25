import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import {Link, useLocation} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import GradeIcon from '@mui/icons-material/Grade';
import Button from '@mui/material/Button';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function NavBar(props) {
    const {drawerWidth, content} = props
    const location = useLocation()
    const path = location.pathname
 
    const [open, setOpen] = React.useState(false);
    const changeOpenStatus = () => {
        setOpen(!open)
    }

    const myDrawer = (
        <div>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/" selected={"/" === path}>
                        <ListItemIcon>
                            <HomeIcon sx={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Home"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/browse" selected={"/browse" === path}>
                        <ListItemIcon>
                            <SearchIcon sx={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Browse"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/following" selected={"/following" === path}>
                        <ListItemIcon>
                            <LibraryAddCheckIcon sx={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Following"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/favorites" selected={"/favorites" === path}>
                        <ListItemIcon>
                            <GradeIcon sx={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Favorites"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/create" selected={"/create" === path}>
                        <ListItemIcon>
                            <KeyboardVoiceIcon sx={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Create"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/shop" selected={"/shop" === path}>
                        <ListItemIcon>
                            <StorefrontIcon  sx={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Shop"} />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </div>
    ) 
    const checkCreator=localStorage.getItem('creator_login');

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white', color: 'black'}}>
        <Toolbar>

            <IconButton color="inherit" onClick={changeOpenStatus} sx={{mr:2, display:{sm:"none"}}}>
                <MenuIcon/>
            </IconButton>

            <Typography variant="h6" noWrap component="div" sx={{ color: 'black', fontWeight:'bold'}}>
                Podular
            </Typography>

            {/*<Button variant="contained" color="inherit" sx={{ ml: 'auto', backgroundColor: 'lightpink', textTransform: 'none' }}>Account</Button>*/}
            <div className="navbar-nav ms-auto">
            <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <Dropdown>
                    <Dropdown.Toggle as={Link} to="#" role="button">
                        Creator/Seller Panel
                    </Dropdown.Toggle>

                    
                        { checkCreator && <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/seller/dashboard">Dashboard</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/seller/logout">Log Out</Dropdown.Item>
                            </Dropdown.Menu>}
                        <Dropdown.Divider />
                        { !checkCreator && <Dropdown.Menu> <Dropdown.Item as={Link} to="/seller/register">Register</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/seller/login">Log In</Dropdown.Item>
                    </Dropdown.Menu>}
                </Dropdown>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' aria-current="page" to="/checkout">New Orders</Link>
            </li>

            </ul>
</div>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          display:{xs:"none", sm:"block"},
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {myDrawer}
      </Drawer>
      
      <Drawer
        variant="temporary"
        open = {open}
        onClose = {changeOpenStatus}
        sx={{
          display:{xs:"block", sm:"none"},
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {myDrawer}
      </Drawer>
    
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}

      </Box>
    </Box>
  );
} 