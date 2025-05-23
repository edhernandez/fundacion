import { Grid, Stack } from "@mui/material";
import CardCourse from "./cardCourse";

const courses = [
    {
        title: "Técnico laboral en auxiliar de sistemas informáticos",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/Logo Cencabo.png"
    },
    {
        title: "Técnico laboral en auxiliar de sistemas informáticos",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/Logo Cencabo.png"
    },
    {
        title: "Técnico laboral en auxiliar de sistemas informáticos",
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
        title: "Técnico laboral en auxiliar de sistemas informáticos",
        totalHorasEspecificas: 456,
        totalHorasprograma: 912,
        logoImage: "/logo-i3-inflexion.png"
    },
];

const CourseSection = () => {
    return (
        <Stack alignItems={'center'} width={'100%'} justifyContent={'center'} mt={4} mb={6}>
            <Grid container spacing={4} justifyContent="center" textAlign="center" sx={{ maxWidth: 1100, mx: 'auto' }}>
                {courses.map((course, i) => (
                    <Grid size={{ xs: 12, md: 4 }} key={i}>
                        <CardCourse
                            title={course.title}
                            totalHorasEspecificas={course.totalHorasEspecificas}
                            totalHorasprograma={course.totalHorasprograma}
                            logoImage={course.logoImage}
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default CourseSection;