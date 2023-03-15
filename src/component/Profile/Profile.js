import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import { useAuth } from "../../contexts/AuthContext"
import { useState } from "react"
import UserMenu from "../UserMenu/UserMenu";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom"
import { useSpring, animated } from "react-spring";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Profile() {
    const { currentUser, updatePassword } = useAuth()
    const [error, setError] = useState("")
    const username = currentUser.email.split("@")[0]
    const navigate = useNavigate()

    function handleWelcome() {
        navigate('/welcome');
    }

    function handleSubmit(event) {
        event.preventDefault()
        const promises = []
        const data = new FormData(event.currentTarget);
        if (data.get("password")) {
            promises.push(updatePassword(data.get("password")))
        }
        Promise.all(promises)
            .then(() => {
                setError(false)
            })
            .catch(() => {
                setError(true)
            })
    }
    const styles = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    const springProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-50px)' },
        delay: 1000,
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <UserMenu />
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <animated.div className="header" style={styles}>{username}'s Profile</animated.div>
                {error === true &&
                    <Alert variant="outlined" severity="error" sx={{ color: "black", mt: 2, width: 250, mb: -10, ml: "50%", transform: "translate(-50%)" }}>
                        Failed to reset the password
                    </Alert>
                }
                {error === false &&
                    <Alert variant="outlined" severity="success" sx={{ color: "black", mt: 2, width: 250, mb: -10, alignItems: "center", ml: "50%", transform: "translate(-50%)" }}>
                        Password reset successfully
                    </Alert>
                }
                <animated.div style={springProps}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '7rem', mb: '2rem' }}>
                        <TextField
                            required
                            name="password"
                            label="New Password"
                            type="password"
                            id="password"
                            sx={{
                                width: isMobile ? 300 : 500,
                                '& label': {
                                    color: 'black',
                                },
                                '& label.Mui-focused': {
                                    color: 'black',
                                },
                                '& .MuiInputBase-root': {
                                    color: 'black',
                                    '&:hover': {
                                        borderColor: 'secondary.main',
                                    },
                                    '&.Mui-focused': {
                                        borderColor: 'secondary.main',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'secondary.main',
                                    },
                                    '&::placeholder': {
                                        color: 'black',
                                    },
                                },
                                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'secondary.main',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'secondary.main',
                                },
                            }}
                            variant="outlined"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 3,
                                bgcolor: "#9C27B0",
                                fontWeight: 700,
                                width: "fitContent",
                                height: 46,
                            }}
                        >
                            Change Password
                        </Button>
                    </Box>
                    <Grid container>
                        <Grid item xs>
                            <Link
                                href="#"
                                sx={{ fontSize: isMobile ? 17 : 20  }}
                                onClick={handleWelcome}
                            >
                                Back to your page
                            </Link>
                        </Grid>
                    </Grid>
                </animated.div>
            </Box>
        </div>

    )
}


export default Profile