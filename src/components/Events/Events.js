import React from 'react'
import "./Events.css"

function Gallery() {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('./Images', false, /\.(png|jpe?g|svg)$/));

  const details = [
    images.map((obj) => (
      {
        Name:"",
        img: obj,
        date:"",
        status:"",
        catogery:"",
      }
    ))
  ]
// console.log(details)
  return (
    <div className='events'>
      <h1 className="headingText">Latest Events</h1>
      <div className="imageContainer">
        {details[0].map((obj, index) => {
          console.log(obj)
          return (
            <div className="image" key={index}>
              <img src={obj.img} alt="Slow Network" draggable={false} />
              <p>{obj.Name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
