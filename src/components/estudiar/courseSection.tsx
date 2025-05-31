import { Grid, Stack, Box } from "@mui/material";
import CardCourse from "./cardCourse";

const courses = [
    {
        title: "Técnico laboral en auxiliar de sistemas informáticos",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/Logo Cencabo.png"
    },
    {
        title: "Técnico Laboral en Auxiliar Administrativo",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/Logo Cencabo.png"
    },
    {
        title: "Técnico Laboral Auxiliar Contable y Financiero",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/Logo Cencabo.png"
    },
    {
        title: "Técnico laboral auxiliar en plataformas tecnológicas y aplicaciones",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/logo-i3-inflexion.png"
    },
    {
        title: "Técnico Laboral en Auxiliar Administrativo",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/logo-i3-inflexion.png"
    },
    {
        title: "Técnico Laboral en Auxiliar Contable y Financiero",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/logo-i3-inflexion.png"
    },
];

const CourseSection = () => {
    return (
        <Stack alignItems={'center'} width={'100%'} justifyContent={'center'} mt={4} mb={6}>
            <Grid container spacing={4} justifyContent="center" textAlign="center" sx={{ maxWidth: { xs: '100%', md: 1100 }, mx: 'auto', px: { xs: 3, md: 0 } }}>
                {courses.map((course, i) => (
                    <Grid item xs={12} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ width: { xs: '100%', md: 'auto' }, maxWidth: { xs: 340, md: 'none' } }}>
                            <CardCourse
                                title={course.title}
                                totalHorasEspecificas={course.totalHorasEspecificas}
                                totalHorasprograma={course.totalHorasprograma}
                                logoImage={course.logoImage}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default CourseSection;