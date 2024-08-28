import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { toast } from 'react-toastify';

const MyWork = () => {

  const notify = ()=>{
    toast("Curently we have only these work")
  }

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a 
            key={index} 
            href={work.w_link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mywork-item"
            onClick={() => console.log('Clicked:', work.w_link)}
          >
            <img 
              src={work.w_img} 
              alt={work.w_name || 'Project Image'} 
            />
          </a>
        ))}
      </div>
      <div className="mywork-showmore" onClick={notify}>
        <p>Show More</p>
        <img src={arrow_icon} alt="Show More" />
      </div>
    </div>
  );
};

export default MyWork;
