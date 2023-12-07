import { Box, Link, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Iconify from 'src/components/iconify';
import NextLink from 'next/link';
import { PATH_AUTH, PUBLIC_PAGE } from '../../routes/paths';
import AuthLoginForm from './AuthLoginForm';

export default function Login() {
  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.primary.contrastText, p: 4, borderRadius: 2 }}>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h3" component="h1">
          Me connecter
        </Typography>

        <Box>
          <Typography fontWeight="bold">Bienvenue sur notre plateforme.</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Typography variant="subtitle2" sx={{ mr: 1 }}>
            Vous êtes un nouvel utilisateur ?
          </Typography>

          <Link component={NextLink} href={PATH_AUTH.register} variant="subtitle2">
            Créer un compte
          </Link>
        </Box>
      </Stack>

      <AuthLoginForm />
    </Box>
  );
}
