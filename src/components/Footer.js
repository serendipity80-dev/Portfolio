import React from 'react';
import { ContactPhone,PrintSharp, WhatsApp, Email  } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
    paddingTop:theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')] : {
      paddingLeft:theme.spacing(3),
      paddingRight:theme.spacing(3),
    },
      backgroundColor:'#f5f5f5',
      display:'flex',
      flexWrap:'wrap',
      alignItems:'center',
      justifyContent:'center',
      color:'#333',
      letterSpacing:'.2rem',
  },
 footer:{
    position:'relative',
    bottom:'0',
    right:'0',
    left:'0',
    minHeight:'110px',
    textAlign:'center',
    boxShadow:'0 5px 15px rgba(0,0,0,0.2)',


 },
  text: {
    textTransform:'uppercase',
  },
  icons: {
    margin:'-.3rem 0.5rem',
  },
}));

export default function Footer() {
  const classes = useStyles();
  
  const getYear = () => {
    return new Date().getFullYear();
  };


  return (
    <footer className={classes.footer}>   
    
    <Typography variant="h5" component="h3" style={{textTransform:'uppercase'}}>
        ereichbar unter
      </Typography>
    
      <Box  bgcolor="#f5f5f5" className={classes.root}>
    
      
      
      <Typography variant='body1'>
        <ContactPhone className={classes.icons}/>
        +49 208 82686993 
      </Typography>
      <Typography variant='body1'>
        <PrintSharp className={classes.icons}/>
         +49 208 94113723
      </Typography>
      <Typography variant='subtitle1'>
      <WhatsApp className={classes.icons}/>
       +49 171 6203403
      </Typography>

      <Typography variant='body1'>
        <Email className={classes.icons}/>
        bagaric@web.de
      </Typography>
     
    </Box>
    <Typography>
    <p>&copy;<span>{getYear()}</span> <span className= {classes.text}>Miro Bagarić</span></p>
    </Typography>
    </footer>
 
  );
}
