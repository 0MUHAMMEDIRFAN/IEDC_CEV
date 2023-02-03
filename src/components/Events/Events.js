import './Events.css';
import React from 'react';

function Events() {
  const images = [
    "https://picsum.photos/id/0/5000/3333",
    "https://picsum.photos/id/1/5000/3333",
    "https://picsum.photos/id/2/5000/3333",
    "https://picsum.photos/id/3/5000/3333",
    "https://picsum.photos/id/4/5000/3333",
    "https://picsum.photos/id/5/5000/3333"
  ]
  // const order = 1;
  return (
    <div className='events'>
      
      <div className='images'>
        {images.map((obj) => {
          return (
            <div className="image">
              <img src={obj} alt="NETWORK ERROR" draggable="false" />
            </div>
          )
        })}
      </div>
      <div className="radio">

        <input type="radio" defaultChecked name='img' />
        <input type="radio" name='img' />
        <input type="radio" name='img' />
        <input type="radio" name='img' />
        <input type="radio" name='img' />
      </div>
    </div>
  )
}

export default Events
