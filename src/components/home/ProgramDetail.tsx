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
                    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={1}>
                        <Box sx={{ width: '20px', height: '20px' }}>
                            <StarLine height={'20px'} width={'20px'} />
                        </Box>

                        <Typography key={index} variant="body1" sx={{ mb: 1 }}>
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
                        onClick={() => navigate("/participar-empresa")}
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
