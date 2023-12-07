import {Theme} from '@mui/material/styles';

// ----------------------------------------------------------------------


export default function Link(theme: Theme) {

    return {
        MuiLink: {
            defaultProps: {
                underline: 'none',
                color: theme.palette.primary.main,
            },
            styleOverrides: {
                /* root: ({
                    ...(ownerState.variant === 'body2' && {
                        transition: "all 0.4s",
                        "&:hover": {
                            color: theme.palette.primary.lighter,
                            bgcolor: 'gray',
                        },
                    }),
                }), */
                root: ({
                    transition: "all 0.4s",
                    "&:hover": {
                        /* color: theme.palette.primary.lighter,
                        color: theme.palette.custom.main, */
                    },
                })
            },
        },
    };
}
