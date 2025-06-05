import React, { useState } from "react";
import { Box, Card, CardContent, Typography, IconButton, Divider, Stack, useTheme, useMediaQuery } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
    {
        rating: 4.9,
        text: "HEINSOHN para mí ha sido llena de oportunidad y enseñanzas. Estoy agradecida con la compañía y, especialmente, con las personas que se toman el tiempo de enseñarme y compartir sus conocimientos. Ha representado una valiosa oportunidad para crecer tanto profesional como personalmente. Me enseña lo que es la resiliencia en todos sus entornos, me quede o me vaya heinsohn es el inicio de una vida de éxito.",
        name: "Yuli Surley Saavedra Pérez",
    },
    {
        rating: 4.7,
        text: "Mi experiencia en Heinsohn ha sido muy valiosa para mí, a lo largo del proceso, pude aprender cosas nuevas, desarrollar habilidades que antes no había explorado y crecer a nivel personal y laboral, me siento agradecida por la oportunidad y por todo el aprendizaje que me llevo, está experiencia me motiva a seguir mejorando.",
        name: "Karol Valentina Muñoz Bocanegra",
    },
    {
        rating: 4.8,
        text: "La experiencia en Heinsohn para mí ha sido una puerta de oportunidad, una etapa de aprendizaje y retos contantes donde eh fortalecido mis conocimientos en diferentes áreas, lo cual ha contribuido en mi continuo desarrollo como futura profesional y me ha ayudado a fortalecer mi área personal.",
        name: "María Fernanda Benavides Cajamarca",
    },
    {
        rating: 4.6,
        text: "Mi experiencia en Heinsohn ha sido llena de oportunidades, de nuevas experiencias que me han ayudado en mi nivel académico y laboral, agradezco al equipo con el que me toco porque cada día tuvieron la iniciativa y la disposición para explicarme y poder aprender. Es un gran aprendizaje el que me llevo de esta empresa, tanto las personas como el ambiente laboral me hacen sentir en mi como en mi casa. Agradezco a la empresa Heinsohn por abrirme sus puertas y motivarme cada dia a ser mejor.",
        name: "Daniel David Barrera Barazarte",
    },
    {
        rating: 4.5,
        text: "En mi experiencia en Heinsohn ha sido una gran oportunidad. Ha sido una etapa llena de aprendizajes y retos constantes, donde he podido fortalecer mis conocimientos en diferentes áreas. Todo esto ha contribuido a mi crecimiento profesional y también me ha ayudado mucho en diferentes aspectos.",
        name: "Elkin Sebastián Sanceno Garibello",
    },
    {
        rating: 4.7,
        text: "En mi experiencia Heinsohn ha sido muy enriquecedora tanto a nivel profesional como personal. Durante mi tiempo en la empresa, he tenido la oportunidad de trabajar en proyectos desafiantes y me han permitido fortalecer mis habilidades que me permitieron aplicar los conocimientos adquiridos en mi formación académica. Además, recibí acompañamiento constante por parte de profesionales de mi área y de paso pude aprender y tener una mejor habilidad en ese manejo de temas que no tenía previos conocimientos del cual se me hizo divertido e interesante.",
        name: "Santiago Alexander García Soto",
    },
    {
        rating: 4.8,
        text: "Mi experiencia con heinsohn ha Sido el hecho de enfrentarme a una vida laboral, de una forma amena, en un ambiente amigable. Estoy agradecida día a día con heinsohn por abrirme sus puertas porque he aprendido tanto, a nivel empresarial y a nivel personal. Mi experiencia en heinsohn ha Sido mágica, en dónde me he enfrentado a retos que no pensé que la vida me fuera a colocar y aun así, me han dado la confianza y comodidad de entender aprender y crecer para mí y por mí, todo esto de forma dinámica, divertida y enriquecedora enamorándome cada día más de lo que hago.",
        name: "Zaira Milena Rentería Cortes",
    },
];

const TestimonialCarousel: React.FC = () => {
    const theme = useTheme();
    const mobileBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    const [index, setIndex] = useState(0);
    const itemsToShow = mobileBreakpoint ? 1 : 2;

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - itemsToShow : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev >= testimonials.length - itemsToShow ? 0 : prev + 1));
    };

    return (
        <Stack direction={mobileBreakpoint ? "column" : "row"} alignItems="center" sx={{ p: 4, background: "#d3003f" }}>
            <Box
                sx={{
                    flex: 1,
                    color: "white",
                    textAlign: "center",
                    backgroundImage: "url('/student1.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    height: "489.61px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    position: "relative",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "180px",
                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #d3003f 100%)",
                    },
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        padding: "30px",
                        textAlign: "initial",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: "120px",
                            lineHeight: "124px",
                            letterSpacing: "0%",
                            color: "white",
                        }}
                    >
                        4.7
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: "22px",
                            lineHeight: "24px",
                            letterSpacing: "0%",
                            color: "white",
                        }}
                    >
                        Esto dicen nuestros egresados de diferentes programas
                    </Typography>
                </Box>
            </Box>


            {/* Carrusel de Testimonios */}
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                <IconButton onClick={prevSlide} sx={{ color: "white" }}>
                    <ArrowBackIosIcon />
                </IconButton>
                {testimonials.slice(index, index + itemsToShow).map((testimonial, i) => (
                    <Card key={i} sx={{ p: 2, m: 1, flex: 1, borderRadius: '16px', minHeight: '440px', minWidth:'300px' }}>
                        <CardContent>
                            <Box display="flex" alignItems="flex-end" justifyContent="flex-start">
                                <Typography variant="h1" fontWeight="bold" sx={{ mr: 1 }}>
                                    {testimonial.rating}
                                </Typography>
                                {[...Array(5)].map((_, j) => (
                                    <StarIcon key={j} sx={{ color: j < Math.round(testimonial.rating) ? "gold" : "gray" }} />
                                ))}
                            </Box>
                            <Divider sx={{py: 1}}/>
                            <Typography variant="body2" mt={1} textAlign='justify'>
                                {testimonial.text}
                            </Typography>
                            <Typography variant="subtitle2" fontWeight="bold" mt={2}>
                                {testimonial.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <IconButton onClick={nextSlide} sx={{ color: "white" }}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default TestimonialCarousel;