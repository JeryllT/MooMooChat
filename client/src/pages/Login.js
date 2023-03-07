import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginStyles from '../styles/Login.module.css';



const Login = () => {

    return (
        <div className={LoginStyles['flex-container']}>
            <Card style={{width: "250px"}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Moo Moo Chat
                    </Typography>
                    <Typography variant="h5" component="div">
                    testing
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
