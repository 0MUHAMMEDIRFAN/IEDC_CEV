import './Gallery.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Gallery(props) {

  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));
  // const images = [
  //   "https://picsum.photos/id/0/5000/3333",
  //   "https://picsum.photos/id/1/5000/3333",
  //   "https://picsum.photos/id/2/5000/3333",
  //   "https://picsum.photos/id/3/5000/3333",
  //   "https://picsum.photos/id/4/5000/3333",
  //   "https://picsum.photos/id/5/5000/3333"
  // ]
  const span = (index) => {
    const img = document.getElementById(`img${index}`);
    if(document.getElementById(`img${index}`) && Math.round(img.offsetHeight / 150) >= 2 ){
      document.getElementById(`imgDiv${index}`).style.gridRow="auto / span 2" 
    }
  }
  const [scrolled, setScrolled] = useState(0)
  const [imgwidth, setImgwidth] = useState(320)
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
    <div className='gallery' id='gallery' >
      <h1 className='headingText'>Gallery</h1>
      <div className={props.viewMore ? 'images' : 'photos'} id="images" onScroll={slide}  >
        {images.map((obj, index) => {
          return (
            <div className="image" id={"imgDiv"+index} key={index} onLoad={e => setImgwidth(e.target.offsetWidth)}>
              <img src={obj} id={"img" + index} alt="NETWORK ERROR" draggable="false" />
            {props.viewMore || span(index)}
            </div>
          )
        })}
      </div>
      {props.viewMore &&
        <div className="radio">
          {
            images.map((data, index) => {

              return (
                (index <= images.length - (Math.round(window.innerWidth / imgwidth))) && <input type="radio" name="img" id={"id" + index} key={index} onClick={() => { scroll(index) }} />
              )

            })

          }

          <div className="nav left" onClick={() => { imgs.scrollLeft -= imgwidth }}><i className='bx bxs-left-arrow-alt'></i></div>
          <div className="nav right" onClick={() => { imgs.scrollLeft += imgwidth }}><i className='bx bxs-right-arrow-alt'></i></div>
        </div>
      }
      {props.viewMore && <Link to={"/IEDC_CEV/gallery"}><button>View More</button></Link>}

    </div>
  )

}

export default Gallery;
