import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Alert from '@mui/material/Alert';
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContext"
import GustMenu from '../GustMenu/GustMenu';
import { useSpring, animated } from "react-spring";


const theme = createTheme();

export default function SignUp() {
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    function handleLogIn() {
        navigate('/login');
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true)
            await signup(email, pass)
            setError(false)
            setPass("")
            setEmail("")
        } catch {
            setError(true)
        }
        setLoading(false)
    }

    const springProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-50px)' },
        delay: 1000,
    });

    return (
        <Box sx={{ flexGrow: 1 }} >
            {/* Call Of Gust Menu */}
            <GustMenu />
            {/* Start Of Signup Form */}
            <animated.div style={springProps}>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                bgcolor: "secondary.main",
                                padding: 2.5,
                                borderRadius: 3,
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: "white" }}>
                                <LockOutlinedIcon sx={{ color: "secondary.main" }} />
                            </Avatar>
                            <Typography
                                component="h1"
                                variant="h5"
                                sx={{ color: "white", fontWeight: "bold" }}
                            >
                                Sign Up
                            </Typography>
                            {error === true &&
                                <Alert variant="outlined" severity="error" sx={{ color: "white", mt: 2 }}>
                                    Failed to create an account
                                </Alert>
                            }
                            {error === false &&
                                <Alert variant="outlined" severity="success" sx={{ color: "white", mt: 2 }}>
                                    Account created
                                </Alert>
                            }
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    sx={{
                                        '& label': {
                                            color: 'white',
                                        },
                                        '& label.Mui-focused': {
                                            color: 'white',
                                        },
                                        '& .MuiInputBase-root': {
                                            color: 'white',
                                            '&:hover': {
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused': {
                                                borderColor: 'white',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white',
                                            },
                                            '&::placeholder': {
                                                color: 'white',
                                            },
                                        },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={pass}
                                    onChange={(event) => setPass(event.target.value)}
                                    sx={{
                                        '& label': {
                                            color: 'white',
                                        },
                                        '& label.Mui-focused': {
                                            color: 'white',
                                        },
                                        '& .MuiInputBase-root': {
                                            color: 'white',
                                            '&:hover': {
                                                borderColor: 'white',
                                            },
                                            '&.Mui-focused': {
                                                borderColor: 'white',
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white',
                                            },
                                            '&::placeholder': {
                                                color: 'white',
                                            },
                                        },
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                    }}
                                    variant="outlined"
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={loading}
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        bgcolor: "#9F5CCC",
                                        fontWeight: 700,
                                        width: "fitContent",
                                        height: 46,
                                    }}
                                >
                                    Creat account
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link
                                            href="#"
                                            variant="body2"
                                            sx={{
                                                color: "white",
                                                textDecoration: "none",
                                                "&:hover": { textDecoration: "none" },
                                                fontSize: 16,
                                            }}
                                            onClick={handleLogIn}
                                        >
                                            Log in with existing account
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </animated.div>

        </Box>
    )
}
