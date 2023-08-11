import React from 'react'
import {Bar} from "react-chartjs-2"
import { Chart as ChartJS} from "chart.js/auto"

function BarChart({mainData}) {

    const dataHolder = {labels: ["SP","F&A","EE","E+E","Education"],
        datasets: [{
          label: "Total Population",
          data: mainData.map( dat=> dat.count),
          backgroundColor: ["#15CC93","#C4A2FC","#4C3EDB","#407BFF","#FFBC73"] }],}


    const option = {
        plugins: {
           legend:{display: false,} // This will hide the legend
        },
      };

  return (
    <>
        < Bar data={dataHolder} options={option}/>
    </>
  )
}

export default BarChart