import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "0px",
    left: "0px",
    right: "0px",
    marginBottom: "0px",
    width: "100%",
    backgroundColor: "#eceff1",
    color:'#333',
    height:'35px',
    '@media (max-width:501px)':{
     root:{
      position: "fixed",
      bottom: "0px",
      left: "0px",
      right: "0px",
      marginBottom: "0px",
      display:'flex',
      alignItems:'flex-start',
      
        width:480,
      },
        },
  },
  p: {
    // marginBottom:'2rem',
  },
  text: {
textTransform:'uppercase',
  },
});

export default function Footer() {
  const classes = useStyles();
  
  const getYear = () => {
    return new Date().getFullYear();
  };


  return (
    <BottomNavigation className={classes.root}>
    <p>&copy;<span>{getYear()}</span> <span className= {classes.text}>Miro Bagaric</span></p>
    </BottomNavigation>
  );
}
