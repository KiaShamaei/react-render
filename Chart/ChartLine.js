//chart.js is main dependency for react-chartjs-2 npm i react-chartjs-2 chart.js
import React from "react";
import {Line} from "react-chartjs-2";
import "./Chart.css";

const ChartLine = () => {
  const data = {
    labels: ["apr", "may", "jun", "july"],
    datasets: [
      {
        label: "Sales fo 2020 (M)",
        
        backgroundColor: ["rgba(75,192,192,1)"],
		piontBackgroundColor : ["rgba(10,192,192,3)"],
        borderColor: ["rgba(0,0,0,1)"],
		pointBorderColor :["rgba(360,206,180,.1)"],
       
        data: [3, 2.5, 5, 7],
      },
	  {
        label: "Sales fo 2022 (M)",
       
        backgroundColor: ["rgba(360,206,180,.1)"],
        borderColor: ["rgba(0,0,10,1)"],
       
        data: [1, 5, 3, 8],
      },
    ],
  };
  // const data = {
  // 	labels: ['January', 'February', 'March',
  // 			 'April', 'May'],
  // 	datasets: [
  // 	  {
  // 		label: 'Rainfall',
  // 		fill: false,
  // 		lineTension: 0.5,
  // 		backgroundColor: 'rgba(75,192,192,1)',
  // 		borderColor: 'rgba(0,0,0,1)',
  // 		borderWidth: 2,
  // 		data: [65, 59, 80, 81, 56]
  // 	  }
  // 	]
  //   }
  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
};

export default ChartLine;
