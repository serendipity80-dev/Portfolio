import React from 'react';
import ardShein from '../assets/ardItems';
import { Carousel } from "react-carousel-minimal";




const ArdShein = () => {

  
  const captionStyle = {
    fontSize: '2rem',
    fontWeight:'400',
    textTransfrom:'uppercase',
    color:'#404040',
    textShadow:'0 5px 0 rgba(255,255,255,0.5)',
}

const slideNumberStyle = {
    fontSize:' 20px',
    fontWeight:'bold',
}

return(
    <>
<div className="App">
<div style={{padding:'0 20px',marginTop:'6rem'}}>
    <Carousel data={ardShein}
            time={3000}
            width='80vw'
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
            thumbnailWidth='100px'
            
            style={{
                
                textAlign: 'center',
                maxWidth: '70vw',
                maxHeight: '500px',
                margin: '40px auto',
                textTransform: 'uppercase',

            }}
            />
</div> 
</div>

</>
)

 
   

      

//         return (
//           <>
//           <div className="App">
//         <div className="section-center">
//             {data.map((adrData,dataIndex) => {
//                 const {id,img, title} = adrData;
//                 let position = 'nextSlide'

//                 if(dataIndex === index){
//                     position = 'activeSlide'
//                 }

//                 if(dataIndex === index -1 || (index === 0 && dataIndex === adrData.length -1)) {
//                     position = " lastSlide";
//                 }

//                 return(
//                     <una className={position} key={id}>
//                         <img src={img} alt="traffic" className="bg ard"/>
//                         <div className="shade"></div>
//                         <div className="info">
//                             <h2>{title}</h2>
                            
//                         </div>   
//                     </una>
//                 )
//             })}
//             <button className="prev">
//                 <ChevronLeftIcon onClick={prevSlide}/>
//             </button>
//             <button className="next">
//     <ChevronRightIcon onClick={nextSlide}/>
// </button>
//         </div>   
//         </div>
// </>

// )

}

export default ArdShein;