import React from 'react'
import {VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
 

function Experience() {
  return (
    <div className="experience" style={{paddingTop:100}}>
      <VerticalTimeline lineColor="#3e497a" >
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Colegiul Național Avram Iancu, Ștei, Romania
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Facultatea de Automatică și Calculatoare, Timișoara, Romania
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Informatics</p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  )
}

export default Experience