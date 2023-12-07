// @mui
import { AppBar, Box, BoxProps, Container, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// hooks
// components
// config
import { HEADER } from "../../config-global";
import useOffSetTop from "../../hooks/useOffSetTop";
import useResponsive from "../../hooks/useResponsive";
// utils
import navConfig from "./nav/config-navigation";
import NavDesktop from "./nav/desktop";
//
import NavMobile from "./nav/mobile";

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "lg");

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

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
          ...(isOffset && {
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
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

            {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

            {/* <Button variant="contained" target="_blank" rel="noopener" href={PATH_MINIMAL_ON_STORE}>
            Purchase Now
          </Button> */}

            {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
          </Box>
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
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
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
