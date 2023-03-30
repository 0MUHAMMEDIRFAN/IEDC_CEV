import React from 'react'
import { Link } from "react-router-dom"
import FI from "../../images/FI.png"
import "./Startup.css"

function Startup(props) {
    const startups = [
        {
            Name: "FINITE INTELLIGENCE",
            Logo: FI,
            Story: "Finite Intelligence is a technology popularization start up initiative at College of Engineering Vadakara under Innovation and Entrepreneurship Development Cell (IEDC) supported by Kerala Startup Mission (KSUM). This startup initiative shaped as a successful outcome of e Yantra LabSetup Initiative (e-LSI) by IIT Bombay. Primary focus of Finite Intelligence is to conduct technology outreach programs for students with a mission of ‘learn by doing’. Students can harness the hands-on experience of Industry 4.0 technologies such as Artificial Intelligence, Internet of Things, Robotics through training programs and live projects. We train students, teachers and institutions by establishing an innovation culture tasked with solving real problems using technology.",
            Vision: "To enable students to attain unprivileged access to Industry 4.0 technologies and to ensure early roll on to skill aligned learning. ",
            Mission: "",
            Do: ""
        },
    ]

    return (
        <div className="startup">
            <div className="heading">
                <h1>STARTUPS</h1>
                {props.viewMore && <Link to="/IEDC_CEV/startup"><button>View more</button></Link>}

            </div>
            <div className="startups">
                {startups.map((obj, index) => {
                    if (index >= props.num) return (null)
                    return (
                        <div className='contents' key={index}>
                            <div className="logo">
                                <img src={obj.Logo} alt="" />
                            </div>
                            <div className={props.viewMore ? "text" : "text fullText"}>
                                <h1>{obj.Name}</h1>
                                <p>{obj.Story}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Startup
