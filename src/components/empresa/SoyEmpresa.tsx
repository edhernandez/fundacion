import { Box, Typography, Button, Grid, Paper } from "@mui/material";

const SoyEmpresa = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', minHeight: '100vh', pb: 6 }}>
      {/* Hero */}
      <Box sx={{
        width: '100%',
        minHeight: { xs: 220, md: 340 },
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%), url(/empresa-hero.jpg) center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        py: { xs: 4, md: 8 },
        px: 2,
      }}>
        <Typography variant="h2" fontWeight="bold" sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
          ¡Súmate a la transformación del talento!
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700 }}>
          En Fundación Heinsohn Conecta, conectamos a empresas y talento joven con el futuro. Descubre cómo puedes participar y transformar vidas a través de la educación y la empleabilidad.
        </Typography>
      </Box>

      {/* ¿Cómo puedes participar? */}
      <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', mt: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: 4 }}>
          ¿Cómo puedes participar?
        </Typography>
        <Grid container spacing={4}>
          {/* 1. Buscas Aprendices */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                1. ¿Buscas Aprendices?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Encuentra el talento que tu empresa necesita. Vincula aprendices y jóvenes en formación técnica y tecnológica.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Postula tu empresa
              </Button>
            </Paper>
          </Grid>
          {/* 2. Buscas Candidatos Graduados */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                2. ¿Buscas Candidatos Graduados?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Conecta con egresados listos para integrarse a tu equipo y aportar valor desde el primer día.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Publica tu vacante
              </Button>
            </Paper>
          </Grid>
          {/* 3. Buscas Personal con Conocimiento en Plataforma Heinsohn */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                3. ¿Buscas Personal con Conocimiento en Plataforma Heinsohn?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Encuentra talento que domina las soluciones Heinsohn y acelera la transformación digital de tu empresa.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Solicita información
              </Button>
            </Paper>
          </Grid>
          {/* 4. Quieres ser Donante */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                4. ¿Quieres ser Donante?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Haz parte del cambio y recibe beneficios tributarios apoyando la formación de jóvenes.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Quiero donar
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Contacto */}
      <Box sx={{ width: '100%', bgcolor: '#d3003f', color: 'white', mt: 8, py: 6 }}>
        <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: 2 }}>
          Únete hoy mismo
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'white', color: 'black', textAlign: 'center' }}>
              <Typography variant="subtitle1" fontWeight="bold">Correo</Typography>
              <Typography variant="body2">fundacionheinsohn@heinsohn.com.co</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: 'white', color: 'black', textAlign: 'center' }}>
              <Typography variant="subtitle1" fontWeight="bold">Llámanos</Typography>
              <Typography variant="body2">+57 601 744 77 79</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography align="center" sx={{ mt: 4, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.2rem' } }}>
          ¡El futuro del talento está en tus manos!
        </Typography>
      </Box>
    </Box>
  );
};

export default SoyEmpresa; 