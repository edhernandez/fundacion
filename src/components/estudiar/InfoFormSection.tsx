import { Box, Typography, TextField, Button, Grid, MenuItem, Checkbox, FormControlLabel, InputAdornment, Modal, IconButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SchoolIcon from '@mui/icons-material/School';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const programas = [
  "Técnico laboral en auxiliar de sistemas informáticos",
  "Técnico Laboral en Auxiliar Administrativo",
  "Técnico Laboral Auxiliar Contable y Financiero",
  "Técnico laboral auxiliar en plataformas tecnológicas y aplicaciones",
  "Técnico Laboral en Auxiliar Administrativo",
  "Técnico Laboral en Auxiliar Contable y Financiero"
];

const ciudades = [
  "Bogotá",
  "Medellín",
  "Cali",
  "Otra",
];

const InfoFormSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm(
      'service_ifmtj2x',
      'template_z9ih7ef',
      form.current,
      'moFSb_jf9Oh8KOrKi'
    )
    .then(() => {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
      form.current?.reset();
      setChecked(false);
    }, () => {
      alert("Error al enviar el correo");
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 700, md: 500 },
        backgroundColor: 'secondary.main',
        py: { xs: 6, md: 10 },
        px: 2,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay circles.png */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/circles.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0,
        }}
      />
      {/* Modal para PDF de política de privacidad */}
      <Modal open={openModal} onClose={() => setOpenModal(false)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', width: { xs: '95vw', md: 700 }, height: { xs: '80vh', md: 700 }, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24, p: 2 }}>
          <IconButton onClick={() => setOpenModal(false)} sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}>
            <CloseIcon />
          </IconButton>
          <iframe
            src="/tratamiento.pdf"
            title="Política de Privacidad"
            width="100%"
            height="100%"
            style={{ border: 'none', borderRadius: 8 }}
          />
        </Box>
      </Modal>
      {/* Contenido del formulario */}
      <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ position: 'relative', zIndex: 1, maxWidth: 1200 }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              background: 'rgba(248,249,250,0.95)',
              borderRadius: '20px',
              boxShadow: 3,
              p: { xs: 2, md: 4 },
              maxWidth: { xs: '100%', md: 552 },
              width: '100%',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1.5px solid #F3EAFB',
            }}
          >
            <Typography variant="h5" fontWeight={700} mb={1} sx={{ textAlign: 'center', fontSize: { xs: 22, md: 28 } }}>
              ¿Quieres más información?
            </Typography>
            <Typography variant="body2" mb={2} sx={{ color: '#444', textAlign: 'center', fontWeight: 400 }}>
              Déjanos tus datos y recibe más información personalizada.<br />¡Queremos estar en contacto contigo!
            </Typography>
            <form ref={form} onSubmit={sendEmail} style={{ width: '100%' }}>
              <TextField
                name="user_name"
                label="Nombre"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: 'none',
                  '& fieldset': {
                    borderColor: '#C8CDE0',
                    borderRadius: '16px',
                  },
                  mb: 1.2
                }}
              />
              {/* Campos correo y celular en una sola línea en móvil */}
              <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
                <TextField
                  name="user_email"
                  label="Correo electrónico"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  margin="dense"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: 'none',
                    '& fieldset': {
                      borderColor: '#C8CDE0',
                      borderRadius: '16px',
                    },
                    width: '50%',
                    mb: 0
                  }}
                />
                <TextField
                  name="user_phone"
                  label="Número de celular"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                  margin="dense"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIphoneIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: 'none',
                    '& fieldset': {
                      borderColor: '#C8CDE0',
                      borderRadius: '16px',
                    },
                    width: '50%',
                    mb: 0
                  }}
                />
              </Box>
              <TextField
                name="user_city"
                label="¿En qué ciudad estás?"
                variant="outlined"
                fullWidth
                required
                margin="dense"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: 'none',
                  '& fieldset': {
                    borderColor: '#C8CDE0',
                    borderRadius: '16px',
                  },
                  mb: 1.2
                }}
              />
              <TextField
                name="user_program"
                label="¿Cuál es tu programa de interés?"
                select
                fullWidth
                required
                margin="dense"
                defaultValue=""
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: 'none',
                  '& fieldset': {
                    borderColor: '#C8CDE0',
                    borderRadius: '16px',
                  },
                  mb: 1.2
                }}
              >
                {programas.map((programa, idx) => (
                  <MenuItem key={idx} value={programa}>{programa}</MenuItem>
                ))}
              </TextField>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleCheck}
                    required
                    name="authorization"
                    color="primary"
                  />
                }
                label={<Typography variant="caption">Autorizo el tratamiento de mis datos personales de acuerdo con la <span style={{ color: '#d3003f', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setOpenModal(true)}>Política de Privacidad</span> de la Fundación Heinsohn Conecta.</Typography>}
                sx={{ alignItems: 'flex-start', mt: 1, mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{
                  fontWeight: 'bold',
                  borderRadius: '12px',
                  py: 1.2,
                  fontSize: 18,
                  mt: 1,
                  mb: 1,
                  background: '#D20F36',
                  color: 'white',
                  boxShadow: 'none',
                  '&:hover': {
                    background: '#b80c2a',
                  },
                }}
                disabled={!checked}
              >
                ¡Enviar mi información!
              </Button>
              {success && <Typography color="success.main" mt={2} textAlign="center">¡Información enviada correctamente!</Typography>}
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src="/PersonaCafe.png"
            alt="Persona con café"
            sx={{ maxHeight: 620, maxWidth: 480, borderRadius: '20px', objectFit: 'cover', boxShadow: 3 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoFormSection; 