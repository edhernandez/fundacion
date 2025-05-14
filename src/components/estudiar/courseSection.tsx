import { Grid, Stack } from "@mui/material";
import CardCourse from "./cardCourse";

const courses = [
    {
        title: "Técnico laboral en auxiliar de sistemas informáticos",
        totalHorasEspecificas: 912,
        totalHorasprograma: 1382,
    },
    {
        title: "Técnico laboral en auxiliar de sistemas informáticos",
        totalHorasEspecificas: 912,
        totalHorasprograma: 1382,
    },
    {
        title: "Técnico laboral en auxiliar de sistemas informáticos",
        totalHorasEspecificas: 912,
        totalHorasprograma: 1382,
    },
];

const CourseSection = () => {
    return (
        <Grid container spacing={2} px={2} py={2} justifyContent="center" textAlign="center">
            {courses.map((course, i) => (
                <Grid size={{ xs: 12, md: 3 }} key={i}>
                    <CardCourse
                        title={course.title}
                        totalHorasEspecificas={course.totalHorasEspecificas}
                        totalHorasprograma={course.totalHorasprograma}
                    />
                </Grid>
            ))}

        </Grid>
    );
}

export default CourseSection;