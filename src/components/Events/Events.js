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

  useEffect(() => {
    setImgwidth(document.querySelector(".events .images .image").offsetWidth);
    document.getElementById("id0").checked = true;
  }, [])

  return (
    <div className='events' id='events' >

      <div className='images' id="images" onScroll={slide}  >
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
              <input type="radio" name="img" id={"id" + index} onClick={() => { scroll(index) }} />
              )
              
            })
          }

        {/* <progress style={{width:"100px", height:"30px"}} min={0} max={100} value={50}></progress> */}
          <div className="nav left" onClick={()=>{imgs.scrollLeft-=imgwidth}}><i class='bx bxs-left-arrow-alt'></i></div>
          <div className="nav right" onClick={()=>{imgs.scrollLeft+=imgwidth}}><i class='bx bxs-right-arrow-alt'></i></div>
      </div>
    </div>
  )

}

export default Events;
