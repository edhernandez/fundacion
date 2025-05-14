import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const VolunteersWorkTeam = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "secondary.main",
        py: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {/* Imagen con opacidad */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/circles.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04, // Opacidad aplicada solo a la imagen
        }}
      />
      <Grid container spacing={3} px={'108px'}>
        <Grid size={{ xs: 12, md: 6 }} >
          
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ boxShadow: 0 }}
              >
                <Typography fontWeight={'bold'} component="span">Uso Responsable de los Recursos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ boxShadow: 0 }}
              >
                <Typography fontWeight={'bold'} component="span">Transparencia y Rendición de Cuentas</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ boxShadow: 0 }}
              >
                <Typography fontWeight={'bold'} component="span">Compromiso con la Comunidad y la Inclusión</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ boxShadow: 0 }}
              >
                <Typography fontWeight={'bold'} component="span">Compromiso con la Mejora Continua</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ boxShadow: 0 }}
              >
                <Typography fontWeight={'bold'} component="span">Conflicto de Intereses y Ética en la Gestión</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ boxShadow: 0 }}
              >
                <Typography fontWeight={'bold'} component="span">Declaración Final</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          
        </Grid>
      </Grid>
      </Box>
    
  );
};

export default VolunteersWorkTeam;
