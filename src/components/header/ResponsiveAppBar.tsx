import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import VectorDolar from "@/assets/icons/VectorDolar.svg?react";

const pages = [
  { name: "Inicio", path: "/" },
  { name: "La fundación", path: "/fundacion" },
  { name: "Estudia con nosotros", path: "/estudiar" },
  { name: "Soy empresa", path: "/empresa" },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "90%",
        marginX: "5%",
        marginTop: 2,
        borderRadius: "50px",
        backgroundColor: "#FFFFFFCC", // Semi-transparente
        backdropFilter: "blur(8px)", // Difuminado
        boxShadow: "0px 0px 14px 0px #C8CDE080", // Sombra más suave
        transition: "all 0.3s ease-in-out", // Transición suave
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer", textDecoration: "none" }}
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" alt="Logo" style={{ height: "56px", width: "165px" }} />
        </Box>

        {/* Menú para pantallas grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => {
            const isSelected = location.pathname === page.path;
            return (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                sx={{
                  fontWeight: isSelected ? "bold" : "normal",
                  borderBottom: isSelected ? `2px solid ${theme.palette.secondary.main}` : "none",
                  borderRadius: "0px",
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                {page.name}
              </Button>
            );
          })}
        </Box>

        {/* Botón de dona aqui */}
        <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
          <Box sx={{ backgroundColor: "white", borderRadius: "50px", display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              onClick={() => navigate("/participar-empresa")}
              endIcon={
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: 36,
                    height: 36,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VectorDolar width={20} height={20} fill="none" stroke={theme.palette.secondary.main} />
                </Box>
              }
              sx={{
                fontWeight: "bold",
                backgroundColor: theme.palette.secondary.main,
                color: "white",
                borderRadius: "50px",
                borderColor: theme.palette.secondary.main,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                "&:hover": { backgroundColor: theme.palette.secondary.dark },
              }}
            >
              ¡Dona aquí!
            </Button>
          </Box>
        </Box>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={() => {
                  navigate(page.path);
                  handleCloseNavMenu();
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontWeight: location.pathname === page.path ? "bold" : "normal",
                    color: location.pathname === page.path ? theme.palette.secondary.main : "inherit",
                  }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
