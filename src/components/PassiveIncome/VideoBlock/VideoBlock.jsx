import React from 'react';
import "./VideoBlock.scss";

function VideoBlock() {
  return (
    <div className='video-block'>
      <div className="video-header">
        <h1>Полная инструкция по публичному трейдингу</h1>
        <div className='blue-line'></div>
      </div>
      
      <div className='video-container'>
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/7PgPuSHyQ14" 
            title="Трейдинг с нуля: самое ПРОСТОЕ объяснение каждой детали" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    
    </div>
  );
}

export default VideoBlock;