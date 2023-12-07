import {ListItemButtonProps} from '@mui/material';

// ----------------------------------------------------------------------

export type NavItemProps = {
  title: string;
  path: string;
  classBtn?: string;
  img?: string;
  alt?: string;
  icon?: React.ReactElement;
  hideAuth?: boolean;
  showAuth?: boolean;
  span?:number;
  children?: {
    subheader: string;
    hideResponsive?:boolean;
    items: {
      title: string;
      path: string;
      img?: string;
      alt?: string;
      span?:number;
    }[];
  }[];
};

export interface NavItemDesktopProps extends ListItemButtonProps {
  item: NavItemProps;
  isOffset?: boolean;
  active?: boolean;
  open?: boolean;
  subItem?: boolean;
  isExternalLink?: boolean;
  classBtn?: string;
}

export interface NavItemMobileProps extends ListItemButtonProps {
  item: NavItemProps;
  active?: boolean;
  open?: boolean;
  isExternalLink?: boolean;
  isOffset?: boolean;
}

export type NavProps = {
  isOffset: boolean;
  data: NavItemProps[];
};
