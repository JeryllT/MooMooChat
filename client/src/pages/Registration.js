import AuthStyles from '../styles/Auth.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {useState} from 'react';
import Alert from '@mui/material/Alert';

const Registration = () => {

    const [avatar, setAvatar] = useState("");
    const [successUpload, setSuccessUpload] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log("HELLO")
        if(successUpload !== true) {
            setErrorMsg("Please upload an avatar before Submitting")
            setTimeout(() => {
                setErrorMsg("")
            }, 3000)
        }
    }

    const handleUpload = (e) => {
        setAvatar(e.target.files[0])
        setSuccessUpload(true)
    }
    
    return (
        <div className={AuthStyles['flex-container']}>
        <Card className={AuthStyles['auth-card']}>
            {errorMsg ? <Alert severity="error">{errorMsg}</Alert> : null} 
            <CardContent>
                <Typography variant="h6">MooMoo Chat</Typography>
                <Typography className={AuthStyles['auth-type']}>Register</Typography>
                <form onSubmit={handleRegistration}>
                    <TextField 
                        className={AuthStyles['auth-field']}
                        label='Display Name'
                        variant='outlined'
                        type='text'
                        color='primary'
                        size='small'
                        placeholder='Name you want to be called'
                        required
                        fullWidth
                    />
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
                    <div className={AuthStyles['avatar-upload']}>
                        <IconButton 
                            aria-label="upload picture" 
                            component="label"
                            type='button'
                        >
                            <input hidden accept="image/*" type="file" onChange={handleUpload}/>
                            <AddPhotoAlternateIcon />
                            {successUpload ? <Typography>{avatar.name}</Typography> : <Typography>Upload Avatar</Typography>}
                        </IconButton>
                    </div>
                    <Button
                        variant='contained'
                        startIcon={<LoginIcon />}
                        size='medium'
                        sx={{mt: 3}}
                        fullWidth
                        type='submit'
                    >
                        Sign Up 
                    </Button>
                    <Typography className={AuthStyles['auth-type']}>Already have an Account? Login Here</Typography>
                </form>
            </CardContent>
        </Card>
    </div>
    )
}

export default Registration