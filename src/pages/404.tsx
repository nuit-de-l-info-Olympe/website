import { Button, Typography, Card } from "@mui/material";
import { m } from "framer-motion";
import NextLink from "next/link";
import CompactLayout from "src/layouts/compact";

Page404.getLayout = (page: React.ReactElement) => (
  <CompactLayout>{page}</CompactLayout>
);

export default function Page404() {
  return (
    <>
      <Card sx={{ py: 5, mt: 5 }}>
        <Typography variant="h4" component="h1">
          Page introuvable !
        </Typography>

        <Typography>
          {`Désolé, nous n'avons pas pu trouver la page que vous recherchez. Peut-être avez-vous mal
            saisi l'url ? Merci de vérifier.`}
        </Typography>

        <Button component={NextLink} href="/" size="large" variant="contained">
          {`Revenir à l'accueil`}
        </Button>
      </Card>
    </>
  );
}
