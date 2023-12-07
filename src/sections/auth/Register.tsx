import { Box, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NextLink from "next/link";
import { PATH_AUTH, PUBLIC_PAGE } from "../../routes/paths";
import AuthRegisterForm from "./AuthRegisterForm";

export default function Register() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.primary.contrastText,
        p: 4,
        borderRadius: 2,
      }}
    >
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" component="h1">
          Créer un compte
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography variant="subtitle2" sx={{ mr: 1 }}>
            {" "}
            Vous avez déjà un compte?{" "}
          </Typography>

          <Link component={NextLink} href={PATH_AUTH.login} variant="subtitle2">
            Me connecter
          </Link>
        </Box>
      </Stack>

      <AuthRegisterForm />
    </Box>
  );
}
