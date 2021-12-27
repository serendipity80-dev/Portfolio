import React from "react";
import { Carousel } from "react-carousel-minimal";
import images from '../assets/dataImages';


const NewBanner = () => {


    const captionStyle = {
        fontSize: '2rem',
        fontWeight:'400',
        textTransfrom:'uppercase',
    }
    
    const slideNumberStyle = {
        fontSize:' 20px',
        fontWeight:'bold',
    }

    return(
        <>
<div className="App">
    <div style={{padding:'0 20px',marginTop:'5rem'}}>
        <Carousel data={images}
                time={3000}
                width='90vw'
                height='500px'
                captionStyle={captionStyle}
                radius='10px'
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition='bottom'
                automatic={true}
                dots={true}
                pauseIconColor='white'
                pauseIconSize='40px'
                slideBackgroundColor='#333'
                slideImageFit='cover'
                thumbnails={true}
                thumbnailWidth='250px'
                
                style={{
                    
                    textAlign: 'center',
                    maxWidth: '70vw',
                    maxHeight: '500px',
                    margin: '40px auto',
                    textTransform: 'uppercase',
                    color: 'red',

                }}
                />
    </div> 
</div>

</>
    )

}


export default NewBanner;