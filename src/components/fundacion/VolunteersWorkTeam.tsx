import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import VectorStar from "@/assets/icons/VectorStar.svg?react";

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
                <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Todos los recursos económicos obtenidos a través de donaciones de personas, empresas o programas de apoyo serán destinados a los programas de formación, captación y empleabilidad de los jóvenes, como también a los destinados para comunidades.
                  </Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" gap={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    La fundación limitará a un <b>porcentaje mínimo</b> sus fondos para fines administrativos, operativos o de remuneración de personal.
                  </Typography>
                </Box>
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
                <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Publicaremos periódicamente informes de gestión y rendición de cuentas, asegurando que los donantes y aliados conozcan el impacto de su apoyo.
                  </Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" gap={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Se implementarán auditorías y controles internos para garantizar el uso adecuado de los recursos y evitar cualquier irregularidad.
                  </Typography>
                </Box>
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
                <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Trabajamos para garantizar que todos los jóvenes, sin distinción de género, raza, religión o condición socioeconómica, tengan acceso a oportunidades de formación y empleo.
                  </Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" gap={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Promovemos la equidad y el respeto en todas nuestras interacciones, asegurando un ambiente libre de discriminación y corrupción.
                  </Typography>
                </Box>
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
                <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Nos comprometemos a mejorar constantemente nuestros programas y procesos para garantizar un mayor impacto en la vida de los beneficiarios.
                  </Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" gap={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Escuchamos activamente a la comunidad, a los voluntarios y a los aliados estratégicos para adaptar y fortalecer nuestras iniciativas.
                  </Typography>
                </Box>
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
                <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Ningún miembro de la fundación podrá obtener beneficios personales derivados de su relación con la organización.
                  </Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Se evitarán prácticas que comprometan la imparcialidad en la selección de beneficiarios y aliados estratégicos.
                  </Typography>
                </Box>
                <Box display="flex" alignItems="flex-start" gap={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Toda relación con empresas y donantes será gestionada con absoluta ética, evitando cualquier acto que pueda interpretarse como un conflicto de intereses.
                  </Typography>
                </Box>
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
                <Box display="flex" alignItems="flex-start" gap={1}>
                  <VectorStar width={18} height={18} style={{ marginTop: 4 }} />
                  <Typography>
                    Todos los miembros, voluntarios y aliados de la Fundación Heinsohn Conecta se comprometen a respetar este Código de Ética y a trabajar con integridad y compromiso por el bienestar común.
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
        </Grid>
      </Grid>
      </Box>
    
  );
};

export default VolunteersWorkTeam;
