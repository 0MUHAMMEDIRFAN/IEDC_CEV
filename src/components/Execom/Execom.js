import React from 'react'
import "./Execom.css"

function Execom() {
    const memebers = [
        { Name: "SIDHARTH", Role: "CEO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/bimal%20sunny%20CCO.jpg" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg" },
        { Name: "SIDHARTH", Role: "CFO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Madhav%20P%20Ashok.jpg" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg" },
        { Name: "SIDHARTH", Role: "CFO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Madhav%20P%20Ashok.jpg" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg" },
    ]
    return (
        <div className='execom'>
            <div className='cards'>
                {memebers.map((obj) => {
                    return (
                        <div className="card">
                            <img className='image' src={obj.imgUrl}/>
                            <div className="name">{obj.Name}</div>
                            <div className='role'>{obj.Role}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Execom
