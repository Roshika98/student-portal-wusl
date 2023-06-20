import { Container } from "@mui/material";
import UndergradLogin from "./logins/UndergradLogin";
import LecturerLogin from "./logins/LecturerLogin";
import EmployeeLogin from "./logins/EmployeeLogin";
import WebmasterLogin from "./logins/WebmasterLogin";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Fragment, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

function Login() {
  const [user, setUser] = useState("Undergrad");
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleUserChange = (val) => {
    const nUser = val;
    setUser(nUser);
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={(e) => handleUserChange("Undergrad")} key={0}>
        Undergraduate
      </MenuItem>
      <MenuItem onClick={(e) => handleUserChange("Lecturer")} key={1}>
        Lectuer
      </MenuItem>
      <MenuItem onClick={(e) => handleUserChange("Employee")} key={2}>
        Employee
      </MenuItem>
      <MenuItem onClick={(e) => handleUserChange("Webmaster")} key={3}>
        Webmaster
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Select User type</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" color="warning">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Student Portal
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Container maxWidth="sm">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {user === "Undergrad" ? (
          <UndergradLogin />
        ) : user === "Lecturer" ? (
          <LecturerLogin />
        ) : user === "Employee" ? (
          <EmployeeLogin />
        ) : (
          <WebmasterLogin />
        )}
      </Container>
    </Fragment>
  );
}

export default Login;
