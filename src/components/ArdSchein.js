import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ardData from '../assets/ardItems';

const useStyles = makeStyles((theme) => ({
  root: {
      transform:"translate(0%,11%)",
      height:"100vh",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
     backgroundColor: "#f5f5f5",
  },
  imageList: {
   width: "80vw",
   height:500,
  backgroundColor: "#f5f5f5",
  // padding:"2rem",

  
  },
  image: {
      width:"100%",
      heigh:"100%",
  },
  itemBar:{
      backgroundColor:"rgba(0,0,0,0.3)",
      textTransform:"uppercase",
      textAlign:"center",
  },    
  
  
  
 
}));

export default function ArdSchein() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} className={classes.imageList} cols={4}>
        {ardData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} className={classes.image} />
            <ImageListItemBar
              title={item.title}
              className={classes.itemBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
