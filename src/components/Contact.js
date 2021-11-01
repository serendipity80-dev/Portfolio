import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme=>({
    form : {
        transform:"translate(0%,5%)",
        width:"100%",
    },
    button :{
        marginTop:"2rem",
        color:"#f1f1f1",
        background:"#f44336",
        "&:hover": {
            color:"#f44336",
        }
    },
    
}));

const InputField = withStyles({
    root: {
        marginTop:"2rem",
        "& label.Mui-focused":{
            color: "#f44336",
        },
        "& label": {
            color:'tan',
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset": {
                borderColor:"tan",
            },
            "&:hover fieldset":{
                borderColor:"tan",
            },
            "& .Mui-focused fieldset":{
                borderColor:"tan",
            },
        },
       
    },
})(TextField);

const Contact = () => {
    const classes = useStyles();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xd0lt88', 'template_rvr2uzr', e.target, 'user_ZYHhw5Xp4i3qpbBRcr0Xw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };



    return (
        <Box component="div" style={{backgroundColor:" #f5f5f5", height:"100vh"}}>
        <Grid container justifyContent = "center">
       <form  onSubmit= {sendEmail}>
<Box component = "form" ref={form} className={classes.form}>
    <Typography variant = "h5" style={{textTransform:"upperCase", marginTop:"4.5rem"}}>
        kontaktieren sie mich
    </Typography>
    
    <InputField fullWidth={true}
                label="Name"
                name="name"
                variant="outlined"
                margin="dense"
                size="medium"
                inputProps = {{style:{color:"#333"}}}
                required
                />

                 <InputField fullWidth={true}
                            label="Email"
                            name="email"
                            variant="outlined"
                            margin="dense"
                            size="medium"
                            inputProps = {{style:{color:"#333"}}}
                            required
                            />

              <InputField fullWidth={true}
                        label="Subject"
                        name="subject"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps = {{style:{color:"#333"}}}
                        required
                        />

                <InputField fullWidth={true}
                            label="Your Message"
                            name="message"
                            variant="standard"
                            size="medium"
                            inputProps = {{style:{color:"#333"}}}
                            required   
                            />

                        <Button variant="outlined" fullWidth={true} className={classes.button} endIcon={<SendIcon/>}>Contact me</Button>
                       
</Box>
</form>
        </Grid>
        </Box>
    )
}

export default Contact
