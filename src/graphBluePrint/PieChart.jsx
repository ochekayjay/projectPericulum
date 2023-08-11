import React from 'react'
import {Pie} from "react-chartjs-2"
import { Chart as ChartJS} from "chart.js/auto"

function PieChart({chartData}) {

  
const option = {
  plugins: {
     legend:{display: false,} // This will hide the legend
  },
};
  return <>
            < Pie data={chartData} options={option}/>;
        </>
  
}

export default PieChart