import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import itemData from '../assets/itemData';
import {Close} from '@material-ui/icons'




const useStyles = makeStyles((theme) => ({
root: {
  position:'relative',
  textAlign:'center',
},
  title: {
    fontSize:'2rem',
    textTransform:'uppercase',
    [theme.breakpoints.between("xs","sm")]: {
      marginTop:'-7rem',
    },
    [theme.breakpoints.between("sm","md")]: {
      marginTop:'1rem',
    },
    [theme.breakpoints.up("md")]: {
      marginTop:'5rem',
    },
  },
  underline:{
    height:"0.25rem",
    width:"5rem",
    background:"#f44336",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"1rem",

    [theme.breakpoints.between("xs","sm")]: {

        transform:'translate(0%,35%)',

    },

},
gallery: {
    // marginTop:'3rem',
    display:'grid',
   alignItems:'center',
   justifyContent:'center',
   
    gridTemplateColumns:'repeat(4, 300px)',
    gap:'.6rem',
    minHeight:'100vh',

    [theme.breakpoints.between("xs","sm")]: {
    gridTemplateColumns:'repeat(1, 1fr)',
    marginTop:'6rem',
       
      },
      [theme.breakpoints.between("sm","md")]: {
        gridTemplateColumns:'repeat(3, 1fr)',
        marginTop:'5rem',

           
          },
    },
    pics: {
       transition:'all 350s ease',
       marginBottom:'2rem',

        '& img': {
            borderRadius:'20px',
            boxShadow:'0px 5px 15px rgba(0,0,0,0.2)',
            marginTop:'1rem',
            
       
        '&:hover':{
            cursor:'pointer',
            opacity:'.8',
        },
    },
  
    },

  }));


const Gallery = () => {
  const classes = useStyles();

  const [model, setModel] = useState(false)
  const [tempSetImg, setTempImg] = useState('')

  const getImage = (img) => {
    setTempImg(img);

    setModel(true)
}
  return (
    <>
    <div className={classes.root}>
    <h4 className={classes.title}>photo galerie</h4>
    <div className={classes.underline}></div>
    </div> 
    <div className={ model ? 'model open' : 'model'}>
    <img src={tempSetImg} alt={tempSetImg.title}/>
    <Close onClick={() => setModel(false)} />

    </div>

    <div className={classes.gallery}>
 
    { itemData.map((item, index) =>{
         return (
             <div className={classes.pics} key={index} onClick={()=> getImage(item.img)}>

                 <img src={item.img} alt={item.title} style={{width:'100%'}}/>
                
                 </div>
         )

         
         })}

    </div>
    </>
  );
}

export default Gallery
