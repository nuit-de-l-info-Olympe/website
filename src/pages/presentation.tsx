import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NextLink from "next/link";
import MainLayout from "src/layouts/main";
Presentation.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function Presentation() {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Box
          sx={{
            background: theme.palette.primary.contrastText,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Stack>
            <Typography variant="h4" fontWeight="bold">
              Présentation :
            </Typography>
            <Typography fontWeight="bold" paragraph></Typography>
            <Typography fontWeight="body2" paragraph>
              Comprendre pour Agir : Notre objectif est de fournir des clés de
              compréhension accessibles à tous. Le changement climatique peut
              sembler complexe, mais il concerne chacun d'entre nous. Ensemble,
              nous pouvons démêler les fausses informations des solutions
              réelles. C'est le moment d'agir, informés et inspirés.
            </Typography>
            <Typography fontWeight="body2" paragraph>
              Explorez les Solutions Éprouvées : Sur ce site, nous mettons en
              lumière des solutions efficaces à grande échelle, basées sur des
              données chiffrées et des sources fiables. Nous croyons en la
              puissance des actions collectives et en la nécessité d'une
              approche holistique pour réduire les émissions de gaz à effet de
              serre.
            </Typography>
            <Typography fontWeight="body2" paragraph>
              Changer le Monde, un Pas à la Fois : La transition écologique doit
              être inclusive et juste socialement. Nous reconnaissons que chaque
              personne a un rôle à jouer, et nous encourageons des actions
              positives, du niveau individuel aux politiques publiques.
              N'oublions personne en chemin.
            </Typography>
            <Typography fontWeight="body2" paragraph>
              Explorez, Apprenez, Agissez : Que vous soyez novice en matière de
              climat ou déjà engagé, ce site offre des ressources diverses pour
              tous les niveaux de connaissances. Ensemble, nous pouvons
              comprendre, inspirer et créer un avenir durable.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
