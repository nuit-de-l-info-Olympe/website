// @mui
import {Fade, Portal, Stack} from '@mui/material';
// next
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
// hooks
import useActiveLink from '../../../../hooks/useActiveLink';
//
import {NavItemProps} from '../types';
import {NavItem, NavItemDashboard, NavItemOther, NavItemSearch} from './NavItem';
import {StyledMenu} from './styles';

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemProps;
  isOffset: boolean;
};

export default function NavList({ item, isOffset }: NavListProps) {
  const { pathname } = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const { path, children } = item;

  const { active, isExternalLink } = useActiveLink(path, false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      setOpenMenu(true);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <NavItem
        item={item}
        isOffset={isOffset}
        active={active}
        open={openMenu}
        isExternalLink={isExternalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        sx={{ height: 70 }}
      />

      {!!children && openMenu && (
        <Portal>
          <Fade in={openMenu}>
            <StyledMenu onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
              {children.map((list) => (
                <NavSubList
                  key={list.subheader}
                  subheader={list.subheader}
                  items={list.items}
                  isDashboard={list.subheader === 'Dashboard'}
                  onClose={handleCloseMenu}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type NavSubListProps = {
  isDashboard: boolean;
  subheader: string;
  items: NavItemProps[];
  onClose: VoidFunction;
};

function NavSubList({ items, isDashboard, subheader, onClose }: NavSubListProps) {
  const { pathname } = useRouter();

  const isActive = (path: string) => pathname === path;

  let gridColumn = 'span 6';
  if (!isDashboard) {
    if (items && items.length > 0 && items[0].span === 4) {
      gridColumn = 'span 4';
    } else {
      gridColumn = 'span 2';
    }
  }

  function itemColumn(e: any) {
    if (gridColumn === 'span 4') {
      return <NavItemSearch key={e.title} item={e} onClick={onClose} />;
    }
    if (gridColumn === 'span 2') {
      return <NavItemOther key={e.title} item={e} onClick={onClose} />;
    }
    if (gridColumn === 'span 1') {
      return <NavItem subItem key={e.title} item={e} active={isActive(e.path)} onClick={onClose} />;
    }
    return <NavItemDashboard key={e.title} item={e} onClick={onClose} />;
  }

  return (
    <Stack spacing={2.5} gridColumn={gridColumn} alignItems="flex-start">
      {items.map((item) => itemColumn(item))}
    </Stack>
  );
}
