import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Training from './Training';

const useStyles = makeStyles((theme) => ({
    
    mainContainer:{
        marginTop:'4.5rem',
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

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Box component='header' className={classes.mainContainer}>
                <Typography variant='h4' align='center' className={classes.heading}>
                Beruflicher Werdegang
            <div className={classes.underline}></div>
                </Typography>

             <Box component='div' className={classes.timeLine}>
                        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018-2021
                        </Typography>
                        <Box component='div' className={classes.timeLineItem}>
                            <Typography variant='h5' align='center' className={classes.subHeading}>
                               omnibusfahrer
                            </Typography>
                            <Typography variant='body1' align='center' style={{color:'#333', textTransform:'capitalize'}}>
                               tirtey GmbH
                            </Typography>
                            <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                            Als Omnibusfahrer bei Reiseb??ro und Omnibusbetrieb Tirtey
                            GmbH & Co. KG, in Titz-R??dingen
                            Ab September 2020 als Disponent in Bochum t??tig.
                            </Typography>
                            </Box>
                        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2014-2018
                            </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                    omnibusfahrer
                            </Typography>
                        <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                        wega reisen GmbH
                        </Typography>
                <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                Als Omnibusfahrer bei der Firma WEGA Reisen GmbH
                in Ratingen 
                            </Typography>
                            </Box>
                        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2011-2014
                           </Typography>
                       <Box component='div' className={classes.timeLineItem}>
                   <Typography variant='h5' align='center' className={classes.subHeading}>
                   lkw-fahrer
                   </Typography>
               <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
               spedition tralas GmbH
                   </Typography>
                   <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                   Fahrer eines Planenzug??s bei der Spedition Tralas GmbH in
                   Dorsten
                           </Typography>
                       </Box>
                        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2009-2010
                             </Typography>
                         <Box component="div" className={classes.timeLineItem}>
                               <Typography variant='h5' align='center' className={classes.subHeading}>
                               lkw-fahrer
                              </Typography>
                        <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                        auto oberman GmbH
                         </Typography>
                           <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                           Als Fahrer einen Autotransporter (Achter Zug)
                           Besch??ftigt als LKW-Fahrer bei int. Spedition Auto-Obermann  
                        </Typography>
                            </Box>
                        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2009
                           </Typography>
                        <Box component='div' className={classes.timeLineItem}>
                           <Typography variant='h5' align='center' className={classes.subHeading}>
                           praktikum
                            </Typography>
                           <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                           auto  oberman GmbH
                            </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                        Praktikum als LKW-Fahrer bei int. Spedition Auto-Obermann GmbH
                        </Typography>
                        </Box>
          
                        <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2006
                               </Typography>
                        <Box component="div" className={classes.timeLineItem}>
                           <Typography variant='h5' align='center' className={classes.subHeading}>
                           lagerarbeit
                           </Typography>
                            <Typography variant='body1' align='center' style={{color:'#333',  textTransform:"capitalize"}}>
                            pdm
                            </Typography>
                           <Typography variant="subtitle1" align="center" style={{color:'tan', textTransform:"capitalize"}}>
                           verantwortlich f??r die be- und Entladung der LKW??s und die fachm??nnische Lagerung der
                           Ware bei der Firma Greiwing in Greven 
                        </Typography>
                            </Box>
             <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
             2003-2005
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                        kellner
                        </Typography>
                        <Typography variant='body1' align='center' style={{color:'#333', textTransform:"capitalize"}}>
                        restaurant kupres alt oxford / Stadtlohn
                        </Typography>
                       
                        </Box>
               





                </Box>
            <Training/>

            </Box>
        </>

    )
}

export default About
