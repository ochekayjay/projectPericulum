import { useState } from 'react'
import './App.css'
import { Routes, Router, Route } from 'react-router-dom'
import settingIcon from './iconHolder/Setting.png'
import homeIcon from './iconHolder/Home.png'
import documentIcon from './iconHolder/Document.png'
import calendarIcon from './iconHolder/Calendar.png'
import arrowIcon from './iconHolder/arrowDown.png'
import { DashboardData } from './Dataholder'
import PieChart from './graphBluePrint/PieChart'
import Segmentation from './pages/Segmentation'
import AllCustomers from './pages/AllCustomers'
import useWindowResize from './hook/UseWindowResize'
import { useNavigate } from 'react-router-dom'

function App() {
  const [segmentShow, setSegmentShow] = useState(false)
  const [calendarShow, setCalendarShow] = useState(false)
  const [startDate,setStartDate] = useState('')
  const [endDate,setEndDate] = useState('')
  const navigate = useNavigate()
  const [pieData,setPieData] = useState({
    labels: DashboardData.data_entries,
    datasets: [{
      label: "Total Population",
      data: DashboardData.data_entries.map( dat=> DashboardData[dat]["Total Population"]) }]
  })

  const {width,height} = useWindowResize()

  return (
    <div className="App">
        <div style={{width:'100vw',position:"fixed",top:'0px',zIndex:'1400000',left:"0px",height:'70px',padding:'0px 20px 0px 20px',boxSizing:"border-box",backgroundColor:"#2F74DD",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <p style={{color:'white',fontFamily:"NexaTextBold",fontSize:"20px"}}>CREDIT CHART</p>
            <img src={settingIcon}/>
        </div>
        <div style={{width:'80px',display:width<1000?"none":"block",position:"fixed",top:"70px",left:"0px",backgroundColor:"white",height:'calc(100vh - 70px)'}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around", height:"130px"}}>
            <section style={{cursor:"pointer"}} onClick={()=>navigate("/")}>
              <img src={homeIcon}/>
            </section>
            <section style={{cursor:"pointer"}} onClick={()=>navigate("/customers")} >
              <img src={documentIcon}/>
            </section>
          </div>
        </div>

        <section style={{minHeight:'calc(100vh - 70px)',overflow:"auto",padding:'15px 0px',marginLeft:width<1000?"0px":"80px",marginTop:'70px',backgroundColor:"#F5F7FA",width:width<1000?"100%":'calc(100vw - 80px)',boxSizing:"border-box"}}>
            <Routes>
                <Route path={"/"} element={<Segmentation/>}/>
                <Route path={'/customers'} element={<AllCustomers/>} />
                
            </Routes>
        </section>   
    </div>
  )
}

export default App
