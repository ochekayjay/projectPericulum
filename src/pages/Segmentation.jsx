import React, {useState} from 'react'
import settingIcon from '../iconHolder/Setting.png'
import homeIcon from '../iconHolder/Home.png'
import documentIcon from '../iconHolder/Document.png'
import calendarIcon from '../iconHolder/Calendar.png'
import arrowIcon from '../iconHolder/arrowDown.png'
import { DashboardData } from '../Dataholder'
import PieChart from '../graphBluePrint/PieChart'
import BarChart from '../graphBluePrint/BarChart'
import ConcentricCircles from '../graphBluePrint/ConcentricCircles'
import useWindowResize from '../hook/UseWindowResize'
import CustomerProfile from './CustomerProfile'
import { useNavigate } from 'react-router-dom'



function Segmentation() {
    const backgrounds = ["#15CC93","#C4A2FC","#4C3EDB","#407BFF","#FFBC73"]
    const [segmentShow, setSegmentShow] = useState(false)
    const [calendarShow, setCalendarShow] = useState(false)
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [customerProfile,setCustomerProfile] = useState(false)
    const navigate = useNavigate()
    const [pieData,setPieData] = useState({
      labels: DashboardData.data_entries,
      datasets: [{
        label: "Total Population",
        data: DashboardData.data_entries.map( dat=> DashboardData[dat]["Total Population"]),
        backgroundColor: ["#15CC93","#C4A2FC","#4C3EDB","#407BFF","#FFBC73"] }],
        
    })

    const {width,height} = useWindowResize()


  return (
    <div style={{width:'100%',height:'100%',paddingBottom:'25px'}}>

          <p style={{fontFamily:"Manrope",fontSize:"25px",fontWeight:'700',color:'black',width:"90%",margin:"15px auto",marginTop:'15px'}}>Welcome To Your Dashboard</p> 
          <div style={{width:'90%',margin:"30px auto",display:"flex",flexDirection:width<1000?'column':'row',justifyContent:'space-between',alignItems:"center",height:width<1000?"150px":""}}>
            <div style={{position:'relative',backgroundColor:'white',width:'450px',letterSpacing:"1.5px",height:'50px',borderRadius:"10px"}}>
               <div onClick={()=>setSegmentShow(!segmentShow)} style={{display:"flex",cursor:'pointer',justifyContent:"space-around",alignItems:"center",height:'100%',width:width<1000?"70%":"100%",margin:"0px auto"}}>
                  <p style={{fontFamily:"Manrope"}}>{customerProfile?"Customers' Profile": "Segmentation Analysis"}</p>
                  <img src={arrowIcon}/>
               </div>

                {segmentShow && <div style={{position:'absolute',display:"flex",boxShadow:'1px 0px 15px rgb(216, 214, 214)',flexDirection:"column",backgroundColor:'white',paddingLeft:'30px',justifyContent:"space-around",top:'70px',zIndex:"40",borderRadius:"10px",width:"450px",height:"150px"}}>
                                    <p onClick={()=>{setCustomerProfile(false);setSegmentShow(false)}} style={{fontWeight:"700",cursor:'pointer',fontFamily:"Manrope",fontSize:"20px",letterSpacing:'1.3px'}}>Segmentation Analysis</p>
                                    <p onClick={()=>{setCustomerProfile(true);setSegmentShow(false)}} style={{fontWeight:"700",cursor:'pointer',fontFamily:"Manrope",fontSize:"20px",letterSpacing:'1.3px'}}>Customers' Profile</p>
                                </div>}
            </div>
            <div  style={{position:'relative',display:"flex",backgroundColor:'white',width:'250px',letterSpacing:"1.5px",height:'50px',border: '0.5px solid blue'}}>
                <div onClick={()=>setCalendarShow(!calendarShow)} style={{width:'100%',height:'100%',display:"flex",justifyContent:"space-around",alignItems:"center",}}>
                    <p style={{fontFamily:"Manrope"}}>Loan Data Period</p>
                    <img style={{cursor:'pointer'}} src={calendarIcon}/>
                </div>

                {calendarShow && <div style={{position:'absolute',display:"flex",paddingTop:'20px',boxShadow:'1px 0px 15px rgb(216, 214, 214)',flexDirection:"column",backgroundColor:'white',paddingLeft:'5px',justifyContent:"space-around",alignItems:"left",top:'70px',zIndex:"40",borderRadius:"10px",width:"250px",height:"300px"}}>
                                    <p style={{fontWeight:"700",margin:"0px auto",marginBottom:'25px',fontFamily:"Manrope",fontSize:"15px",width:"80%",letterSpacing:'1.3px',textAlign:'left'}}>Insert date range</p>
                                    <div style={{height:"45px",width:"80%",margin:'25px auto',position:"relative"}}>
                                      <p style={{fontFamily:'Manrope',position:'absolute',top:'-40px',fontSize:'12px',fontWeight:"700",height:"20px"}}>Start date</p>
                                      <input onClick={()=>{setEndDate('May-2022');setStartDate('Nov-2021')}} value={startDate} placeholder='Input date' style={{ height:'100%',paddingLeft:'20px',fontFamily:'Manrope',boxSizing:'border-box',borderRadius:'5px',width:'100%',fontSize:'15px',color: 'black',outline:'none',borderWidth:'1px',border:'1px solid lightblue',textAlign:'left',backgroundColor:"rgb(222, 235, 239)"}}/>
                                    </div>
                                    <div style={{height:"45px",width:"80%",position:"relative",margin:"25px auto"}}>
                                      <p style={{fontFamily:'Manrope',position:'absolute',top:'-40px',fontSize:'12px',fontWeight:"700",height:"20px"}}>End date</p>
                                      <input onClick={()=> {setEndDate('May-2022');setStartDate('Nov-2021')}} value={endDate} placeholder='Input date' style={{ height:'45px',paddingLeft:'20px',fontFamily:'Manrope',boxSizing:'border-box',borderRadius:'5px',width:'100%',outline:"none",fontSize:'15px',color: 'black',borderWidth:'1px',border:'1px solid lightblue',textAlign:'left',backgroundColor:"rgb(222, 235, 239)"}}/>
                                    </div>
                                    <span onClick={()=>navigate('/customers')} style={{marginTop:'5px',cursor:'pointer',marginLeft:'10%',color:endDate===""?"lightblue":'white',backgroundColor: endDate===""? "rgb(222, 235, 239)":'#2F74DD',fontFamily:"Manrope",width:"70px",fontWeight:"700",display:"flex",border:'1px solid lightblue',alignItems:"center",justifyContent:"center",padding:'3px 7px',borderRadius:'7px'}}>Done</span>
                            
                                </div>}
            </div>
          </div>

          { customerProfile? <CustomerProfile />: <><div style={{width:'90%',margin:"10px auto",display:"flex",flexDirection:width<1000?"column":"row",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{width:width<1300?"90%":"45%",backgroundColor:"white",padding:'15px',boxShadow:'1px 0px 15px rgb(216, 214, 214)',borderRadius:"10px",height:width<1000?"350px":'300px'}}>
                    <p style={{fontFamily:'Manrope',fontWeight:"700",fontSize:'20px'}}>Total Population</p>
                    <div style={{height:'70%',width:"90%",margin:'10px auto',display:"flex",flexDirection:width<900?"column":"row",justifyContent:'space-around',alignItems:"center"}}>
                        <div style={{width:'50%',height:"100%"}}><PieChart chartData={pieData}/></div>
                        <div style={{width:'40%',height:"80%"}}>
                            {DashboardData.data_entries.map(datas=> <div style={{display:"flex",justifyContent:"left",height:"20%",alignItems:"center"}}>
                                <p style={{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:backgrounds[DashboardData.data_entries.indexOf(datas)]}}></p>
                                <p style={{paddingLeft:'10px',fontFamily:'Manrope',color:'grey'}}>{datas}</p>
                                <p style={{paddingLeft:'10px',fontFamily:'Manrope',color:'black'}}>{DashboardData[datas]["Total Population"]}</p></div>)
                           }
                        </div>
                    </div>
                </div>
                <div style={{width:width<1300?"90%":"45%",marginTop:width<1300?"40px":'',backgroundColor:"white",padding:'15px',boxShadow:'1px 0px 15px rgb(216, 214, 214)',borderRadius:"10px",height:width<1300?"350px":'300px'}}>
                    <p style={{fontFamily:'Manrope',fontWeight:"700",fontSize:'20px'}}>Active Clients &nbsp;&nbsp; <span style={{fontSize:"12px",fontWeight:'300'}}>{'(percentage)'}</span></p>
                    <div style={{height:'70%',width:"90%",margin:'10px auto',display:"flex",justifyContent:'space-around',alignItems:"center"}}> 
                            <div style={{width:'50%',height:"100%",display:"flex",justifyContent:"center",position:"relative",alignItems:"center"}}>
                                <div style={{width:"100%",height:"100%",position:"absolute",top:"0px", left:"0px"}}>
                                <div style={{position:'absolute',display:"flex",alignItems:"center",justifyContent:"center",width:'100%',height:'100%'}}>
                                    <ConcentricCircles circleWidth='300' backColorClass={'TheMicroTechs'} percentage={DashboardData["The Micro Techs"]["Active Clients"]} radius= {100}/>
                                </div>
                                <div style={{position:'absolute',display:"flex",alignItems:"center",justifyContent:"center",width:'100%',height:'100%'}}>
                                    <ConcentricCircles circleWidth='300' backColorClass={'TheLoyalists'} percentage={DashboardData["The Loyalists"]["Active Clients"]} radius= {80}/>
                                </div>
                                <div style={{position:'absolute',display:"flex",alignItems:"center",justifyContent:"center",width:'100%',height:'100%'}}>
                                    <ConcentricCircles circleWidth='300' backColorClass={'AgricClients'} percentage={DashboardData["Agric Clients"]["Active Clients"]} radius= {60}/>
                                </div>
                                <div style={{position:'absolute',display:"flex",alignItems:"center",justifyContent:"center",width:'100%',height:'100%'}}>
                                    <ConcentricCircles circleWidth='300' backColorClass={'TheRetailTechs'} percentage={DashboardData["The Retail Techs"]["Active Clients"]} radius= {40}/>
                                </div>
                                <div style={{position:'absolute',display:"flex",alignItems:"center",justifyContent:"center",width:'100%',height:'100%'}}>
                                    <ConcentricCircles circleWidth='300' backColorClass={'TheCorporates'} percentage={DashboardData["The Corporates"]["Active Clients"]} radius= {20}/>
                                </div>
                                </div>
                                
                            </div>
                            <div style={{width:'40%',height:"80%"}}>
                            {DashboardData.data_entries.map(datas=> <div style={{display:"flex",justifyContent:"left",height:"20%",alignItems:"center"}}>
                                <p style={{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:backgrounds[DashboardData.data_entries.indexOf(datas)]}}></p>
                                <p style={{paddingLeft:'10px',fontFamily:'Manrope',color:'grey'}}>{datas}</p>
                                <p style={{paddingLeft:'10px',fontFamily:'Manrope',color:'black'}}>{`${DashboardData[datas]["Active Clients"]}%`}</p></div>)
                           }
                        </div>
                    </div>
                </div>
          </div>
          <div style={{width:"90%",display:'flex',margin:"30px auto",marginTop:'50px',justifyContent:'space-between',height:'auto',boxSizing:"border-box"}}>
                <div style={{width:'40%',height:"200px",backgroundColor:"#4C3EDB",padding:'15px'}}>
                    <div style={{height:'100px',boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <div style={{width:'100%',color:'white',textAlign:"left",fontFamily:"Manrope",fontSize:'20px',fontWeight:"650"}}>Average Age</div>
                        <div style={{width:"100%",color:'white',textAlign:"left",fontFamily:"Manrope",fontSize:'12px'}}>(in years)</div>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>{DashboardData.data_entries.map(datas=>
                        <div>
                            <section style={{fontFamily:'Manrope',fontSize:'12px',color:"white"}}>{datas}</section>
                            <section style={{fontFamily:'Manrope',marginTop:'12px',fontSize:'25px',color:"white"}}>{DashboardData[datas]['Average Age']}</section>
                        </div>)}</div>
                </div>
                <div style={{width:'50%',height:"200px",backgroundColor:"#407BFF",padding:'15px'}}>
                    <div style={{height:'100px',boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <div style={{width:'100%',color:'white',textAlign:"left",fontFamily:"Manrope",fontSize:'20px',fontWeight:"650"}}>Average Transactional Value</div>
                        <div style={{width:"100%",marginTop:'5px',color:'white',textAlign:"left",fontFamily:"Manrope",fontSize:'12px'}}>(Credit)</div>
                    </div>

                    <div style={{display:"flex",height:'50%',justifyContent:"space-between",alignItems:"center"}}>{DashboardData.data_entries.map(datas=>
                        <div style={{height:"100%"}}>
                            <section style={{fontFamily:'Manrope',fontSize:'17px',color:"white"}}>{datas}</section>
                            <section style={{fontFamily:'Manrope',marginTop:"12px",fontSize:'25px',color:"white"}}>{`$ ${DashboardData[datas]['Average Transactional Value']}`}</section>
                        </div>)}
                    </div>
                </div>
          </div>

          <div style={{width:'90%',margin:"50px auto",height:'auto',marginBottom:"15px"}}>
             <span style={{fontFamily:"Manrope",fontSize:"25px",fontWeight:"650",marginBottom:"25px"}}>AVERAGE MONTHLY BALANCE</span>
             <div style={{backgroundColor:"white",boxShadow:'1px 0px 15px rgb(216, 214, 214)',marginTop:'20px',display:"flex",justifyContent:"space-evenly",width:"100%",height:"150px"}}>{DashboardData.data_entries.map(datas=>
                    <div style={{display:"flex",border:DashboardData.data_entries.indexOf(datas)===0?"0px":DashboardData.data_entries.indexOf(datas)===4?"0px":'0.1px solid blue',borderWidth:DashboardData.data_entries.indexOf(datas)===0?"0px":DashboardData.data_entries.indexOf(datas)===4?"0px":'0px 0.1px 0px 0.1px',alignItems:"center",justifyContent:"center",width:"20%",flexDirection:"column"}}>
                        <div style={{fontFamily:'Manrope',color:"black",fontSize:'17px'}}>{datas}</div>
                        <div style={{fontFamily:'Manrope',color:"black",marginTop:"12px",fontSize:'25px'}}>{`$ ${DashboardData[datas]['Average Monthly Balance']}`}</div>
                    </div>)}</div>
          </div>

          <div style={{width:'90%',letterSpacing:'1.5px',margin:'30px auto',height:'auto'}}>
                <span style={{fontFamily:"Manrope",fontSize:"25px",fontWeight:"650",marginBottom:"25px"}}>PILLAR DISTRIBUTION</span>
                <div style={{width:'auto',height:'auto',display:"flex",marginTop:'30px',justifyContent:'space-around',alignItems:"center",flexWrap:'wrap'}}>
                    {DashboardData.data_entries.map(datas=>
                    <div style={{width:'500px',padding:'10px',boxShadow:'1px 0px 15px rgb(216, 214, 214)',backgroundColor:'white',margin:'15px',height:'300px'}}>
                        <span style={{width:'480px',margin:"0px auto",marginBottom:'25px',display:'flex',justifyContent:'center',backgroundColor:"#2A38A4",alignItems:"center",color:"white",fontFamily:'Manrope',fontSize:'25px'}}>{datas}</span>
                        <BarChart mainData={DashboardData[datas]["Pillar"]}/>
                    </div>)}
                </div>
          </div></>}
    </div>
  )
}

export default Segmentation