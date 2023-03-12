import AuthStyles from '../styles/Auth.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
    
    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className={AuthStyles['flex-container']}>
            <Card className={AuthStyles['auth-card']}>
                <CardContent>
                    <Typography variant="h6">MooMoo Chat</Typography>
                    <Typography className={AuthStyles['auth-type']}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <TextField 
                            className={AuthStyles['auth-field']}
                            label='Email'
                            variant='outlined'
                            type='email'
                            color='primary'
                            size='small'
                            placeholder='example@gmail.com'
                            required
                            fullWidth
                        />
                        <TextField 
                            className={AuthStyles['auth-field']}
                            label='Password'
                            variant='outlined'
                            type='password'
                            color='primary'
                            size='small'
                            placeholder='Password'
                            required
                            fullWidth
                        />
                        <Button
                            variant='contained'
                            startIcon={<LoginIcon />}
                            size='medium'
                            sx={{mt: 3}}
                            fullWidth
                            type='submit'
                        >
                            Login
                        </Button>
                        <Typography className={AuthStyles['auth-type']}>Don't have an Account? Register Here</Typography>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
