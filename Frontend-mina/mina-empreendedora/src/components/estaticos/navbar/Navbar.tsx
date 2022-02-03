import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink, Redirect } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';

import './Navbar.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.50),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(33),
        width: 'auto',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),

        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',

            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}

        >



            <MenuItem >
                <Link to='/home' >
                    <IconButton size="large" aria-label="show 10 new mails" color="inherit" >
                        <Badge badgeContent={10} color="error">
                            <HomeIcon className='text-decoration-none'></HomeIcon>
                        </Badge>
                        <p className='text-decoration-none texto'>Inicio</p>
                    </IconButton>

                </Link>
            </MenuItem>

            <Link to='/perfil' >
                <MenuItem >
                    <IconButton size="large" aria-label="show 10 new mails" color="inherit">
                        <Badge badgeContent={10} color="error">
                            <PersonIcon className='text-decoration-none' />
                        </Badge>
                    </IconButton>
                    <p className='text-decoration-none'>Perfil</p>
                </MenuItem>

            </Link>
            <MenuItem>
                <IconButton size="large" aria-label="show 10 new mails" color="inherit">
                    <Badge badgeContent={10} color="error">
                        <ChatBubbleIcon />
                    </Badge>
                </IconButton>
                <p>Mensagem</p>
            </MenuItem>

            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notificação</p>
            </MenuItem>
            <a href="/">
                <MenuItem >
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <Badge>
                            <LogoutIcon className='text-decoration-none' />
                        </Badge>
                    </IconButton>
                    <p className='text-decoration-none'>Sair</p>
                </MenuItem>
            </a>
        </Menu >
    );

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );


    var navbarComponent;

    if (token != "") {
        navbarComponent =
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="fixed">
                    <Toolbar sx={{ backgroundColor: '#800000' }}>

                        <Link to='/home'>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                                className='ImgNavbar'
                            >
                            </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}  >

                            <IconButton size="large" aria-label="show34 new mails" color="inherit" style={{ padding: '10px' }}>

                                <Badge badgeContent={4} color="error">
                                    <Link to='/home'>
                                        <HomeIcon sx={{ color: 'white' }} />
                                    </Link>
                                </Badge>

                            </IconButton>

                            <IconButton size="large" aria-label="show34 new mails" color="inherit" style={{ padding: '10px' }}>
                                <Badge badgeContent={4} color="error">
                                    <Link to='/perfil'><PersonIcon sx={{ color: 'white' }} /> </Link>
                                </Badge>
                            </IconButton>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit" style={{ padding: '10px' }}>
                                <Badge badgeContent={4} color="error">
                                    <ChatBubbleIcon sx={{ color: 'white' }} />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                style={{ padding: '10px' }}
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon sx={{ color: 'white' }} />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: 'white' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Pesquisar..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <a href="/">
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                                <IconButton
                                    size="large"

                                    color="inherit"
                                >
                                    <Badge>
                                        <LogoutIcon sx={{ color: 'white' }} />
                                    </Badge>
                                </IconButton>

                            </Box>
                        </a>
                        <Box sx={{ display: { color: 'white', xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
    }

    return (
        <>
            {navbarComponent}
            {renderMobileMenu}
        </>

    );
}