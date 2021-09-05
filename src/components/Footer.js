import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import ImageSearchIcon from '@material-ui/icons/ImageSearch';
// import RestoreIcon from '@material-ui/icons/Restore';
// import PersonIcon from '@material-ui/icons/Person';
// import SubjectIcon from '@material-ui/icons/Subject';
// import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "0px",
    left: "0px",
    right: "0px",
    marginBottom: "0px",
    // display:'flex',
    // alignItems:'center',
    // justifyContent:'center',
    width: "100%",
    backgroundColor: "#eceff1",
    color:'#333',
    height:'30px',
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
});

export default function Footer() {
  const classes = useStyles();
  

 
 
 

  return (
    <BottomNavigation className={classes.root}>
    <p>Design by @4Adventure</p>
    </BottomNavigation>
  );
}
