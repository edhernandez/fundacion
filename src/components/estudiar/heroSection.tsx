import { Box, Typography } from "@mui/material";

const HeroSection = () => {
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
            <Typography variant="h1" fontWeight="bold" maxWidth="600px" sx={{ color: "white", }}>
                Elige dónde y cómo aprender
            </Typography>
            <Typography variant="body1" maxWidth="820px" p={'1.5rem'} sx={{ color: "white", fontSize: '18px' }}>
                En Fundación Heinsohn Conecta te ofrecemos formación gratuita en tecnología y desarrollo personal. Gracias a nuestros convenios con Instituto I3 y CENCABO, puedes escoger la institución que mejor se adapte a ti y aprender con el apoyo de expertos.
            </Typography>
        </Box>
    );
}

export default HeroSection;