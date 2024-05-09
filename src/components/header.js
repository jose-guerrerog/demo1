import * as React from "react"
import { Link } from "gatsby"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import {
  Menu,
  MenuItem,
} from "@mui/material";


const Header = ({ siteTitle, menuLinks}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-controls="menu-appbar"
       aria-haspopup="true"
        edge="start"
        onClick={handleOpenNavMenu}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        Eastside Learning Centre
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {menuLinks.map(item => (
          <Link to={item.link} key={item.label} color="#fff" style={{color: "#fff", marginRight: '20px', textDecoration: 'none'}}>
          {item.name}
        </Link>
        ))}
      </Box>
      <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top", // Adjust to match the new position
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                   {menuLinks.map(item => (
                      <MenuItem>
                        <Link to={item.link} style={{ color: "#000", marginRight: '20px', textDecoration: 'none'}}>
                        {item.name}
                      </Link>
                      </MenuItem>
                    
                    ))}
                </Menu>
    </Toolbar>
  </AppBar>
)}

export default Header
