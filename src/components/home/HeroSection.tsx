import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import Mouse from "@/assets/icons/Mouse.svg?react";

const HeroSection = () => {

  const theme = useTheme();
  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      width: "100%",
      height: mobileBreakpoint ? "920px" : "720px",
      backgroundColor: '#000000'
    }}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "620px",
          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 80% , rgba(0, 0, 0, 1) 100%), url('/fundacion.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          px: 2,
          pb: 6
        }}
      >


      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: '400px'
      }}>
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
          En Fundación Heinsohn Conecta
        </Typography>
        <Typography variant="body1" maxWidth="720px" p={'1rem'} sx={{ color: "white", fontSize: '18px' }}>
          Creemos en el poder del aprendizaje y la tecnología para cambiar el mundo. Nuestra misión es brindar educación, herramientas digitales y apoyo social a comunidades en situación de vulnerabilidad, creando oportunidades para un mejor futuro.
        </Typography>
        <Box display={'flex'} gap={'1rem'} flexWrap={mobileBreakpoint ? 'wrap' : 'nowrap'} justifyContent="center">
          <Button
            variant="contained"
            component="a"
            href="https://forms.office.com/r/qYeAyV3ngP"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              px: 3,
              mb: mobileBreakpoint ? 1 : 0,
              lineHeight: '20px',
              gap: '8px',
              maxWidth: '180px',
              textDecoration: 'none'
            }}
          >
            Quiero ser parte del programa
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://forms.office.com/r/nZP9CR1hkh"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              px: 3,
              mb: mobileBreakpoint ? 1 : 0,
              lineHeight: '20px',
              gap: '8px',
              maxWidth: '180px',
              textDecoration: 'none'
            }}
          >
            Quiero participar como empresa
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://forms.office.com/r/jNhHzm67Sd"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              px: 3,
              lineHeight: '20px',
              gap: '8px',
              maxWidth: '180px',
              textDecoration: 'none'
            }}
          >
            Quiero ser asociado Heinsohn
          </Button>
        </Box>
        <Box sx={{ width: '18px', height: '34.5px', py: '1rem' }}>
          <Mouse height={'34.5px'} width={'18px'} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;