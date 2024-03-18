import { Avatar, Badge, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, TextField, Tooltip } from "@mui/material"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
const ContentHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const goToCart =()=>{
        window.location.href="/cart"
    }
    const user = localStorage.getItem("user")
    const cartItem = JSON.parse(localStorage.getItem("cart"))
    return (
        <div className="flex items-center justify-center header-float bg-white  ">
            <div className="header-inner w-11/12 flex justify-evenly">
                <div className="w-3/12 brand-icon">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/007/410/276/small/furniture-logo-design-vector.jpg"></img>
                </div>
                <div className="search w-6/12 flex items-center">
                    <input className="input-search w-9/12" placeholder="Tìm kiếm..."></input>
                    <Button variant="contained" className="btn-search"><SearchIcon /></Button>
                </div>
                <div className="user w-3/12 flex items-center justify-center">
                    {/* neu da dang nhap hien thi user , hoac hien thi nut log in */}
                    {user ?
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}><PersonIcon /></Avatar>
                        </IconButton>
                        : <Button href="login" className="btn-login">
                            Log in</Button>}
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose}><PersonIcon/> Profile</MenuItem>
                        <MenuItem onClick={handleClose}><TravelExploreIcon/> My account</MenuItem>
                        <MenuItem onClick={handleClose}><Logout/> Logout</MenuItem>
                    </Menu>
                    <Badge badgeContent={cartItem ? cartItem.length : 0} color="error">
                        <ShoppingCartIcon onClick={goToCart} sx={{ color: "#fcb900" }} fontSize="large" className="ml-5 cursor-pointer" />
                    </Badge>
                </div>
            </div>
        </div >
    )
}
export default ContentHeader