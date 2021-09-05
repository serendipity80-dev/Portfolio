import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme=>({
    form : {
        transform:"translate(0%,5%)",
        width:"50%",
    },
    button :{
        marginTop:"2rem",
        color: "tomato",
        borderColor:"tomato",
    },
}));

const InputField = withStyles({
    root: {
        marginTop:"2rem",
        "& label.Mui-focused":{
            color: "tomato",
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

    const [status,setStatus] = useState("Contact Me");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const {name, email, companyName, message } = e.target.elements;

        let details = {

            name:name.value,
            email:email.value,
            companyName:companyName.value,
            message:message.value,

        };

let response = await fetch ("http://localhost:3000/contact", {
    method:"POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    body:JSON.stringify(details),
});

    setStatus("Contact Me");

    let result = await response.json();
    alert(result.status);

    };

    return (
        <Box component="div" style={{backgroundColor:" #f5f5f5", height:"100vh"}}>
        <Grid container justifyContent = "center">
<Box component = "form" className={classes.form} onSubmit= {handleSubmit}>
    <Typography variant = "h5" style={{textTransform:"upperCase", marginTop:"3.5rem"}}>
        hire or contact me
    </Typography>
    <InputField fullWidth={true}
                label="Name"
                id="name"
                variant="outlined"
                margin="dense"
                size="medium"
                inputProps = {{style:{color:"#333"}}} />

                 <InputField fullWidth={true}
                            label="Email"
                            id="email"
                            variant="outlined"
                            margin="dense"
                            size="medium"
                            inputProps = {{style:{color:"#333"}}} />

              <InputField fullWidth={true}
                        label="Company Name"
                        id="companyName"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps = {{style:{color:"#333"}}} />

                <InputField fullWidth={true}
                            label="Your Message"
                            id="message"
                            variant="standard"
                            // margin="dense"
                            size="medium"
                            inputProps = {{style:{color:"#333"}}} />

                        <Button variant="outlined" fullWidth={true} className={classes.button} endIcon={<SendIcon/>}>{status}</Button>
</Box>
        </Grid>
        </Box>
    )
}

export default Contact
