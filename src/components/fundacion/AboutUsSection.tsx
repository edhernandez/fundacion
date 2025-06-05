import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import VectorStar from "@/assets/icons/VectorStar.svg?react";
import VectorStarLine from "@/assets/icons/VectorStarLine.svg?react";

const AboutUsSection = () => {

    const theme = useTheme();
    const mobileBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "7rem",
                paddingBottom: "2rem",
                backgroundColor: "background.paper",
            }}
        >
            {/* Sección de texto */}
            <Box
                sx={{
                    flex: 1,
                    maxWidth: "527px",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                <Typography variant="h1" gutterBottom>
                    ¿Quiénes somos?
                </Typography>
                <Box display={'flex'} flexDirection={"row"} alignItems={'end'} justifyContent={'center'}>
                    <VectorStarLine width={'6rem'} height={'100%'}/>
                    <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "'Outfit', sans-serif" }}>
                        La fundación Heinsonh es una organización privada sin ánimo de lucro
                        creada para contribuir y aportar ayudas y soluciones para la
                        comunidad en los ámbitos sociales, educativos y desarrollo para la
                        sociedad.
                    </Typography>
                </Box>

            </Box>

            {/* Contenedor de imágenes superpuestas */}
            {!mobileBreakpoint && (
                <Box
                    sx={{
                        position: "relative",
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "350px",
                        height: "auto",
                    }}
                >
                    {/* Estrella superior izquierda */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "-20px",
                            left: "-20px",
                            width: "30px",
                            height: "30px",
                        }}
                    >
                        <VectorStar />
                    </Box>

                    {/* Imagen de fondo con rotación de -5.8 grados */}
                    <Box
                        component="img"
                        src="/aboutus.png"
                        alt="Foto institucional"
                        sx={{
                            width: "80%",
                            borderRadius: "20px",
                            position: "absolute",
                            transform: "rotate(-5.8deg)",
                            border: "3px solid black",
                            boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
                        }}
                    />

                    {/* Imagen principal con rotación de 3 grados */}
                    <Box
                        component="img"
                        src="/aboutus.png"
                        alt="Foto institucional"
                        sx={{
                            width: "80%",
                            borderRadius: "20px",
                            position: "relative",
                            transform: "rotate(3deg)",
                            border: "3px solid black",
                            boxShadow: "5px 5px 15px rgba(0,0,0,0.4)",
                        }}
                    />
                    {/* Estrella inferior derecha */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "0px",
                            right: "15px",
                            width: "30px",
                            height: "30px",
                        }}
                    >
                        <VectorStar />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default AboutUsSection;
