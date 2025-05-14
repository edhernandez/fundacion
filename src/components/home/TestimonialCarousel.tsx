import React, { useState } from "react";
import { Box, Card, CardContent, Typography, IconButton, Divider, Stack, useTheme, useMediaQuery } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
    {
        rating: 4.9,
        text: "Los programas de formación y el apoyo de la fundación son de gran calidad. Brindan herramientas y conocimientos clave para el desarrollo personal y profesional. Gracias a mentores y voluntarios, esta experiencia es invaluable. Sin duda, es una iniciativa transformadora que recomiendo a quienes buscan aprender y crecer.",
        name: "Camila Andrea Moreno Estupiñan",
    },
    {
        rating: 4.7,
        text: "La fundación ha sido un gran apoyo en mi formación. Sus programas me han brindado conocimientos valiosos y nuevas oportunidades. La dedicación de los mentores hace que aprender sea motivador y accesible. Sin duda, es una iniciativa que cambia vidas y recomiendo completamente su labor.",
        name: "Edwin Andres Parra Morales",
    },
    {
        rating: 4.8,
        text: "Gracias a la fundación, he adquirido habilidades que antes parecían inalcanzables. Su enfoque en la educación y la tecnología abre puertas y transforma realidades. Los voluntarios hacen que cada experiencia sea enriquecedora. Es un programa que realmente impulsa el crecimiento personal y .",
        name: "Juan Jose Vaez Naranjo",
    },
    {
        rating: 4.6,
        text: "Me ha permitido desarrollarme profesionalmente...",
        name: "Laura Fernanda Pérez",
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