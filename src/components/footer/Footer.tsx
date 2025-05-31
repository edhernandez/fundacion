import { Box, Typography, IconButton, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote"; // No hay icono oficial en MUI
import Vector from "@/assets/icons/VectorW.svg?react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
    const form = useRef<HTMLFormElement>(null);
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs.sendForm(
            'service_ifmtj2x',      // Reemplaza con tu Service ID de EmailJS
            'template_7agu79a',     // Reemplaza con tu Template ID de EmailJS
            form.current,
            'moFSb_jf9Oh8KOrKi'       // Reemplaza con tu Public Key de EmailJS
        )
        .then((result) => {
            setSuccess(true);
            setEmail("");
        }, (error) => {
            alert("Error al enviar el correo");
        });
    };

    return (
        <Box sx={{ backgroundColor: "#0A0A0A", color: "white", padding: { xs: '32px 8px', md: '56px 80px' } }}>
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
                    {/* Campo de suscripción funcional con EmailJS */}
                    <form ref={form} onSubmit={sendEmail} style={{ width: "100%", display: 'flex', alignItems: 'center', background: 'white', borderRadius: 50, padding: '0 16px' }}>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="¡Déjanos tu correo, te contactaremos!"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            style={{ flex: 1, border: "none", outline: "none", fontSize: 16, background: 'transparent', padding: '12px 0' }}
                        />
                        <IconButton color="secondary" type="submit">
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
                        {success && <span style={{ color: "#2ecc40", marginLeft: 8 }}>¡Correo enviado!</span>}
                    </form>
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