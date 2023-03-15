import './Events.css';
import React from 'react';
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
  const [imgwidth, setImgwidth] = useState(320)
  // const imgwidth =document.querySelector(".events .images .image").offsetWidth; 
  const [getId, setGetId] = useState(0)
  let imgs = document.getElementById("images")
  const radio = document.getElementById("id" + getId)
  const slide = (event) => {
    setScrolled(event.target.scrollLeft);
    setGetId(Math.round((scrolled) / (imgwidth)))
    radio.checked = true;
  }
  const scroll = (index) => {
    imgs.scrollLeft = (index * imgwidth);
  }


  return (
    <div className='events' id='events' >

      <div className='images' id="images" onScroll={slide}  >
        {images.map((obj, index) => {
          return (
            <div className="image" key={index} onLoad={e => setImgwidth(e.target.offsetWidth)}>
              <img src={obj} alt="NETWORK ERROR" draggable="false" />
            </div>
          )
        })}
      </div>
      <div className="radio">
        {
          images.map((data, index) => {

            return (
              (index <= images.length - (Math.round(window.innerWidth / imgwidth))) && <input type="radio" name="img" id={"id" + index} key={index} onClick={() => { scroll(index) }} />
            )

          })
          
        }

        {/* <progress style={{width:"100px", height:"30px"}} min={0} max={100} value={50}></progress> */}
        <div className="nav left" onClick={() => { imgs.scrollLeft -= imgwidth }}><i className='bx bxs-left-arrow-alt'></i></div>
        <div className="nav right" onClick={() => { imgs.scrollLeft += imgwidth }}><i className='bx bxs-right-arrow-alt'></i></div>
      </div>
    </div>
  )

}

export default Events;
