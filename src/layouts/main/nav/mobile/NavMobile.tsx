import {Drawer, IconButton, List} from '@mui/material';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {NAV} from 'src/config-global';
import {useAuthContext} from 'src/contexts/AuthContext';
import Iconify from '../../../../components/iconify';
import Logo from '../../../../components/logo';
import Scrollbar from '../../../../components/scrollbar';
import {NavProps} from '../types';
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavMobile({ isOffset, data }: NavProps) {
  const { pathname } = useRouter();
  const { isAuthenticated } = useAuthContext();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          ml: 1,
          ...(isOffset && {
            color: 'text.primary',
          }),
        }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_BASE,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List component="nav" disablePadding>
            {data.map(
              (link) =>
                ((link.showAuth && isAuthenticated) ||
                  (link.hideAuth && !isAuthenticated) ||
                  (link.hideAuth === undefined && link.showAuth === undefined)) && (
                  <NavList key={link.title} item={link} isOffset={isOffset} />
                )
            )}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
