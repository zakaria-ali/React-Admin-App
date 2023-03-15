import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import { useSpring, animated } from 'react-spring';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function GustMenu() {
  const navigate = useNavigate()
  function handleLogIn() {
    navigate('/login');
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
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign:'left', ml: isMobile ? 0 : 7, cursor: "default" }}>
              Gust
            </Typography>
            <Button onClick={handleLogIn} sx={{ color: "white", fontWeight: "bold", mr: isMobile ? 0 : 2, fontSize: 20, textTransform: 'capitalize' }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </animated.div>
  );
}