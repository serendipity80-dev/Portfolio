import React, {useState} from 'react';
import profile from '../assets/miroData';
import { FormatQuote } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
mainContainer:{
    minHeight:"100vh",
    display:"grid",
    placeItems:"center",
    background:"#f1f1f1",
    marginTop:'10rem',

    [theme.breakpoints.between("xs", "sm")]: {
        transform:"translate(0%,-10%)",
    },
    [theme.breakpoints.up( "sm")]: {
        transform:"translate(0%,10%)",
    },
},
title:{
    textAlign:"center",
    fontSize:"2.5rem",
    letterSpacing:".7rem",
    textTransform:"uppercase",
    // marginTop:"7rem",

    [theme.breakpoints.between("xs","sm")]: {
        // marginTop:"-7rem",
        fontSize:"2rem",
    },
},
underline:{
    height:"0.25rem",
    width:"5rem",
    background:"#f44336",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"-4rem",

    [theme.breakpoints.between("xs","sm")]: {

        marginBottom:'6rem',
    },

},

profile:{
width:"70vw",
background:"#f1f1f1",
padding:"1.5rem 2rem",
borderRadius:"20px",
boxShadow:"0 5px 10px rgba(0,0,0,0.2)",
textAlign:"center",
marginBottom:"4.5rem",
"&:hover":{
    boxShadow:"0 5px 10px rgba(0,0,0,0.4)",
},
[theme.breakpoints.between("xs","sm")]: {
transform:"translate(0%, -15%)",
width:"95vw",
// marginBottom:"4.5rem",
},
[theme.breakpoints.up("sm")]: {
    transform:"translate(0%, -20%)",
    width:"80vw",
    // marginBottom:"4.5rem",
    },

},
imgContainer:{
    position:"relative",
    width:"150px",
    height:"150px",
    borderRadius:"50%",
    margin:"0 auto",
    marginBottom:"1.5rem",
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
quoteIcon:{
    position:"absolute",
    top:"0",
    left:"0",
    width:"2.5rem",
    height:"2.5rem",
    display:"grid",
    placeItems:"center",
    borderRadius:"50%",
    transform:"translateY(25%)",
},
author:{
    marginBottom:"0.25rem",
},
job:{
    marginBottom:"0.5rem",
    textTransform:"uppercase",
    color:"f44336",
    fontSize:"0.85rem",
},
info:{
    marginBottom:"0.75rem",
},

}))
const Profile = () => {
    const classes = useStyles();

    const [index, setIndex] = useState(0);

    const {name, img, job, description,} = profile[index];


    return(
        
        <section className={classes.mainContainer}>
            <div>
                <h2 className={classes.title}>Kurzprofile</h2>
            <div className={classes.underline}></div>
            </div>

           
            <article className={classes.profile}>
                <div className={classes.imgContainer}>
                    <img src={img} alt={name} className={classes.personImg}/>
                    <span className={classes.quoteIcon}>
                        <FormatQuote/>
                    </span>
                </div>
                <h4 className={classes.author}>{name}</h4>
                <p className={classes.job}> {job} </p>
                <p className={classes.info}> {description} </p>

            </article>
        </section>
        
    )
};



export default Profile;