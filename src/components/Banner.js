import {useState, useEffect} from 'react';
import images from '../assets/dataImages';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';




const Banner = () => {


    const [bg,setBg] = useState(images);
    const [index ,setIndex] = useState(0);
  
    const prevSlide = ()=>{
        setIndex((oldIndex) =>{
          let index = oldIndex -1;
          if (index < 0) {
            index = bg.length -1;
          }
          return index;
        });
      };
      const nextSlide = ()=>{
        setIndex((oldIndex) =>{
          let index = oldIndex +1;
          if (index >  bg.length - 1) {
            index = 0;
          }
          return index;
        });
      };

    useEffect(() => {
      let slider = setInterval(() => {
        setIndex((prevIndex) => {
          let index = prevIndex +1
          
          if(index > bg.length -1){
            index = 0
          }
          return index
        })
      },5000)
      return () => {
        clearInterval(slider)
      }
    },[index,bg])

    return (
      <>
        <div className="App">
        <div className="section-center">
            {bg.map((image,imageIndex) => {
                const {id,img, title} = image;
                let position = 'nextSlide'

                if(imageIndex === index){
                    position = 'activeSlide'
                }

                if(imageIndex === index -1 || (index === 0 && imageIndex === image.length -1)) {
                    position = " lastSlide";
                }

                return(
                    <main className={position} key={id}>
                        <img src={img} alt="traffic" className="bg"/>
                        <div className="shade"></div>
                        <div className="info">
                            
                            <h3>{title}</h3>
                            <Button variant="contained" color="secondary" className="btn-banner">
                              <Link className="btn-link" to="/contact">kontakt</Link>
                          </Button>
                        </div>   
                    </main>
                )
            })}
            <button className="prev">
                <ChevronLeftIcon onClick={prevSlide}/>
            </button>
            <button className="next">
                <ChevronRightIcon onClick={nextSlide}/>
                  </button>
                </div>   
        </div>

        <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
        <p>Nach unten scrollen</p>
      </div>
        </>
    )
}

export default Banner
