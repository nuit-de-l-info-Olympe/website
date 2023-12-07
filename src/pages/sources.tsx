import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NextLink from "next/link";

export default function Source() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.primary.contrastText,
        p: 4,
        borderRadius: 2,
      }}
    >
        <Typography variant="h4" fontWeight="bold">
          Sources :
        </Typography>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Button
          variant="soft"
          target="_blank"
          href="https://reseauactionclimat.org/urgence-climatique/"
        >
          https://reseauactionclimat.org/urgence-climatique/
        </Button>
        <Button
          variant="soft"
          target="_blank"
          href="https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/"
        >
          https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/
        </Button>
        <Button variant="soft" target="_blank" href="https://www.ademe.fr/">
          https://www.ademe.fr/
        </Button>
        <Button variant="soft" target="_blank" href="https://data.ademe.fr/-">
          https://data.ademe.fr/-
        </Button>
        <Button
          variant="soft"
          target="_blank"
          href="https://data-transitions2050.ademe.fr/"
        >
          https://data-transitions2050.ademe.fr/
        </Button>
        <Button
          variant="soft"
          target="_blank"
          href="https://nosgestesclimat.fr/"
        >
          https://nosgestesclimat.fr/
        </Button>
        <Button variant="soft" target="_blank" href="https://www.ipcc.ch/">
          https://www.ipcc.ch/
        </Button>
        <Button
          variant="soft"
          target="_blank"
          href="https://huggingface.co/spaces/Ekimetrics/climate-question-answering"
        >
          https://huggingface.co/spaces/Ekimetrics/climate-question-answering
        </Button>
        <Button
          variant="soft"
          target="_blank"
          href="https://www.hautconseilclimat.fr/"
        >
          https://www.hautconseilclimat.fr/
        </Button>
        <Button variant="soft" target="_blank" href="https://bonpote.com/">
          https://bonpote.com/
        </Button>
      </Stack>
    </Box>
  );
}
