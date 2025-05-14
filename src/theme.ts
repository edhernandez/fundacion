import { createTheme } from '@mui/material/styles';

// Definir un tema personalizado basado en los colores por defecto de MUI
const theme = createTheme({
    palette: {
        primary: {
            main: "#D20F36",
            contrastText: "#D20F36", // Se aplica a textos dentro de botones primary
        },
        secondary: {
            main: "#D20F36",
            contrastText: "#D20F36",
        },
        error: {
            main: "#d32f2f",
            contrastText: "#D20F36",
        },
        warning: {
            main: "#ed6c02",
            contrastText: "#D20F36",
        },
        info: {
            main: "#0288d1",
            contrastText: "#D20F36",
        },
        success: {
            main: "#2e7d32",
            contrastText: "#D20F36",
        },
        background: {
            default: '#f5f5f5', // Fondo gris claro
            paper: '#ffffff', // Fondo de tarjetas y modales
        },
        text: {
            primary: "#030417", // Texto negro por defecto
        },
    },
    typography: {
        fontFamily: "'Fraunces', serif",
        fontWeightLight: 300,
        fontSize: 16,
        h1: { 
            fontSize: "60px", 
            fontWeight: 600, 
            lineHeight: "54px", 
            letterSpacing: "0%", 
            textAlign: "center"
        },
        h2: { 
            fontSize: "1.75rem", 
            fontWeight: 600
        },
        h3: { 
            fontSize: "1.5rem", 
            fontWeight: 500
        },
        h5: { fontSize: "1.25 rem", fontWeight: 300 },
        h6: { fontSize: "1 rem", fontWeight: 300 },
        body1: {
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "16px",
            letterSpacing: "0%",
        },
        button: {
            textTransform: 'none',
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "30px",
            letterSpacing: "0%",
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff", // Paper color para AppBar
                    color: "#030417", // Texto negro en la barra de navegación
                    boxShadow: "none", // Opcional: Elimina la sombra
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#030417", // Texto negro en botones
                    fontSize: "16px",
                    fontWeight: '300',
                    //border: "2px solid transparent",
                    transition: "border-color 0.3s ease",
                    lineHeight: '1',
                    "&:hover": {
                        borderColor: "#D20F36", // Borde secundario en hover
                    },
                    "&:active": {
                        borderColor: "#D20F36", // Borde secundario en click
                    },
                    "&.MuiButton-outlined": {
                        borderColor: "#D20F36", // Asegura que los botones outlined mantengan el color
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#030417", // Texto negro por defecto
                },
            },
        },
    },
});

export default theme;