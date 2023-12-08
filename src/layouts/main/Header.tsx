// @mui
import { AppBar, Box, BoxProps, Container, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// hooks
// components
// config
import { HEADER } from "../../config-global";

// utils
import navConfig from "./nav/config-navigation";
import NavDesktop from "./nav/desktop";
//
import NavMobile from "./nav/mobile";

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();



  return (
    <AppBar color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
       
        }}
      >
        <Container>
          <Box
            sx={{
              width: "100%",
              height: 1,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              px: 4,
            }}
          >
            <Box sx={{ flexGrow: 1 }} />

         <NavDesktop  data={navConfig} isOffset={false} />

            {/* <Button variant="contained" target="_blank" rel="noopener" href={PATH_MINIMAL_ON_STORE}>
            Purchase Now
          </Button> */}

          </Box>
        </Container>
      </Toolbar>

      <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

function Shadow({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: "auto",
        borderRadius: "50%",
        position: "absolute",
        width: `calc(100% - 48px)`,
        ...sx,
      }}
      {...other}
    />
  );
}
