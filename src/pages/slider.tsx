import { useTheme } from "@mui/material/styles";
import { Box, Typography, Card, Container } from "@mui/material";
import { m } from "framer-motion";
import { useRef } from "react";
import Carousel, { CarouselArrows } from "src/components/carousel";
import Link from "next/link";

const services = [
  {
    title: "Réseau Action Climat - Urgence Climatique",
    text: "Explorez les actions urgentes nécessaires pour faire face au changement climatique sur le site du Réseau Action Climat. Informez-vous et découvrez comment vous pouvez contribuer à la lutte pour un avenir durable : ",
    link: "https://reseauactionclimat.org/urgence-climatique",
  },
  {
    title: "Réseau Action Climat - 6e Rapport du GIEC",
    text: "Plongez dans les solutions face au changement climatique en consultant le 6e rapport du GIEC sur le site du Réseau Action Climat. Comprenez les enjeux actuels et découvrez les voies vers un avenir plus respectueux de l'environnement : ",
    link: "https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/",
  },
  {
    title: "ADEME - Agence de la Transition Écologique",
    text: "Visitez le site de l'ADEME pour accéder à des ressources précieuses sur la transition écologique. Découvrez des données, des conseils pratiques et des initiatives visant à promouvoir un mode de vie respectueux de l'environnement :  ",
    link: "https://www.ademe.fr/",
  },
  {
    title: "ADEME - Data ADEME",
    text: "Explorez les données environnementales sur le site Data ADEME. Accédez à des informations approfondies qui peuvent enrichir votre compréhension des enjeux liés au climat et à la transition énergétique :",
    link: " https://data.ademe.fr/-",
  },
  {
    title: "ADEME - Data Transitions 2050",
    text: "Plongez dans les projections et les scénarios de transition énergétique sur Data Transitions 2050 de l'ADEME. Comprenez les changements nécessaires pour atteindre les objectifs climatiques et explorez les données associées : ",
    link: " https://data-transitions2050.ademe.fr/",
  },
  {
    title: "GIEC - Groupe d'Experts",
    text: "Adoptez des gestes concrets pour le climat en visitant le site Nos Gestes Climat. Découvrez des conseils pratiques pour réduire votre empreinte carbone et contribuer à la préservation de la planète :",
    link: " https://nosgestesclimat.fr/",
  },
  {
    title: "Nos Gestes Climat",
    text: "Intergouvernemental sur l'Évolution du Climat Accédez aux rapports scientifiques de référence sur le changement climatique sur le site du GIEC. Informez-vous sur les dernières recherches et évaluations effectuées par les experts climatologues du monde entier :",
    link: "https://www.ipcc.ch/",
  },
  {
    title: "Hugging Face - Climate Question Answering",
    text: "Explorez des réponses aux questions sur le climat grâce au modèle de question-réponse d'Hugging Face. Obtenez des informations instantanées sur divers aspects du changement climatique :",
    link: "https://huggingface.co/spaces/Ekimetrics/climate-question-answering",
  },
];

export default function Slider() {
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: "0" },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <>
      <Container>
        <Box sx={{ my: 10 }}>
          <m.div>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4">Comment bien s'informer ? </Typography>
            </Box>
            <Box sx={{ position: "relative", mb: 10, overflow: "hidden" }}>
              <CarouselArrows
                filled
                icon="material-symbols:chevron-right"
                onNext={handleNext}
                onPrevious={handlePrev}
              >
                <Carousel ref={carouselRef} {...carouselSettings}>
                  {services.map((value, index) => (
                    <Box key={`services${index}`} sx={{ py: 4 }}>
                      <Card sx={{ m: 1 }}>
                        <Box sx={{ textAlign: "center", px: 4 }}>
                          <Typography
                            variant="inherit"
                            component="h3"
                            sx={{ fontSize: 18 }}
                          >
                            {value.title}
                          </Typography>
                          <Typography variant="body2">{value.text}</Typography>
                          <Link target="_blank" href={value.link}>
                            {value.link}
                          </Link>
                        </Box>
                      </Card>
                    </Box>
                  ))}
                </Carousel>
              </CarouselArrows>
            </Box>
          </m.div>
        </Box>
      </Container>
    </>
  );
}
