import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NextLink from "next/link";
import MainLayout from "src/layouts/main";

Equipe.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default function Equipe() {
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
          <Stack spacing={2}>
            <Typography variant="h4">Qui sommes-nous ?</Typography>
            <Typography variant="body2" paragraph fontWeight="bold">
              Nous sommes l’équipe Olympe, qui a décidé de se mélanger entre les
              années. Nous sommes donc réunis parmi trois CPIA2. Et un seul
              MAALSE Durant cette nuit, nous avons eu comme projet de réussir à
              essayer de sensibiliser les gens envers les changements
              climatiques, à travers un site ergonomique et ludique qui
              permettrait à n’importe qui de comprendre les enjeux en cours. Ce
              site permet donc de se documenter, d’approfondir ses
              connaissances, ou encore de découvrir des nouveaux faits, grâce à
              des sources , vérifier et expérimentés.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
