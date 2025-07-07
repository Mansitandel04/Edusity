import React from 'react';
import Title from '../Title/Title';
import "./Campus.css";
import gallery_1 from '../../assetes/gallery-1.png';
import gallery_2 from '../../assetes/gallery-2.png';
import gallery_3 from '../../assetes/gallery-3.png';
import gallery_4 from '../../assetes/gallery-4.png';



function Campus() {
  return (
    <div className='container'>
      <Title  subtitle="Gallery" title="Campus Photos"/>
      <div className='campus '>
        <div className='gallery'>
          <img src={gallery_1} alt='gallery1'/>
          <img src={gallery_2} alt='gallery2'/>
          <img src={gallery_3} alt='gallery3'/>
          <img src={gallery_4} alt='gallery4'/>
        </div>
            <button className='btn dark-btn'>See more  here  <i className="fa-solid fa-arrow-right"></i></button>
      </div>
      
    </div>
  );
}

export default Campus;
