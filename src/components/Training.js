// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography, Box } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
    
//    root: {
//        "& > *": {
//            margin: theme.spacing(2),
//            width: theme.spacing(150),
//            height: theme.spacing(70),
//            transform: "translate(20%, 20%)",



//            [theme.breakpoints.between("xs", "sm")]: {
//                margin:theme.spacing(1),
//            height: theme.spacing(100),
//             //    padding:theme.spacing(0),
//                width:"100%",
//                transform:"translate(-10%,10%)",
//            },

//            [theme.breakpoints.between("sm", "md")]: {
//             margin:theme.spacing(1),
//             padding:theme.spacing(0),
//             width:"100%",
//             transform:"translate(-2%,10%)",
//         },

//        },
       
//    },
//    mainContainer: {
//        display:"flex",
//        flexDirection:"column",
//        alignItems:"center",
//        justifyContent:"space-between",
//        flexWrap:"wrap",

//       [theme.breakpoints.down("md")]: {
//         //   border:"2px solid red",
//           width: theme.spacing(40),
         
//       },
//    },
//    header: {
//        textTransform:"uppercase",
//        color:"#f44336"
//    },
//    first: {
//        width:"70vw",
//     display:"flex",
//     justifyContent:"space-between",
//     borderBottom:"1px solid rgba(0,0,0,0.2)",
//     boxShadow:"0 5px 5px rgba(0,0,0,0.2)",
   
    
//     [theme.breakpoints.down("md")]: {
//         // border:"2px solid red",
//         width:"90vw",
//         flexWrap:"wrap",
//     },
// },



// }));

// const Training = () => {
//     const classes = useStyles();
//     return (
//         <div className={classes.root}>
//             <Grid item xs={6}>
//                 <Box p={2} component="training" className={classes.mainContainer}>
//                 {/* <Box sx={{
//                     p:2,
//                     display:"grid",
//                     gridTemplateColumns:{md: "1fr 1fr"},
//                     gap:2,
//                 }}> */}
//                 <Typography variant="h4" className={classes.header}>weiterbildung</Typography>
                
            
//                 <Box p={2}  className={classes.first}>
//                 {/* <Box sx={{
//                     p:2,
//                     display:"grid",
//                     gridTemplateColumns:{md: "1fr 1fr"},
//                     gap:2,
//                 }}> */}
//                 <Typography variant="h6" className={classes.year}>22.09.2006-20.03.2009</Typography>
//                 <Typography variant="body1">Umschulung zum LKW Fahrer Fahrschule Block in Stadtlohn</Typography>
//                 </Box>

//                 <Box p={2}  className={classes.first}>
//                 <Typography variant="h6" className={classes.year}>01.07.2012-11.02.2014</Typography>
//                 <Typography variant="body1">Umschulung zum Berufskraftfahrer Bus mit IHK Abschluss beschleunigte grundqualifikation
//                 </Typography>
//                 </Box>

//                 <Box p={2}  className={classes.first}>
//                 {/* <Box sx={{
//                     p:2,
//                     display:"grid",
//                     gridTemplateColumns:{md: "1fr 1fr"},
//                     gap:2,
//                 }}> */}
//                 <Typography variant="h6" className={classes.year}>24.01.2011</Typography>
//                 <Typography variant="body1">ADR –Schein Basis & Tank
//                 </Typography>
//                 </Box>

//                 <Box p={2}  className={classes.first}>
//                 {/* <Box sx={{
//                     p:2,
//                     display:"grid",
//                     gridTemplateColumns:{md: "1fr 1fr"},
//                     gap:2,
//                 }}> */}
//                 <Typography variant="h6" className={classes.year}>23.05.2011</Typography>
//                 <Typography variant="body1">ADR-Schein Kl. 7 Radioaktive Stoffe
//                 </Typography>
//                 </Box>

//                  <Box p={2}  className={classes.first}>
//                 {/* <Box sx={{
//                     p:2,
//                     display:"grid",
//                     gridTemplateColumns:{md: "1fr 1fr"},
//                     gap:2,
//                 }}> */}
//                 <Typography variant="h6">25.06.2011</Typography>
//                 <Typography variant="body1">ADR-Schein Kl. 1 Explosive Stoffe und Gegenstände mit
//                     Explosivstoff
//                 </Typography>
//                 </Box>

//                  <Box p={2}  className={classes.first}>
//                  {/* <Box sx={{
//                     p:2,
//                     display:"grid",
//                     gridTemplateColumns:{md: "1fr 1fr"},
//                     gap:2,
//                 }}> */}
//                 <Typography variant="h6" className={classes.year}>24.01.2016</Typography>
//                 <Typography variant="body1">Verlängerung Seminar erfolgreich absolviert
//                 </Typography>
//                 </Box>

//                  <Box p={2}  className={classes.first}>
//                  {/* <Box sx={{
//                     p:2,
//                     display:"grid",
//                     gridTemplateColumns:{md: "1fr 1fr"},
//                     gap:2,
//                 }}> */}
//                 <Typography variant="h6" className={classes.year}>05.09.2017</Typography>
//                 <Typography variant="body1">Sprengtechnische Lehtgänge nach §32 der Ersten Verordnung
//                     zum Sprengstoffgesetz
//                 </Typography>
//                 </Box>
//                 </Box>

                
//                 </Grid>
//           </div>
//     )
//                     }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    mainContainer:{
        marginTop:'3rem',
        background:'#f5f5f5' ,
        minHeight:"100vh",
    },
    timeLine:{
        position:'relative',
        padding: '0.5rem',
        margin:'0 auto',

        "&:before":{
            content:"''",
            position:'absolute',
            height:'100%',
            border:'1px solid tan',
            right:'40px',
            top:'0',
        },

        "&:after": {
            content:"",
            display:'table',
            clear:'both',
        },
        [theme.breakpoints.up("md")] : {
            padding:'1rem',

            "&:before": {
                left:'calc(50% - 1px)',
                right:'auto',
            }
        }
    },
    timeLineItem: {
        padding:'1rem',
        borderBottom:'2px solid grey',
        position:'relative',
        margin:'1rem 3rem 1rem 1rem',
        clear:'both',

        "&:after":{
            content:"''",
            position:'absolute',
        },
        "&:before" : {
            content:"' '",
            position:'absolute',
            right:'-0.625rem',
            top:'calc(50% - 5px)',
            borderStyle:'solid',
            borderColor:' #f44336 #f44336 transparent transparent',
            borderWidth:'0.625rem',
            transform:'rotate(45deg)',
        },
        [theme.breakpoints.up('md')] :{
            width:'24%',
            margin:'1rem',

            "&:nth-of-type(2n)": {
                float:'right',
                margin:'1rem',
                borderColor:'grey',
            },
            "&:nth-of-type(2n):before" :{
                right:'auto',
                left:'-0.625rem',
                borderColor:'transparent transparent #f44336 #f44336',
            },
        },
    },
    timeLineYear: {
        textAlign:'center',
        maxWidth:'8.375rem',
        maxHeight:'2.5rem',
        margin:' 0 1rem 0 auto',
        fontSize:'1.8rem',
        background:'#616161',
        color:'#f1f1f1',
        // color:'#616161',
        padding:'0.5rem 1rem 0 ',

        "&:before": {
            display:'none',
        },
        [theme.breakpoints.up('md')] : {
            textAlign:'center',
            margin:' 0 auto',

            "&:nth-of-type(2n)": {
                float:'none',
                margin:'0 auto',
            },
            "&:nth-of-type(2n):before ":{
                display:'none',
            }
        }
    },
    heading:{
        color:'#f44336',
        padding:'5rem 0',
        textTransform:'uppercase',
    },
    subHeading:{
        color:'#333',
        padding:'0',
        textTransform:'uppercase',
    },
   
}));

const Training = () => {
    const classes = useStyles();
    return (
        <>
            <Box component='header' className={classes.mainContainer}>
                <Typography variant='h4' align='center' className={classes.heading}>
                weiterbildung
                </Typography>
             <Box component='div' className={classes.timeLine}>
             <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
             2006-2009
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                        lkw fahrer
                        </Typography>
                        <Typography variant='body1' align='center' style={{color:'#333', textTransform:"capitalize"}}>
                        fahrschule block
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                        Umschulung zum LKW Fahrer Fahrschule Block in StadtlohnLorem ipsum
                        </Typography>
                        </Box>
               
             <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
             2012-2014
                    </Typography>
             <Box component="div" className={classes.timeLineItem}>
                <Typography variant='h5' align='center' className={classes.subHeading}>
                Berufskraftfahrer
                </Typography>
                 <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                 fahrschule rheinhold
                 </Typography>
                <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                Umschulung zum Berufskraftfahrer Bus mit IHK Abschluss beschleunigte grundqualifikation
             </Typography>
                 </Box>


                 <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 24.01.2011
                    </Typography>
                 <Box component='div' className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                    adr-schein
                     </Typography>
                    <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                    dekra akademie / gelsenkirchen
                     </Typography>
                 <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                 ADR –Schein Basis & Tank
                 </Typography>
                 </Box>
   
                 <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 23.05.2011
                      </Typography>
                  <Box component="div" className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                        adr - schein
                       </Typography>
                 <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                 dekra akademie
                  </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                    ADR-Schein Kl. 7 Radioaktive Stoffe
                 </Typography>
                     </Box>


                     <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                     25.06.2011
                        </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                <Typography variant='h5' align='center' className={classes.subHeading}>
                adr schein
                </Typography>
            <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
            dekra akademie
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                ADR-Schein Kl. 1 Explosive Stoffe und Gegenstände mit Explosivstoff
                        </Typography>
                    </Box>
                <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                24.01.2016
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
            <Typography variant='h5' align='center' className={classes.subHeading}>
            adr-schein
                    </Typography>
                <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                dekra akademie
                </Typography>
        <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
        Verlängerung Seminar erfolgreich absolviert
                    </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    05.09.2017
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                           adr-schein
                        </Typography>
                        <Typography variant='body1' align='center' style={{color:'#333', textTransform:'capitalize'}}>
                           dekra akademie
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                        Sprengtechnische Lehtgänge nach §32 der Ersten Verordnung zum Sprengstoffgesetz
                        </Typography>
                        </Box>

                </Box>
            </Box>

        </>
    )
}

     export default Training;
