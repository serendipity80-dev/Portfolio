import {useState, useEffect} from 'react';
import ardShein from '../assets/ardItems';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles ({
//   root: {
//     height: '100vh',
//     overflow: 'hidden',
// },
// main: {
//   position:'absolute',
//   top: '20%',
//   left: '50%',
//   width:'60vw',
//   height:'70vh',
//   opacity:' 0',
//   transition: 'all 0.3s ease-in-out',
//   boxShadow:' 0 5px 10px rgba(255,255,255,0.3)',
// }
//   }
// )

const ArdShein = () => {

  // const classes = useStyles();

  const [data, setData] = useState(ardShein);
  const [index, setIndex] = useState(0);

  const prevSlide = ()=>{
    setIndex((oldIndex) =>{
      let index = oldIndex -1;
      if (index < 0) {
        index = data.length -1;
      }
      return index;
    });
  };
  const nextSlide = ()=>{
    setIndex((oldIndex) =>{
      let index = oldIndex +1;
      if (index >  data.length - 1) {
        index = 0;
      }
      return index;
    });
  };

      useEffect(() => {
        let slider = setInterval(() => {
                  setIndex((prevIndex) => {
                  let index = prevIndex +1
      
             if(index > data.length -1){
               index = 0
              }
               return index
             })
              },36000)
         return () => {
          clearInterval(slider)
        }
          },[index,data])

        return (
          <>
          <div className="App">
        <div className="section-center">
            {data.map((adrData,dataIndex) => {
                const {id,img, title} = adrData;
                let position = 'nextSlide'

                if(dataIndex === index){
                    position = 'activeSlide'
                }

                if(dataIndex === index -1 || (index === 0 && dataIndex === adrData.length -1)) {
                    position = " lastSlide";
                }

                return(
                    <una className={position} key={id}>
                        <img src={img} alt="traffic" className="bg ard"/>
                        <div className="shade"></div>
                        <div className="info">
                            <h2>{title}</h2>
                            
                        </div>   
                    </una>
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
</>

)

}

export default ArdShein;