import * as React from "react"
import { Link } from "gatsby"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contacts",
    href: "/contacts",
  },
]

const Header = ({ siteTitle }) => (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        // onClick={handleDrawerToggle}
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
        {navItems.map(item => (
          <Link to={item.href} key={item.label} color="#fff" style={{color: "#fff", marginRight: '20px'}}>
            {item.label}
          </Link>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
)

export default Header
