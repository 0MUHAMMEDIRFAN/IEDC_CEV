import './Events.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

function Events() {
  const images = [
    "https://picsum.photos/id/0/5000/3333",
    "https://picsum.photos/id/1/5000/3333",
    "https://picsum.photos/id/2/5000/3333",
    "https://picsum.photos/id/3/5000/3333",
    "https://picsum.photos/id/4/5000/3333",
    "https://picsum.photos/id/5/5000/3333"
  ]
  const [scrolled, setScrolled] = useState(0)
  const [imgwidth, setImgwidth] = useState(3)
  const [getId, setGetId] = useState(0)
  // const sectionwidth = window.innerWidth;
  let radio = document.querySelector("#id" + getId)
  useEffect(() => {
    setImgwidth(document.querySelector(".events .images .image").offsetWidth);
    
  }, [])
  const slide = (event) => {
    setScrolled(event.target.scrollLeft);
    setGetId(Math.round((scrolled) / (imgwidth)))
    radio.checked = true;
    // console.log(Math.round((scrolled) / (imgwidth)));
    scroll(event)
  }
  const scroll = (event) => {
    // setScrolled(120)
    // event.target.scrollLeft = 0;

  }


  // const order = 1;
  return (
    <div className='events' id='events' >

      <div className='images' id="images" onScroll={slide}>
        {images.map((obj) => {
          return (
            <div className="image">
              <img src={obj} alt="NETWORK ERROR" draggable="false" />
            </div>
          )
        })}
      </div>
      <div className="radio">
        {
          images.map((key, index) => {
            return (
              <input type="radio" name="img" id={"id" + index} onClick={scroll} />
            )

          })
        }
        {/* <input type="radio" name='img' defaultChecked />
        <input type="radio" name='img' />
        <input type="radio" name='img' />
        <input type="radio" name='img' />
        <input type="radio" name='img' />
      <input type="radio" name='img' /> */}
      </div>
    </div>
  )

}

export default Events
