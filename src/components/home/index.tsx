import { Box } from "@mui/material";
import TechnicalPrograms from "./TechnicalPrograms ";
import HeroSection from "./HeroSection";
import TestimonialCarousel from "./TestimonialCarousel";
const Home = () => {

    return (
        <Box>
            {/* Sección Hero */}
            <HeroSection />

            {/* Sección de Programas */}
            <TechnicalPrograms />

            {/*Sección de testimonios */}
            <TestimonialCarousel />
        </Box>
    );
};

export default Home;
