import React from 'react'
import "./Execom.css"

function Execom() {
    const memebers = [
        { Name: "SIDHARTH", Role: "CEO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/bimal%20sunny%20CCO.jpg", linkedin: "fsdf" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "" },
        { Name: "SIDHARTH", Role: "CFO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Madhav%20P%20Ashok.jpg", linkedin: "fsd" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "fs" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "" },
        { Name: "SIDHARTH", Role: "CFO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Madhav%20P%20Ashok.jpg", linkedin: "" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "fsdf" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "dfs" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "dfsfs" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "fsdf" },
    ]
    return (
        <div className='execom'>
            <div className='cards'>
                {memebers.map((obj) => {
                    return (
                        <div className='parentCard'>

                            <div className="card">
                                <img className='image' src={obj.imgUrl} alt="Loading..." />
                                <div className="name">{obj.Name}</div>
                                <div className='role'>{obj.Role}</div>
                                {obj.linkedin ? <a href={obj.linkedin}><i className='bx bxl-linkedin-square' style={{ color: "#0e76a8" }}  ></i></a> : ""}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Execom
