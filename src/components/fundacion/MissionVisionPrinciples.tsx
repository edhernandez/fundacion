import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import IdeaIcon from "@/assets/icons/IdeaIcon.svg?react";
import EyeIcon from "@/assets/icons/EyeIcon.svg?react";
import DiamondIcon from "@/assets/icons/DiamondIcon.svg?react";
import VectorStarLine from "@/assets/icons/VectorStarLine.svg?react";

const principles = [
    {
        title: "Transparencia",
        description:
            "Garantizamos la gestión clara y responsable de todos los recursos y acciones de la fundación.",
    },
    {
        title: "Compromiso Social",
        description:
            "Promover la educación y la inserción laboral para jóvenes y el desarrollo de actividades con comunidades vulnerables.",
    },
    {
        title: "Integridad",
        description:
            "Actuamos con honestidad y rectitud en todas nuestras operaciones y relaciones con beneficiarios, donantes y aliados estratégicos.",
    },
    {
        title: "Eficiencia y Responsabilidad",
        description:
            "Optimizamos cada donación y esfuerzo para maximizar el impacto social.",
    },
];

const MissionVisionPrinciples = () => {
    return (
        <Container maxWidth={'lg'} >
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 1, md: '6rem' },
                backgroundColor: "background.paper",
            }}
        >
            <Grid container spacing={3} >

                <Grid size={{ xs: 12, md: 6 }}>
                    <Stack direction={'column'} spacing={3}>
                        {/* Misión */}
                            <Box
                                sx={{
                                    backgroundColor: "#F8F9FA",
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: "16px",
                                    padding: { xs: '16px', md: '32px' },
                                    minWidth: 0,
                                }}
                            >
                                <Box display="flex" alignItems="center" gap={1}>
                                    <IdeaIcon width={'3rem'} />
                                    <Typography variant="h2" fontWeight="bold">
                                        Misión
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    Fomentar educación de calidad para jóvenes, impulsando la tecnología,
                                    la pasión y la innovación como pilares fundamentales de la formación
                                    técnica, desarrollada a través de nuestros aliados, proporcionando a
                                    las empresas los mejores talentos y contribuyendo al desarrollo de
                                    familias, comunidades y del país.
                                </Typography>
                            </Box>

                        {/* Visión */}
                            <Box
                                sx={{
                                    backgroundColor: "#F8F9FA",
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: "16px",
                                    padding: { xs: '16px', md: '32px' },
                                    minWidth: 0,
                                }}
                            >
                                <Box display="flex" alignItems="center" gap={1}>
                                    <EyeIcon width={'3rem'} />
                                    <Typography variant="h2" fontWeight="bold">
                                        Visión
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    Para el año 2030 ser reconocidos en Colombia por transformar vidas de
                                    jóvenes mediante el desarrollo de programas educativos de calidad y
                                    la articulación constante con empresas, fomentando la equidad y el
                                    desarrollo sostenible a través del conocimiento, la innovación y la
                                    tecnología.
                                </Typography>
                            </Box>
                        </Stack>
                </Grid>

                {/* Principios Fundamentales */}
                <Grid size={{ xs: 12, md: 6 }} paddingBottom={'1rem'}>
                    <Box
                        sx={{
                            backgroundColor: "#F8F9FA",
                            minWidth: 0,
                            width: '100%',
                            minHeight: '100%',
                            borderRadius: "16px",
                            padding: { xs: '16px', md: '32px' },
                        }}
                    >
                        <Box display="flex" alignItems="center" gap={1}>
                            <DiamondIcon width={'3rem'} />
                            <Typography variant="h2" fontWeight="bold">
                                Principios Fundamentales
                            </Typography>
                        </Box>
                        <Typography variant="body2" fontWeight="bold" mt={1}>
                            La Fundación Heinsonh se rige por los siguientes valores esenciales:
                        </Typography>
                        <Box mt={2}>
                            {principles.map(({ title, description }) => (
                                <Box key={title} mt={1}>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <VectorStarLine width={"1.5rem"} />
                                        <Typography variant="body2" fontWeight="bold">
                                            {title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" ml={'1.8rem'}>
                                        {description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>


            </Grid>
        </Box>
        </Container>
    );
};

export default MissionVisionPrinciples;
