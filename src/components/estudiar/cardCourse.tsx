import { Box, Card, CardContent, Typography } from "@mui/material";
import VectorCheckR from "@/assets/icons/VectorCheckR.svg?react";

interface Props {
    title: string;
    totalHorasEspecificas: number;
    totalHorasprograma: number;
}

const CardCourse: React.FC<Props> = ({title, totalHorasEspecificas, totalHorasprograma}) => {
    return (
        <Card>
            <CardContent>
                <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                    <img src="/Logo Cencabo.png" alt="Cencabo" style={{ height: 48, width: 114 }} />
                    <Typography fontSize={'22px'} fontWeight={'bold'}>
                        {title}
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography>
                                Fase Lectiva
                            </Typography>
                            <VectorCheckR />
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography>
                                Fase Practica
                            </Typography>
                            <VectorCheckR />
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography>
                                Total Horas Especificas
                            </Typography>
                            <Typography>
                                {totalHorasEspecificas}
                            </Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography>
                                Total Horas Programa
                            </Typography>
                            <Typography>
                                {totalHorasprograma}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default CardCourse;