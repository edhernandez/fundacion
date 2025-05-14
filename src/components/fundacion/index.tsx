import { Box } from "@mui/material";
import AboutUsSection from "./AboutUsSection";
import MissionVisionPrinciples from "./MissionVisionPrinciples";
import VolunteersWorkTeam from "./VolunteersWorkTeam";
const Fundacion = () => {

    return (
        <Box>
            <AboutUsSection />
            <MissionVisionPrinciples/>
            <VolunteersWorkTeam/>
        </Box>
    );
};

export default Fundacion;
