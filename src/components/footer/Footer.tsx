import { Box, Typography, TextField, IconButton, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote"; // No hay icono oficial en MUI
import Vector from "@/assets/icons/VectorW.svg?react";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#0A0A0A", color: "white", padding: '56px 80px 56px 80px' }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                {/* Logo e información */}
                <Box display={'flex'} flexDirection={'column'} gap={'1rem'} justifyContent={'center'} alignItems={'center'}>
                    <img src="/logoConectaB.png" alt="Conecta Logo" style={{ height: 77 }} />
                    <img src="/logoYoDecidoB.png" alt="Decido creer Logo" style={{ height: 50 }} />
                </Box>

                {/* Contacto */}
                <Box display={'flex'} flexDirection={'column'} gap={'1rem'} justifyContent={'center'} alignItems={'flex-start'}>
                    <Typography variant="h2" fontWeight={600} color="white">Contáctanos</Typography>
                    <Typography variant="h5" fontWeight={300} color="white">601 917 21 72 - Colombia</Typography>
                    <Typography variant="h5" fontWeight={300} color="white">fundacionconecta@heinsohn.com.co </Typography>
                    <Typography variant="h5" fontWeight={300} color="white">
                        Carrera 13 # 82 - 49 Piso 6, Edificio Plaza Prestige, Bogotá - Colombia
                    </Typography>
                    {/* Campo de suscripción */}
                    <Box sx={{ display: "flex", alignItems: "center", background: "white", borderRadius: 50, px: 2, width: '100%', }}>
                        <TextField
                            placeholder="¡Déjanos tu correo, te contactaremos!"
                            variant="standard"
                            sx={{ flex: 1 }}
                        />
                        <IconButton color="secondary">
                            <Box
                                sx={{
                                    backgroundColor: "secondary.main",
                                    borderRadius: "50%",
                                    width: 30,
                                    height: 30,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Vector width={20} height={20} fill="none" />
                            </Box>
                        </IconButton>
                    </Box>
                </Box>

                {/* Redes sociales */}
                <Box display={'flex'} justifyContent={'top'} alignItems={'left'} flexDirection={'column'}>
                    <Typography variant="h2" fontWeight={600} color="white" mb={1} minWidth={'200px'}>
                        Síguenos
                    </Typography>
                    <Grid container spacing={0} display={'flex'} justifyContent={'center'} alignItems={'left'} flexDirection={'column'} >
                        <Grid size={{ xs: 12, md: 12 }} >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <IconButton component="a" href="/" target="_blank" color="inherit" sx={{pl: 0}}>
                                <FacebookIcon />
                            </IconButton>
                            <Typography variant="h5" color="white" minWidth={'200px'}>Facebook</Typography>
                        </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 12 }} >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <IconButton component="a" href="/" target="_blank" color="inherit" sx={{pl: 0}}>
                                <InstagramIcon />
                            </IconButton>
                            <Typography variant="h5" color="white">Instagram</Typography>
                        </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 12 }} >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <IconButton component="a" href="/" target="_blank" color="inherit" sx={{pl: 0}}>
                                <TikTokIcon />
                            </IconButton>
                            <Typography variant="h5" color="white">TikTok</Typography>
                        </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;