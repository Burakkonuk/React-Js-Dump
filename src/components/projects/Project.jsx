import React from 'react'
import "./project.scss"

export default function Project({projectOpen, setProjectOpen}) {
  return (
    <div className={"project "+ (projectOpen && "active") }>
      <div className="wrapper">
        <div className="header">
              Car Rental Application
        </div>
        <div className="content"></div>
      </div>
      </div>
  )
}   
