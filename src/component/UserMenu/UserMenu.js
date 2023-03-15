import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Alert from '@mui/material/Alert';
import { useSpring, animated } from 'react-spring';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function UserMenu() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    function handleProfile() {
        navigate('/profile');
    }

    async function handleLogout() {
        try {
            await logout()
            navigate("/login")
        } catch {
            setError(true)
        }
    }

    const styles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0,0)' },
        config: { duration: 1000 },
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <animated.div style={styles}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: 'secondary.main', padding: isMobile ? 0.5 : 1 }}>
                    <Toolbar>
                        <Typography variant= {isMobile ? "h6" : "h4"} component="div" sx={{ flexGrow: 1, textAlign: 'left', ml: isMobile ? 0 : 7, cursor: "default" }}>
                            {currentUser.email}
                        </Typography>
                        <Button onClick={handleProfile} sx={{
                            color: "white",
                            fontWeight: "bold",
                            mr: isMobile ? 1 : 2,
                            fontSize: isMobile ? 13 : 17,
                            textTransform: 'capitalize'
                        }}>
                            Profile
                        </Button>
                        <Button variant="outlined"
                            onClick={handleLogout}
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                mr: isMobile ? 0 : 2,
                                fontSize: isMobile ? 13 : 17,
                                textTransform: 'capitalize',
                                borderColor: '#afafaf',
                                '&:hover': {
                                    borderColor: 'white',
                                    bgcolor: 'rgba(243, 243, 243, 0.20)'
                                },
                            }}>
                            Logout</Button>
                    </Toolbar>
                </AppBar>
                {error === true &&
                    <Alert variant="outlined" severity="error" sx={{ color: "white", mt: 2 }}>
                        Failed to Logout
                    </Alert>
                }
            </Box>
        </animated.div>
    );
}