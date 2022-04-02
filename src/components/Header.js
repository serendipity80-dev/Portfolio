import  HomeIcon  from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    root:{
        background:'#404040',

         '& > * + * ' : {
        
             marginLeft: theme.spacing(2),

        
        },
    },
    link:{
        flexGrow: 6,
        textDecoration:'none',
        color:'#f1f1f1',
        textTransform:'uppercase',
        marginBottom:'5rem',
        '&:hover':{
            color:'red',
        },
    },
   
   
   
}));

const Header = () => {

 const classes = useStyles();
// const preventDefault = (event) => event.preventDefault()
    return (

        <div className={classes.root}>

            <Link to="/"><HomeIcon color='disabled' style={{fontSize:"30"}}/></Link>
            <Link className= {classes.link}   to="/about">About Me</Link>
            <Link className= {classes.link} to="/ard">ARD Schein</Link>
            <Link className= {classes.link} to ="/gallery"> My Gallery</Link>


        </div>
    )
}

export default Header



