import React from 'react';
import './facerecog.css';


const FaceRecognition = ({ imageUrl, box }) => {
    return (
      <div className="flex justify-center center" style={{marginTop:'2vh', marginBottom:''}} >
        <div className='relative mt2 mb4'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' style={{maxHeight:'650px'}}/>
          <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
      </div>
    );
  }
  
  export default FaceRecognition;