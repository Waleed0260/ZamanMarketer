import React, {useState} from 'react'
import "./Service.css"
import ServicePage from './ServicePage'

const ServiceData = ({icon, title, para, project, client, objectives, goals}) => {
  const [servicePage, setServicePage] = useState(false);

  return (
    <>
    <div className='serviceData' onClick={()=> setServicePage(true)}>
        <span>{icon}</span>
        <h2>{title}</h2>
        <p>{para}</p>
    </div>
    <ServicePage open={servicePage} title={title} text={para} onClose={()=> setServicePage(false)} project={project} client={client} objectives={objectives} goals={goals}/>
    </>
  )
}

export default ServiceData
