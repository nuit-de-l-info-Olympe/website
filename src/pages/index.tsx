import { Container, Typography } from "@mui/material";
import { useScroll } from "framer-motion";
import React from "react";
import MainLayout from "src/layouts/main";

// HomePage.getLayout = (page: React.ReactElement) => (
//   <MainLayout> {page} </MainLayout>
// );

export default function HomePage() {

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3"> toto </Typography>
      </Container>
    </>
  );
}
