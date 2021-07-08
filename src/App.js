import Sidebar from "./Components/Sidebar/sideBar"
import Topbar from "./Components/Topbar/Topbar";
import "./App.css";
import Home from "./Components/pages/Home";

function App() {
  return (
    <div>  
      
     <Topbar/>
    <div className="custom">
      <Sidebar/>
        <Home/>
  
    </div>
       </div>
 
  );
}

export default App;
