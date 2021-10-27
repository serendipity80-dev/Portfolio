import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
   root: {
       "& > *": {
           margin: theme.spacing(2),
           width: theme.spacing(150),
           height: theme.spacing(70),
           transform: "translate(20%, 20%)",



           [theme.breakpoints.between("xs", "sm")]: {
               margin:theme.spacing(1),
           height: theme.spacing(100),
            //    padding:theme.spacing(0),
               width:"100%",
               transform:"translate(-10%,10%)",
           },

           [theme.breakpoints.between("sm", "md")]: {
            margin:theme.spacing(1),
            padding:theme.spacing(0),
            width:"100%",
            transform:"translate(-2%,10%)",
        },

       },
       
   },
   mainContainer: {
       display:"flex",
       flexDirection:"column",
       alignItems:"center",
       justifyContent:"space-between",
       flexWrap:"wrap",

      [theme.breakpoints.down("md")]: {
        //   border:"2px solid red",
          width: theme.spacing(40),
         
      },
   },
   header: {
       textTransform:"uppercase",
       color:"#f44336"
   },
   first: {
       width:"70vw",
    display:"flex",
    justifyContent:"space-between",
    borderBottom:"1px solid rgba(0,0,0,0.2)",
    boxShadow:"0 5px 5px rgba(0,0,0,0.2)",
   
    
    [theme.breakpoints.down("md")]: {
        // border:"2px solid red",
        width:"90vw",
        flexWrap:"wrap",
    },
},



}));

const Training = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={6}>
                <Box p={2} component="training" className={classes.mainContainer}>
                {/* <Box sx={{
                    p:2,
                    display:"grid",
                    gridTemplateColumns:{md: "1fr 1fr"},
                    gap:2,
                }}> */}
                <Typography variant="h4" className={classes.header}>weiterbildung</Typography>
                
            
                <Box p={2}  className={classes.first}>
                {/* <Box sx={{
                    p:2,
                    display:"grid",
                    gridTemplateColumns:{md: "1fr 1fr"},
                    gap:2,
                }}> */}
                <Typography variant="h6" className={classes.year}>22.09.2006-20.03.2009</Typography>
                <Typography variant="body1">Umschulung zum LKW Fahrer Fahrschule Block in Stadtlohn</Typography>
                </Box>

                <Box p={2}  className={classes.first}>
                <Typography variant="h6" className={classes.year}>01.07.2012-11.02.2014</Typography>
                <Typography variant="body1">Umschulung zum Berufskraftfahrer Bus mit IHK Abschluss beschleunigte grundqualifikation
                </Typography>
                </Box>

                <Box p={2}  className={classes.first}>
                {/* <Box sx={{
                    p:2,
                    display:"grid",
                    gridTemplateColumns:{md: "1fr 1fr"},
                    gap:2,
                }}> */}
                <Typography variant="h6" className={classes.year}>24.01.2011</Typography>
                <Typography variant="body1">ADR –Schein Basis & Tank
                </Typography>
                </Box>

                <Box p={2}  className={classes.first}>
                {/* <Box sx={{
                    p:2,
                    display:"grid",
                    gridTemplateColumns:{md: "1fr 1fr"},
                    gap:2,
                }}> */}
                <Typography variant="h6" className={classes.year}>23.05.2011</Typography>
                <Typography variant="body1">ADR-Schein Kl. 7 Radioaktive Stoffe
                </Typography>
                </Box>

                 <Box p={2}  className={classes.first}>
                {/* <Box sx={{
                    p:2,
                    display:"grid",
                    gridTemplateColumns:{md: "1fr 1fr"},
                    gap:2,
                }}> */}
                <Typography variant="h6">25.06.2011</Typography>
                <Typography variant="body1">ADR-Schein Kl. 1 Explosive Stoffe und Gegenstände mit
                    Explosivstoff
                </Typography>
                </Box>

                 <Box p={2}  className={classes.first}>
                 {/* <Box sx={{
                    p:2,
                    display:"grid",
                    gridTemplateColumns:{md: "1fr 1fr"},
                    gap:2,
                }}> */}
                <Typography variant="h6" className={classes.year}>24.01.2016</Typography>
                <Typography variant="body1">Verlängerung Seminar erfolgreich absolviert
                </Typography>
                </Box>

                 <Box p={2}  className={classes.first}>
                 {/* <Box sx={{
                    p:2,
                    display:"grid",
                    gridTemplateColumns:{md: "1fr 1fr"},
                    gap:2,
                }}> */}
                <Typography variant="h6" className={classes.year}>05.09.2017</Typography>
                <Typography variant="body1">Sprengtechnische Lehtgänge nach §32 der Ersten Verordnung
                    zum Sprengstoffgesetz
                </Typography>
                </Box>
                </Box>

                
                </Grid>
          </div>
    )
                    }

     export default Training;
