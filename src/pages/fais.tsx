import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NextLink from "next/link";
import MainLayout from "src/layouts/main";
Fais.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default function Fais() {
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
            <Typography variant="h4">Faits Intéressant</Typography>
            <Typography variant="body2" paragraph fontWeight="bold">
              Haut Conseil pour le Climat Informez-vous sur les recommandations
              et les actions politiques nécessaires pour faire face au
              changement climatique sur le site du Haut Conseil pour le Climat.
              Découvrez comment les décideurs peuvent contribuer à une
              transition écologique juste :
              <Link target="_blank" href="https://www.hautconseilclimat.fr/">
                https://www.hautconseilclimat.fr/
              </Link>
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              Bon Pote Rejoignez la communauté engagée de Bon Pote pour
              découvrir des solutions durables et des actions positives.
              Partagez des astuces, des idées et des initiatives pour contribuer
              collectivement à la préservation de notre planète :
              <Link target="_blank" href=" https://bonpote.com/">
                https://bonpote.com/
              </Link>
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              Réseau Action Climat - Urgence Climatique:
            </Typography>
            <Typography variant="body2">Fait Étonnant: </Typography>
            <Typography variant="body2">
              Les experts estiment que si les émissions de gaz à effet de serre
              ne diminuent pas rapidement, nous pourrions atteindre un point de
              non-retour d'ici 2030, avec des conséquences irréversibles pour la
              planète.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              Réseau Action Climat -6e Rapport du GIEC:
            </Typography>
            <Typography variant="body2">Fait Intéressant:</Typography>
            <Typography variant="body2">
              as Le 6e rapport du GIEC indique que des changements rapides et
              sans précédent dans tous les aspects de la société sont
              nécessaires pour limiter le réchauffement climatique à 1,5 degré
              Celsius.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              ADEME (Agence de la Transition Écologique):
            </Typography>{" "}
            <Typography variant="body2">Fait Étonnant:</Typography>
            <Typography variant="body2">
              L'ADEME promeut l'économie circulaire en encourageant la
              réutilisation des déchets. Saviez-vous que chaque français génère
              en moyenne 354 kg de déchets par an ?
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              ADEME - Transitions 2050:
            </Typography>
            <Typography variant="body2">Fait Étonnant:</Typography>
            <Typography variant="body2">
              Le projet Transitions 2050 de l'ADEME explore des scénarios pour
              une France neutre en carbone d'ici 2050, proposant des solutions
              innovantes pour la transition énergétique.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              Nos Gestes Climat:
            </Typography>

            <Typography variant="body2">Fait Intéressant : </Typography>
            <Typography variant="body2">
              Nos Gestes Climat propose des gestes simples pour réduire notre
              impact environnemental quotidien. Par exemple, en éteignant un
              seul robinet qui fuit, vous pouvez économiser jusqu'à 120 litres
              d'eau par jour.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              GIEC (Groupe d'experts intergouvernemental sur l'évolution du
              climat):
            </Typography>
            <Typography variant="body2">Fait Étonnant:</Typography>
            <Typography variant="body2">
              Le GIEC est composé de milliers de scientifiques bénévoles du
              monde entier qui évaluent les connaissances scientifiques sur les
              changements climatiques. Leurs rapports sont la référence mondiale
              en matière de climatologie.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              Hugging Face - Climate Question Answering:
            </Typography>
            <Typography variant="body2">Fait Intéressant : </Typography>
            <Typography variant="body2">
              L'espace Hugging Face dédié à la réponse aux questions climatiques
              utilise l'IA pour rendre les informations sur le climat plus
              accessibles.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              Hugging Face - Climate Question Answering:
            </Typography>
            <Typography variant="body2">Fait Intéressant : </Typography>
            <Typography variant="body2">
              L'espace Hugging Face dédié à la réponse aux questions climatiques
              utilise l'IA pour rendre les informations sur le climat plus
              accessibles.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="body2" paragraph fontWeight="bold">
              Bonpote:
            </Typography>
            <Typography variant="body2">Fait Intéressant : </Typography>
            <Typography variant="body2">
              Bonpote encourage un mode de vie durable en mettant en avant des
              initiatives éco-responsables, prouvant que chaque geste compte
              pour la planète.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
