import { Box, Button, Divider, Typography } from "@mui/material";
import Vector from "@/assets/icons/Vector.svg?react";
import StarLine from "@/assets/icons/VectorStarLine.svg?react";
import { useNavigate } from "react-router";

interface ProgramDetailProps {
    program: {
        title: string;
        description: string[];
    };
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ program }) => {
    const navigate = useNavigate();
    return (
        <Box sx={{ p: '1.5rem', bgcolor: "#EFF2F5", borderRadius: '1rem', }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {program.title}
            </Typography>

            <Divider />

            <Box sx={{ display: 'flex', flexDirection: 'column', pt: '1.5rem', gap:'1.5rem'}}>

                {program.description.map((item, index) => (
                    <Box key={index} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={1}>
                        <Box sx={{ width: '20px', height: '20px' }}>
                            <StarLine height={'20px'} width={'20px'} />
                        </Box>

                        <Typography variant="body1" sx={{ mb: 1, fontFamily: "'Outfit', sans-serif" }}>
                            {item}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", width: "100%", pt: 2 }}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "50px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Button
                        variant="contained"
                        component="a"
                        href="https://forms.office.com/r/qYeAyV3ngP"
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={
                            <Box
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    width: 30,
                                    height: 30,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Vector width={20} height={20} fill="none" stroke={'secondary.main'} />
                            </Box>
                        }
                        sx={{
                            fontWeight: "bold",
                            backgroundColor: 'secondary.main',
                            color: "white",
                            borderRadius: "50px",
                            borderColor: 'secondary.main',
                            fontSize: '1rem',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            lineHeight: '100%',
                            width: "100%",
                            textDecoration: 'none',
                            "&:hover": {
                                backgroundColor: 'secondary.dark',
                            },
                        }}
                    >
                        ¡Quiero inscribirme!
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProgramDetail;
