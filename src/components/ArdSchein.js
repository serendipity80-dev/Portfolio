import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';
import ardShein from '../assets/ardItems';


const useStyles = makeStyles((theme) => ({
    root: {
        background:'#333',
    },
    gallery: {
        marginTop:'4rem',
        display:'grid',
        gridTemplateColumns:'repeat(4, 1fr)',
        gap:'.6rem',
        minHeight:'100vh',

        [theme.breakpoints.between("xs","sm")]: {
        gridTemplateColumns:'repeat(1, 1fr)',
           
          },
          [theme.breakpoints.between("sm","md")]: {
            gridTemplateColumns:'repeat(3, 1fr)',
               
              },
        },
        pics: {
           transition:'all 350s ease',
           marginBottom:'2rem',

            '& img': {
                borderRadius:'50%',
                boxShadow:'0px 5px 15px rgba(0,0,0,0.2)',
                marginTop:'1rem',
                
           
            '&:hover':{
                cursor:'pointer',
                opacity:'.8',
            },
        },
      
        },
        caption: {
           color:'#333',
            textTransform:'uppercase',
            textAlign:'center',
        },
}))



const ArdShein = () => {

    const [model, setModel] = useState(false)
    const [tempSetImg, setTempImg] = useState('')

    const classes = useStyles()
  
    const getImage = (image) => {
        setTempImg(image);

        setModel(true)
    }

return(
    <>
    <div className={ model ? 'model open' : 'model'}>
    <img src={tempSetImg} alt={tempSetImg.caption}/>
    <Close onClick={() => setModel(false)} />

    </div>

    <div className={classes.gallery}>
 
    { ardShein.map((item, index) =>{
         return (
             <div className={classes.pics} key={index} onClick={()=> getImage(item.image)}>

                 <img src={item.image} alt={item.caption} style={{width:'100%'}}/>
                 <h4 className={classes.caption}>{item.caption} </h4>
                 </div>
         )

         
         })}

    </div>
    </>
)



}

export default ArdShein;