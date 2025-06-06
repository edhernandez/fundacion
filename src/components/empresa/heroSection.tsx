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
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('/hands.png')",
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
                    lineHeight: isMobile ? "42px" : "54px",
                    paddingX: isMobile ? 2 : 0
                }}
            >
                ¡Súmate a la transformación del talento!
            </Typography>
            <Typography variant="body1" maxWidth="820px" p={'1.5rem'} sx={{ color: "white", fontSize: '18px' }}>
            En la Fundación Heinsohn, creemos que la educación y la empleabilidad son el puente hacia un futuro más próspero. Por eso, invitamos a tu empresa a ser parte de esta transformación social, accediendo al mejor talento técnico, impulsando el crecimiento de nuevos profesionales y obteniendo beneficios estratégicos para tu organización.
            </Typography>
        </Box>
    );
}

export default HeroSection;