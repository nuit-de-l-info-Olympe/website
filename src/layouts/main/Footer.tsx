import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Footer() {
  const theme = useTheme();
  const { pathname } = useRouter();

  const isHome = pathname === "/";

  const mainFooter = (
    <Box component="footer">
      <Box
        sx={{
          py: 10,
          bgcolor: theme.palette.grey[900],
          color: theme.palette.grey[100],
        }}
      >
        <Container>
          <Box alignContent="center">Made in CESI & La nuit de l'info</Box>
        </Container>
      </Box>
    </Box>
  );

  return isHome ? mainFooter : mainFooter;
}
