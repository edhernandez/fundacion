import { Box, Typography, Grid, Paper } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const bloques = [
  {
    numero: 1,
    titulo: "¿Buscas Aprendices?",
    subtitulo: "Encuentra el talento que tu empresa necesita",
    descripcion: [
      "¡Tenemos el mejor talento técnico para tu empresa! Cumple con la obligación legal de contratar aprendices (Ley 789 de 2002, Art. 32) de una manera eficiente y estratégica.",
      "Accede a un banco de aprendices altamente capacitados en áreas como administración, contabilidad, finanzas, tecnología y gestión empresarial.",
      "Selecciona aprendices de grupos abiertos o cerrados, según los perfiles y competencias que tu empresa necesite.",
      "Apoya el desarrollo profesional de los aprendices, invitándolos en relación directa con tu cultura y objetivos empresariales."
    ],
    destacado: "¡Forma parte de este cambio y recibe aprendices listos para aportar valor a tu empresa!",
    img: '/Participar1.png' 
  },
  {
    numero: 2,
    titulo: "¿Buscas Candidatos Graduados?",
    subtitulo: "Nosotros los encontramos por ti",
    descripcion: [
      "Conéctate con profesionales técnicos capacitados y listos para trabajar.",
      "Accede a un banco de candidatos graduados con certificaciones en áreas clave del mercado laboral.",
      "Facilita la contratación de talento con habilidades prácticas y experiencia en entornos empresariales reales.",
      "Recibe costos y tiempos de selección con nuestro apoyo en la búsqueda del perfil ideal para tu organización."
    ],
    destacado: "¡Dale la oportunidad a jóvenes comprometidos y preparados para aportar a tu empresa!",
    img: '/Participar2.png' 
  },
  {
    numero: 3,
    titulo: "¿Buscas Personal con Conocimiento en Plataformas Heinsohn?",
    subtitulo: "Encuentra talento certificado en nuestras plataformas tecnológicas para optimizar la gestión en tu empresa.",
    descripcion: [
      "Accede a profesionales entrenados en:",
      "• Software de Nómina, Seguridad Social y Recursos Humanos Heinsohn.",
      "• Ambiente SAP con certificación en herramientas empresariales.",
      "• Procesos contables y financieros con tecnología Heinsohn.",
      "• Y otros roles especializados en función de las necesidades de tu empresa."
    ],
    destacado: "¡Impulsa tu empresa con expertos en plataformas Heinsohn desde el primer día!",
    img: '/Participar3.png' 
  },
  {
    numero: 4,
    titulo: "¿Quieres Ser Donante?",
    subtitulo: "Haz parte del cambio y recibe beneficios",
    descripcion: [
      "Transforma vidas mientras accedes a incentivos tributarios.",
      "Apoya la formación de jóvenes en situación de vulnerabilidad.",
      "Recibe reconocimiento como empresa socialmente responsable.",
      "Aporta al desarrollo del país y al futuro de las nuevas generaciones.",
      "Obtén beneficios de RSE (Responsabilidad Social Empresarial) y deducción fiscal por tu aporte."
    ],
    destacado: "¡Tu aporte hace la diferencia! Sé parte de una iniciativa que transforma vidas y empresas.",
    img: '/Participar4.png' 
  }
];

const SoyEmpresa = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fff' }}>
      
      {/* ¿Cómo puedes participar? */}
      <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', mt: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}>        
        <Box
          sx={{
              width: "90%",
              maxWidth: "1000px",
              display: "flex",
              flexDirection: "column",
          }}
      >
          {/* Encabezado */}
          <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              mb: 3,
          }}>
              <Typography
                  variant="h3"
                  sx={{
                      border: "2px solid #000000",
                      backgroundColor: "#FFC402",
                      fontWeight: "bold",
                      width: "347px",
                      height: "78px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                  }}
              >
                  ¿Cómo puedes
              </Typography>

              <Typography
                  variant="h3"
                  sx={{
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "80px",
                      width: "228px",
                      height: "68px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      transform: "rotate(-1deg)",
                      marginTop: "-20px",
                  }}
              >
                  participar?
              </Typography>
          </Box>
        </Box>
        <Box>
          {bloques.map((bloque, idx) => (
            <Box
              key={bloque.numero}
              sx={{ 
                mb: 6, 
                display: 'flex',
                flexDirection: { xs: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' },
                bgcolor: idx === 1 || idx === 3 ? '#F8F9FA' : 'transparent',
                borderRadius: 3,
                py: { xs: 2, md: 4 },
                px: { xs: 1, md: 4 }
              }}
            >
              {/* Imagen o espacio para imagen */}
              <Grid gridColumn={{ xs: 'span 12', md: 4 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 180 }}>
                <Box 
                  component="img"
                  src={bloque.img}
                  alt={bloque.titulo}
                  sx={{ 
                    width: '100%',
                    maxWidth: 280,
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </Grid>
              {/* Contenido */}
              <Grid gridColumn={{ xs: 'span 12', md: 8 }}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' }, px: { xs: 0, md: 2 } }}>
                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Typography variant="h3" fontWeight="bold" color="#FFC402" sx={{ fontSize: 40, minWidth: 48 }}>{bloque.numero}.</Typography>
                    <Box>
                      <Typography variant="h6" fontWeight="bold" color="text.primary" sx={{ fontSize: 22 }}>{bloque.titulo}</Typography>
                      <Typography fontWeight={500} color="text.secondary" sx={{ fontSize: 16 }}>{bloque.subtitulo}</Typography>
                    </Box>
                  </Box>
                  <Box mb={2}>
                    {bloque.descripcion.map((linea, i) => (
                      <Box key={i} display="flex" alignItems="flex-start" gap={1} mb={0.5}>
                        <StarIcon sx={{ color: '#FFC402', fontSize: 18, mt: '2px' }} />
                        <Typography color="text.secondary" fontSize={15} textAlign="left">{linea}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ bgcolor: '#FFC402', borderRadius: 2, p: 1.5, display: 'inline-block', mt: 1 }}>
                    <Typography fontWeight={700} color="#222" fontSize={15}>
                      {bloque.destacado}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Contacto */}
      <Box sx={{
        width: '100vw',
        minWidth: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        transform: 'translateX(-50%)',
        bgcolor: '#d3003f',
        color: 'white',
        mt: 8,
        py: 6,
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/circles.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0,
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Únete hoy mismo
          </Typography>
          <Typography align="center" sx={{ mb: 3, maxWidth: 700, mx: 'auto', fontSize: { xs: '1rem', md: '1.15rem' }, fontWeight: 400 }}>
            Ser parte de la Fundación Heinsohn es una oportunidad única para fortalecer tu empresa, cumplir con tu responsabilidad social y cambiar el futuro de cientos de jóvenes. <br />
            Contáctanos hoy y haz parte de este gran propósito.
          </Typography>
          <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
            <Grid gridColumn={{ xs: 'span 12', md: 5 }}>
              <Paper elevation={3} sx={{ p: 4, bgcolor: 'white', color: 'black', textAlign: 'center', borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Box sx={{ fontSize: 48, color: '#d3003f', mb: 1 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="24" fill="#F8F9FA"/><path d="M12 18.5V30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V18.5l-12 7.5-12-7.5Z" stroke="#d3003f" strokeWidth="2"/><path d="M36 16a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v.5l12 7.5 12-7.5V16Z" stroke="#d3003f" strokeWidth="2"/></svg>
                </Box>
                <Typography variant="body1" fontWeight={500} sx={{ mb: 0.5 }}>Escríbenos a</Typography>
                <Typography variant="body1" fontWeight={700} sx={{ wordBreak: 'break-all' }}>fundacionheinsohn@heinsohn.com.co</Typography>
              </Paper>
            </Grid>
            <Grid gridColumn={{ xs: 'span 12', md: 5 }}>
              <Paper elevation={3} sx={{ p: 4, bgcolor: 'white', color: 'black', textAlign: 'center', borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Box sx={{ fontSize: 48, color: '#d3003f', mb: 1 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="24" fill="#F8F9FA"/><path d="M32.5 27.5c-1.5 1.5-3.5 2.5-5.5 2.5s-4-1-5.5-2.5c-1.5-1.5-2.5-3.5-2.5-5.5s1-4 2.5-5.5c1.5-1.5 3.5-2.5 5.5-2.5s4 1 5.5 2.5c1.5 1.5 2.5 3.5 2.5 5.5s-1 4-2.5 5.5Z" stroke="#d3003f" strokeWidth="2"/><path d="M24 18v6l4 2" stroke="#d3003f" strokeWidth="2"/></svg>
                </Box>
                <Typography variant="body1" fontWeight={500} sx={{ mb: 0.5 }}>Llámanos</Typography>
                <Typography variant="body1" fontWeight={700}>601 917 21 72</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Box sx={{ bgcolor: '#FFC402', border: '3px solid #000', borderRadius: 2, px: 3, py: 1.5, display: 'inline-block' }}>
              <Typography fontWeight={700} color="#111" fontSize={20}>
                ¡El futuro del talento está en tus manos!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SoyEmpresa; 