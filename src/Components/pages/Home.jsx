import Featuredinfo from "../FeaturedInfo/featuredinfo";
import Chart from "../Charts/chart"
import Chart1 from "../Charts/Chart1"
import Chart2 from "../Charts/chart2"
import CostumerChart from "../Charts/CostumerChart"
import "./Home.css";
import Axios from 'axios';
import React, {useEffect,useState} from 'react';


function Home()
{
    let [responseData, setResponseData] = useState([]);

    useEffect(()=>{
      Axios.get('http://localhost:3000/cust')
      .then(response=>{
          if(response.data.success){
            setResponseData(response.data.cardData)
              console.log(responseData)
          }else {
              alert('Unable to get Data')
          }
      }) 
      .catch((error) => {
        console.log(error)
      })
  },[])

  
    function fCard(val){
        console.log(val);
    return(
        <div>
        <Featuredinfo 
        id={val.id}
        title={val.title} 
        value={val.value}
         rate={val.rate}
        areaname={val.areaname}
        comparedtolastmonth={val.comparedtolastmonth}
         />
        </div>
    )
    }
    return (
        <div className="home">
        <div>
         </div>
         <div className="card">
         {responseData.cardData && responseData.cardData.map(fCard)}
         </div>
        <Chart/>
        <Chart1/>
        <Chart2/>
        <CostumerChart/>
        
        
         </div>
         
    )
}

export default Home;