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
  },
  imageList: {
    padding:'5rem',
    width: '85vw',
    height: 500,
  },
  image:{
    width:"100%",
    height:"100%",
  },
  }));


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
      <ImageListItem key="Subheader" cols={3} style={{height:'auto'}}>
      <ListSubheader component="div" style={{fontWeight:'bold'}}>Ovde bi trebao doci opis </ListSubheader>
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
