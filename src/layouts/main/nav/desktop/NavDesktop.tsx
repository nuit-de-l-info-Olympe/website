// @mui
import {Stack} from '@mui/material';
import {useAuthContext} from 'src/contexts/AuthContext';
//
import {NavProps} from '../types';
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavDesktop({isOffset, data}: NavProps) {
    const {isAuthenticated} = useAuthContext();
    return (
        <Stack
            component="nav"
            direction="row"
            spacing={5}
            sx={{
                mr: 5,
                height: 1,
            }}
        >
            {data.map(
                (link) =>
                    ((link.showAuth && isAuthenticated) ||
                        (link.hideAuth && !isAuthenticated) ||
                        (link.hideAuth === undefined && link.showAuth === undefined)) && (
                        <NavList key={link.title} item={link} isOffset={isOffset}/>
                    )
            )}
        </Stack>
    );
}
