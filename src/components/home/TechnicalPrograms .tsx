import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Paper, Grid } from "@mui/material";
import ProgramDetail from "./ProgramDetail";
import SchoolIcon from "@mui/icons-material/School";
import CalculateIcon from "@mui/icons-material/Calculate";
import ComputerIcon from "@mui/icons-material/Computer";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const programs = [
    {
        title: "Técnico en Auxiliar de Sistemas Informáticos",
        description: [
            "Formación en soporte técnico, mantenimiento de hardware y software.",
            "Manejo de redes, sistemas operativos y seguridad informática.",
            "Enfoque en habilidades prácticas con tecnologías emergentes."
        ],
        icon: <SchoolIcon color="secondary" />,
    },
    {
        title: "Técnico en Auxiliar Administrativo",
        description: [
            "Formación en contabilidad básica y manejo de software financiero.",
            "Análisis financiero y gestión de costos en empresas."
        ],
        icon: <CalculateIcon color="secondary" />,
    },
    {
        title: "Técnico en Auxiliar Contable y Financiero",
        description: [
            "Instalación, configuración y mantenimiento de sistemas informáticos.",
            "Seguridad informática y redes."
        ],
        icon: <ComputerIcon color="secondary" />,
    },
    {
        title: "Otros Programas en Alianza con el Instituto i3",
        description: ["Consulta nuestros programas en conjunto con el Instituto i3."],
        icon: <AddCircleOutlineIcon color="secondary" />,
    },
];

const TechnicalPrograms = () => {
    const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(programs[0]);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                bgcolor: "white",
                p: 3,
            }}
        >
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
                        Programas Técnicos
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
                        Ofrecidos
                    </Typography>
                </Box>

                {/* Contenedor de lista y detalles */}
                <Grid container spacing={2} margin={2}>
                    {/* Lista de programas */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ boxShadow: 0 }}>
                            <List sx={{padding: 0}}>
                                {programs.map((program, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton
                                            onClick={() => setSelectedProgram(program)}
                                            selected={selectedProgram?.title === program.title}
                                            sx={{p: '1rem', borderRadius: '1rem'}}
                                        >
                                            {program.icon}
                                            <ListItemText primary={program.title} sx={{ ml: 1 }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>

                    {/* Detalle del programa */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box>{selectedProgram && <ProgramDetail program={selectedProgram} />}</Box>
                    </Grid>
                </Grid>

                {/* Aliados Educativos */}
                <Grid container justifyContent="space-between" alignItems="center" spacing={3} p={2} minWidth={'100%'}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                backgroundColor: "#FFC402",
                                padding: "8px 16px",
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '2px solid',
                                minWidth: '290px'
                            }}
                        >
                            Aliados Educativos
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }} textAlign="center">
                        <img src="/Logo Cencabo.png" alt="Cencabo" style={{ height: 50 }} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }} textAlign="center">
                        <img src="/logo-i3-inflexion.png" alt="Instituto i3" style={{ height: 50 }} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default TechnicalPrograms;
