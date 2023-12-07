// @mui
import {
  Card,
  Link,
  LinkProps,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// components
import { m } from "framer-motion";
// next
import NextLink from "next/link";
import { forwardRef } from "react";
import Iconify from "../../../../components/iconify";
//
import { NavItemDesktopProps, NavItemProps } from "../types";
import { ListItem } from "./styles";

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  (
    { item, open, isOffset, active, subItem, isExternalLink, ...other },
    ref
  ) => {
    const { title, path, children, classBtn } = item;

    const renderContent = (
      <ListItem
        ref={ref}
        
        disableRipple
        isOffset={isOffset}
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {title}

        {!!children && (
          <Iconify
            width={16}
            icon="eva:arrow-ios-downward-fill"
            sx={{ ml: 1 }}
          />
        )}
      </ListItem>
    );

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link
        component={NextLink}
        href={path}
        underline="none"
        className={!classBtn ? "" : classBtn}
      >
        {renderContent}
      </Link>
    );
  }
);

// ----------------------------------------------------------------------

interface NavItemDashboardProps extends LinkProps {
  item: NavItemProps;
}

interface NavItemSearchProps extends LinkProps {
  item: NavItemProps;
}

export function NavItemSearch({ item, sx, ...other }: NavItemSearchProps) {
  const theme = useTheme();
  let title;
  let subtitle;
  let link;

  return (
    <Link
      component={NextLink}
      href={item.path}
      underline="none"
      sx={{ width: 1, pb: 1, px: 1 }}
      {...other}
    >
      <Card
        sx={{
          minHeight: 200,
          overflow: "hidden",
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          color: theme.palette.primary.contrastText,
          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              pb: 4,
              pt: 2,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="inherit"
                sx={{
                  fontWeight: "bold",
                  fontSize: 21,
                  color: theme.palette.primary.main,
                }}
              >
                {title}
              </Typography>
              <Typography variant="inherit" sx={{ fontSize: 13 }}>
                {subtitle}
              </Typography>
              <Button variant="contained" fullWidth size="small" sx={{ mt: 1 }}>
                {link}
              </Button>
            </Box>
          </Box>
        </m.div>
      </Card>
    </Link>
  );
}
