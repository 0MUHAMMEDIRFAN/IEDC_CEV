import { Link } from 'react-router-dom';
import React from 'react'
import "./Execom.css"
import sidharth from "./Images/Sidharth.jpg"
import Rohith from "./Images/Rohith.jpg"

function Execom(props) {
    const memebers = [
        { Name: "SIDHARTH", Role: "CEO", imgUrl: [sidharth], linkedin: "0muhammedirfan" },
        { Name: "ROHITH", Role: "Nodal Officer", imgUrl: { Rohith }, linkedin: "" },
        { Name: "UDIT", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "" },
        { Name: "SHIBIN", Role: "CFO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Madhav%20P%20Ashok.jpg", linkedin: "fsd" },
        { Name: "RASHEED", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "fs" },
        { Name: "ISMAIL", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "" },
        { Name: "VYSHNAV", Role: "CFO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Madhav%20P%20Ashok.jpg", linkedin: "" },
        { Name: "RAZIN", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "fsdf" },
        { Name: "RASHID", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "" },
        { Name: "MANU", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "" },
        { Name: "VENU", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "" },
        { Name: "SIDHARTH", Role: "CIO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/ANIRUDH%20EM.jpg", linkedin: "dfs" },
        { Name: "NIHAL", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "dfsfs" },
        { Name: "SIDHARTH", Role: "COO", imgUrl: "http://iedc.gectcr.ac.in/images/Team/Ebin%20(1)%20-%20Ebin%20Joseph.jpg", linkedin: "fsdf" },
    ]
    return (
        <div className='execom'>
            <div className={props.viewMore ? "cardsHome cards" : 'cards'}>
                {memebers.map((obj, index) => {
                    if (index > 1 && props.viewMore) return null
                    return (
                        <div className='parentCard' key={index}>
                            <div className="card">
                                <img className='image' src={obj.imgUrl} alt="Loading..." />
                                <div className="name">{obj.Name}</div>
                                <div className='role'>{obj.Role}</div>
                                {obj.linkedin ? <a href={"https://www.linkedin.com/in/" + obj.linkedin}><i className='bx bxl-linkedin-square' style={{ color: "#0e76a8" }}  ></i></a> : ""}
                            </div>
                        </div>
                    )
                })}
            </div>
            {props.viewMore && <Link to={"/IEDC_CEV/team"} style={{display: "flex", justifyContent: "center"}}><button>View More</button></Link>}

        </div>
    )
}

export default Execom
