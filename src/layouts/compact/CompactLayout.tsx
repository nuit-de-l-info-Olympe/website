import { Box, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { HEADER } from "src/config-global";
//
const Header = dynamic(() => import("./Header"), { ssr: false });

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function CompactLayout({ children }: Props) {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Box
        sx={{
          background: `linear-gradient(-135deg,${theme.palette.secondary.dark},${theme.palette.secondary.darker})`,
        }}
      >
        <Box
          component="img"
          alt="Services illustration"
          src="/assets/background/bulle_services_BG.svg"
          sx={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            zIndex: 0,
          }}
        />
        <Container component="main" sx={{ position: "relative", zIndex: 1 }}>
          <Stack
            sx={{
              py: 12,
              m: "auto",
              maxWidth: 480,
              minHeight: "100vh",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {children}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
