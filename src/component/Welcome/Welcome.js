import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useAuth } from "../../contexts/AuthContext"
import UserMenu from '../UserMenu/UserMenu';
import { useSpring, animated } from 'react-spring';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Welcome() {
    const { currentUser } = useAuth()
    const username = currentUser.email.split("@")[0]

    const animation = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <div>
                <UserMenu />
            </div>
            <animated.div className="header" style={animation}>
                <Avatar sx={{ width: isMobile ? 40 : 60, height: isMobile ? 40 : 60, mr: 2, mb: isMobile && -5 }} src="/broken-image.jpg" />
                <p> Welcome, {username}</p>
            </animated.div>
        </div>
    )
}

export default Welcome