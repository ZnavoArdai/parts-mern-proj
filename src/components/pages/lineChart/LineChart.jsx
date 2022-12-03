import React, { useEffect, useState } from "react";
import { Chart as ChartJs, CategoryScale,LinearScale,LineController,LineElement,PointElement
  ,Title,Tooltip,Legend, BarElement } from "chart.js";
import { Line} from "react-chartjs-2";

ChartJs.register( CategoryScale,LinearScale,LineController,PointElement
  ,LineElement,Title,Tooltip,Legend, BarElement );

const BarChart = () => {
 const [chartData,setChartData]=useState({
  datasets:[]
 })
 const [chartOptions,setChartOptions]=useState()

 useEffect(()=>{

  setChartData({
    labels:["asd","asd","asd","asd","asd"],
    datasets:[
      {
        lable:"woasdasdas",
        data:[12,33,44,55,66],
        borderColor:"rgb(43,43,55)",
        backgroundColor:"rgba(44,566,666,0.4)"
      }
    ]
  })
  setChartOptions({
    responsive:true,
    plugins:{
      legend:{
        position:"top"
      },
      titel:{
        display:true,
        text:"w"
      }
    }
  })
 },[])

  return (
    <div className="chartContainer mt-5 text-center">
Orders in the last 7 days
<div className="chart p-3">
      <Line data={chartData} height={40} options={chartOptions}/>
    </div>
    </div>
   
  );
};

export default BarChart;
