import React from 'react'
import './concentric.css'

function ConcentricCircles({percentage, circleWidth, radius, backColorClass}) {
    
    const dashArray = radius* Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage)/100
  return (
    <div>
        <svg 
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
            <circle
                cx={circleWidth/2}
                cy={circleWidth/2}
                strokeWidth="15px"
                r={radius}
                className='concentric'
            />

            <circle
                cx={circleWidth/2}
                cy={circleWidth/2}
                strokeWidth="15px"
                r={radius}
                className={backColorClass==='TheMicroTechs'?"microTech":
                           backColorClass==='TheLoyalists'?"TheLoyalists":
                           backColorClass==='AgricClients'?"AgricClients":
                           backColorClass==='TheRetailTechs'?"TheRetailTechs": 'TheCorporates'}
                
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }}
                transform= {`rotate(-90 ${circleWidth/2} ${circleWidth/2}`}
            />

        </svg>

    </div>
  )
}

export default ConcentricCircles