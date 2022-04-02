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
        fontSize:'1.5rem',
        background:'#616161',
        color:'#f1f1f1',
        padding:'0.5rem 0.5rem 0 ',

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
        color:'#333',
        padding:'5rem 0',
        textTransform:'uppercase',
    },
    subHeading:{
        color:'#333',
        padding:'0',
        textTransform:'uppercase',
    },
    underline:{
        height:"0.25rem",
        width:"5rem",
        background:"#f44336",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"0.735rem",
    },
   
}));

const Training = () => {
    const classes = useStyles();
    return (
        <>
            <Box component='header' className={classes.mainContainer}>
                <Typography variant='h4' align='center' className={classes.heading}>
                weiterbildung
            <div className={classes.underline}></div>
                </Typography>
             <Box component='div' className={classes.timeLine}>
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
             2012-2014
                    </Typography>
             <Box component="div" className={classes.timeLineItem}>
                <Typography variant='h5' align='center' className={classes.subHeading}>
                Berufskraftfahrer
                </Typography>
                 <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                 fahrschule rheinhold GmbH / Düsseldorf
                 </Typography>
                <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                Umschulung zum Berufskraftfahrer Bus mit IHK Abschluss beschleunigte grundqualifikation
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
                        Umschulung zum LKW Fahrer Fahrschule Block in Stadtlohn
                        </Typography>
                        </Box>

                </Box>
            </Box>

        </>
    )
}

     export default Training;
