// @mui
import { AppBar, Box, BoxProps, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// config
import { HEADER } from "../../config-global";

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar
      color="transparent"
      sx={{ boxShadow: 0, background: theme.palette.primary.contrastText }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
        }}
      ></Toolbar>
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
      }}
      {...other}
    />
  );
}
