import "./chart.css";
import Axios from 'axios';
import React, {useEffect,useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart() {

  let [responseData, setResponseData] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3000/orderbydate')
    .then(response=>{
        if(response.data.success){
          setResponseData(response.data.order)
            console.log(responseData)
        }else {
            alert('Unable to get chart Data')
        }
    }) 
    .catch((error) => {
      console.log(error)
    })
},[])    
      
    return (
        <div className="chart">
        <h3 className="chartTitle">ORDERS THIS YEAR</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1} >
         <LineChart data={responseData} >
         <XAxis dataKey="_id" stroke="#5550bd"/>
         <YAxis/>
         <Line type="monotone" dataKey="count" stroke="#5550bd"/>
         <Tooltip />
         <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
         </LineChart>
        </ResponsiveContainer>
        </div>
        
    )
}

export default Chart;