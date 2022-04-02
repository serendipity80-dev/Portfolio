import React, { useState, useEffect } from 'react';
import adrData from '../assets/ardItems';
import { ArrowRight, ArrowLeft } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    mainContainer:{
        width:'100%',
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
       
    
        [theme.breakpoints.between("xs", "sm")]: {
            transform:"translate(0%,-10%)",
        },
        [theme.breakpoints.between( "sm", "md")]: {
            transform:"translate(0%,-5%)",
        },
        [theme.breakpoints.between( "md","lg")]: {
            transform:"translate(0%,5%)",
        },
    },
    sectionCenter: {
        marginTop: '2.5rem',
  width: '80vw',
  height: '450px',
  maxWidth: '800px',
  textAlign: 'center',
  position: 'relative',
  display: 'flex',
  overflow:' hidden',
  boxShadow:' 0 5px 15px rgba(0, 0, 0, 0.3)',
  borderRadius:'20px',


    },
    title:{
        textAlign:"center",
        fontSize:"2.5rem",
        letterSpacing:".7rem",
        textTransform:"uppercase",
        marginBottom:'0 auto',
        marginTop:'-5rem',
    
        [theme.breakpoints.between("xs","sm")]: {
            marginTop:"6rem",
            fontSize:"2rem",
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
    
            marginBottom:'6rem',
        },
    
    },
    prev: {
        position: 'absolute',
        top: '200px',
        transform: 'translateY(-50%)',
        background: 'transparent',
        color: '#f44336',
        width: '2.25rem',
        height: '2.25rem',
        display: 'grid',
        placeItems: 'center',
        borderColor: 'transparent',
        fontSize: '1rem',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        left:'5%',
    },
    next: {
        position: 'absolute',
        top: '200px',
        transform: 'translateY(-50%)',
        background: 'transparent',
        color: '#f44336',
        width: '2.25rem',
        height: '2.25rem',
        display: 'grid',
        placeItems: 'center',
        borderColor: 'transparent',
        fontSize: '1rem',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        right:'5%',
    },
    imgContainer:{
        position:"relative",
        width:"150px",
        height:"150px",
        borderRadius:"50%",
        margin:"0 auto",
      

        "&:before": {
            content:"''",
            width:"100%",
            height:"100%",
            backgroundColor:"hsl(3, 100%, 50%)",
            position:"absolute",
            top:"-0.25rem",
            right:"0",
            borderRadius:"50%",

        },
    },
    personImg:{
        width:"100%",
        display:"block",
        height:"100%",
        objectFit:"cover",
        borderRadius:"50%",
        position:"relative",
    },
  
    desc:{
        marginBottom:"0.5rem",
        textTransform:"uppercase",
        color:"f44336",
        fontSize:"0.85rem",
    },
  
}))

const AdrShein = () => {

    const classes = useStyles();

    const [ itemImg, setItemImg] = useState(adrData)
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex -1;
            if ( index < 0) {
                index = itemImg.length -1
            }
            return index
        })
    }

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex +1;
            if (index > itemImg.length -1) {
                index = 0
            }
            return index;
        });
    };
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex +1;
                if (index > itemImg.length -1) {
                    index = 0
                }
                return index
            });
        }, 5000);
        return () => {
            clearInterval(slider)
            setItemImg(itemImg)
        }
    }, [index, itemImg])


  return (
    <section className={classes.mainContainer}>
        <div>
            <h2 className={classes.title}>adr schein</h2>
        <div className={classes.underline}></div>
        </div>

       <div className={classes.sectionCenter}>
           {adrData.map((item, itemIndex) => {
               const {id, image, caption } = item;
               let position = "nextSlide";
               if( itemIndex === index) {
                   position = "activeSlide"
               }
               if( itemIndex === index -1 || ( index === 0 && itemIndex === item.length -1)) {
                   position = "lastIndex"
               }
               return (

        <article key={id}  className={position} id="article">
            <div className={ classes.imgContainer}>
                <img src={image} alt={caption} className={classes.personImg}/>
                <h4 className={classes.desc}> {caption} </h4>
                </div>

</article>
               )
           })}
           <button className={classes.prev}>
               <ArrowLeft onClick= {prevSlide} />
           </button>
           <button className={classes.next}>
               <ArrowRight onClick= {nextSlide} />
           </button>
       </div>
    </section>
  )
}

export default AdrShein