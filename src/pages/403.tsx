// @mui
import { Button, Card, Typography } from "@mui/material";
import { m } from "framer-motion";
// next
import NextLink from "next/link";
// assets
// components
// layouts
import CompactLayout from "../layouts/compact";

// ----------------------------------------------------------------------

Page403.getLayout = (page: React.ReactElement) => (
  <CompactLayout>{page}</CompactLayout>
);

// ----------------------------------------------------------------------

export default function Page403() {
  return (
    <>
      <Card sx={{ py: 5, mt: 5 }}>
        <Typography variant="h3" paragraph>
          Accès restreint
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>
          {` L'accès à la page à laquelle vous tentez d'accéder est restreint.`}
        </Typography>
        <Typography>
          Vous ne pouvez pas accéder à cette page depuis votre compte.
        </Typography>

        <Button component={NextLink} href="/" size="large" variant="contained">
          {`Revenir à l'accueil`}
        </Button>
      </Card>
    </>
  );
}
