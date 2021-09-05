import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    mainContainer:{
        marginTop:'4.5rem',
        background:'#f5f5f5' ,
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
            borderColor:'tomato tomato transparent transparent',
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
                borderColor:'transparent transparent tomato tomato',
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
        color:'tomato',
        padding:'3rem 0',
        textTransform:'uppercase',
    },
    subHeading:{
        color:'#333',
        padding:'0',
        textTransform:'uppercase',
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Box component='header' className={classes.mainContainer}>
                <Typography variant='h4' align='center' className={classes.heading}>
                    working experience
                </Typography>
             <Box component='div' className={classes.timeLine}>
             <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2013
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            web design
                        </Typography>
                        <Typography variant='body1' align='center' style={{color:'#333'}}>
                            company name
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                            Lorem ipsum
                        </Typography>
                        </Box>
               
             <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                 2014
                    </Typography>
             <Box component="div" className={classes.timeLineItem}>
                <Typography variant='h5' align='center' className={classes.subHeading}>
             web developer
                </Typography>
                 <Typography variant='body1' align='center' style={{color:'#333'}}>
             company name
                 </Typography>
                <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
             Lorem ipsum
             </Typography>
                 </Box>


                 <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2015
                    </Typography>
                 <Box component='div' className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                     web design
                     </Typography>
                    <Typography variant='body1' align='center' style={{color:'#333'}}>
                company name
                     </Typography>
                 <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                Lorem ipsum
                 </Typography>
                 </Box>
   
                 <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                          2016
                      </Typography>
                  <Box component="div" className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                        web developer
                       </Typography>
                 <Typography variant='body1' align='center' style={{color:'#333'}}>
                     company name
                  </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                    Lorem ipsum 
                 </Typography>
                     </Box>


                     <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017
                        </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                <Typography variant='h5' align='center' className={classes.subHeading}>
                web design
                </Typography>
            <Typography variant='body1' align='center' style={{color:'#333'}}>
                    company name
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                            Lorem ipsum
                        </Typography>
                    </Box>
                <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
            <Typography variant='h5' align='center' className={classes.subHeading}>
                        web developer
                    </Typography>
                <Typography variant='body1' align='center' style={{color:'#333'}}>
                        company name
                </Typography>
        <Typography variant="subtitle1" align="center" style={{color:'tan'}}>
                    Lorem ipsum 
                    </Typography>
                    </Box>
   

                </Box>
            </Box>

        </>
    )
}

export default About
