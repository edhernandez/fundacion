import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import VectorCheckR from "@/assets/icons/VectorCheckR.svg?react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    title: string;
    totalHorasEspecificas: number;
    totalHorasprograma: number;
    logoImage: string;
}

const CardCourse: React.FC<Props> = ({title, totalHorasEspecificas, totalHorasprograma, logoImage}) => {
    return (
        <Card sx={{
            bgcolor: '#F8F9FA',
            borderRadius: '16px',
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.07)',
            p: 0,
            minWidth: 260,
            maxWidth: 340,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        }}>
            <CardContent sx={{ width: '100%', px: '32px!important' }}>
                <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'} alignItems="flex-start" width="100%">
                    <img src={logoImage} alt="Logo institución" style={{ height: 38, width: 110, marginBottom: 8 }} />
                    <Typography fontSize={'20px'} fontWeight={700} sx={{ mb: 1, color: '#222' }}>
                        {title}
                    </Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={'0.25rem'} alignItems="flex-start" width="100%">
                        <Box display={'flex'} alignItems={'center'} gap={1}>
                            <Typography fontSize={15} color="#222">Fase Lectiva</Typography>
                            <VectorCheckR />
                        </Box>
                        <Box display={'flex'} alignItems={'center'} gap={1}>
                            <Typography fontSize={15} color="#222">Fase Práctica</Typography>
                            <VectorCheckR />
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width="100%">
                            <Typography fontSize={15} color="#222">Total Horas Específicas</Typography>
                            <Typography fontWeight={700} color="#222">{totalHorasEspecificas}</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width="100%">
                            <Typography fontSize={15} color="#222">Total Horas Programa</Typography>
                            <Typography fontWeight={700} color="#222">{totalHorasprograma}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Button
                    variant="outlined"
                    component="a"
                    href="https://forms.office.com/r/qYeAyV3ngP"
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    endIcon={<ArrowForwardIosIcon />}
                    sx={{
                        mt: 2,
                        borderRadius: '30px',
                        fontWeight: 700,
                        fontSize: 16,
                        py: 1.2,
                        textTransform: 'none',
                        boxShadow: 'none',
                        borderColor: '#D20F36',
                        color: '#D20F36',
                        background: '#fff',
                        textDecoration: 'none',
                        '&:hover': {
                            background: '#fff',
                            borderColor: '#D20F36',
                        },
                    }}
                >
                    Realizar inscripción
                </Button>
            </CardContent>
        </Card>
    );
}

export default CardCourse;