import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {ImageList, ImageListItem, Typography} from '@material-ui/core';
// import ImageList from '@material-ui/core/ImageList';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import ImageListItem from '@material-ui/core/ImageListItem';
import itemData from '../assets/itemData';


// const Img = styled('img')({
  
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });


const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    transform:'translate(0%,10%)', 
    [theme.breakpoints.between("xs","sm")] : {
      transform:"translate(0,-10%)",
    },
  },
  underline:{
    height:"0.25rem",
    width:"5rem",
    background:"#f44336",
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:"4.5rem",
    marginTop:"1rem",

    [theme.breakpoints.between("xs","sm")]: {
        marginBottom:'3rem',
    },

},
imageList: {
  width:"70vw",

  [theme.breakpoints.between("xs","sm")]: {
    imageList: {
      width:"100%",
    },
  },
},
item: {
  borderRadius:"20px",
},
  text :{
    textTransform:"uppercase",
     color:"#333",
    letterSpacing:".3rem",

    [theme.breakpoints.between("xs","sm")]: {
      fontSize:"1.786rem",
      marginLeft:"1rem",
      textAlign:"center",
    },
  },
  }));


export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.text}> Fahrzeuge die ich bewegt habe</Typography>
      <div className={classes.underline}></div>
    <ImageList sx={{ width: 400, height: 450 }} cols={4} rowHeight={200} className={classes.imageList}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            className={classes.item}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}
