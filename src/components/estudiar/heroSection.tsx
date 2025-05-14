import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "500px",
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('/oficina.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                px: 2,
                pb: 8
            }}
        >
            <Typography 
                variant="h1" 
                fontWeight="bold" 
                maxWidth="600px" 
                sx={{ 
                    color: "white",
                    fontSize: isMobile ? "38px" : "60px",
                    lineHeight: isMobile ? "1.2" : "1.1",
                    paddingX: isMobile ? 2 : 0,
                    marginBottom: 2
                }}
            >
                Elige dónde y cómo aprender
            </Typography>
            <Typography variant="body1" maxWidth="820px" p={'1.5rem'} sx={{ color: "white", fontSize: '18px' }}>
                En Fundación Heinsohn Conecta te ofrecemos formación gratuita en tecnología y desarrollo personal. Gracias a nuestros convenios con Instituto I3 y CENCABO, puedes escoger la institución que mejor se adapte a ti y aprender con el apoyo de expertos.
            </Typography>
        </Box>
    );
}

export default HeroSection;