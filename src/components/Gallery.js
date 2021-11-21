import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ListSubheader from '@material-ui/core/ListSubheader';
import ImageListItem from '@material-ui/core/ImageListItem';
import itemData from '../assets/itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.only("xs")]: {
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
    },

  },
  imageList: {
    padding:'10rem',
    // transform:"translate(0%,50%)",
    width: '85vw',
    height: 1000,
    [theme.breakpoints.only("xs")]: {
      width:"100vw",
      marginLeft:"2rem",
    },

  },
  image:{
    width:"100%",
    height:"100%",
  },
  text :{
    textTransform:"uppercase",
     fontSize:"1.5rem",
     color:"#f44336",
    [theme.breakpoints.only("xs")]: {
      fontSize:"0.7rem",
      marginLeft:"-1rem",
    },
  },
  }));


export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={250} className={classes.imageList} cols={3}>
      <ImageListItem key="Subheader" cols={1} style={{height:'auto'}}>
      <ListSubheader component="div"  className={classes.text}style={{fontWeight:'bold',}}>fahrzeuge die ich bewegt habe </ListSubheader>
      </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title}  className={classes.image}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
