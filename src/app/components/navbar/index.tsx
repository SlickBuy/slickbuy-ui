import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar() {
  return (
    <AppBar component="nav" sx={{ mb: 5 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "40px", marginRight: "16px" }}
        /> */}
        <Typography
          variant="h6"
          component="p"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Slick buy
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="secondary" href="/login">
            Log in
          </Button>
          <Button color="secondary" href="/register">
            Register
          </Button>
          <Button color="secondary" href="/profile">
            Profile
          </Button>
          <Button color="secondary" href="/products">
            Products
          </Button>
          <Button color="secondary" href="/products">
            Cart
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
