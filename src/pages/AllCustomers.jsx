import React,{useState} from 'react'
import { CustomerData } from '../Store/CustomerData'
import useWindowResize from '../hook/UseWindowResize';
import customerIcon from '../iconHolder/Profile.png'
import sortIcon from '../iconHolder/Filter.png'
import activeIcon from '../iconHolder/active.png'
import dormantIcon from '../iconHolder/dormant.png'


function AllCustomers() {
    const {width,height} = useWindowResize()
    const [segmentState,setSegmentState] = useState(false)
    const [sortState, setSortState] = useState(false)
    
    const backgrounds = {"RETAIL TECHS":{colo:"#2D0076",background:"#C4A2FC"},
                        "AGRIC CLIENT":{colo:"#15CC93",background:"#C9ECE2"},
                        "MICRO TECHS":{colo:"#4C3EDB",background:"#D4D9FF"},
                        "LOYALISTS":{colo:"#FFBC73",background:"#FFE1C0"},
                        "CORPORATES":{colo:"#407BFF",background:"#9BBAFF"}}
                    

  return (
    <>
    { sortState?<>
    <div onClick={()=>setSortState(false)} style={{position:"fixed",backgroundColor:"transparent",top:'0px',left:"0px",height:"100vh",width:"100vw",WebkitBackdropFilter:'blur(4px)',backdropFilter:'blur(4px)',zIndex:"30000000000"}}>

    </div>
    <div style={{position:"fixed",width:'75%',padding:'20px 30px',height:"400px",boxShadow:'1px 0px 15px rgb(216, 214, 214)',transform:"translate(-50%,-50%)",top:"50%",left:"50%",backgroundColor:'white',zIndex:"30000000001"}}>
      <span style={{fontFamily:"Manrope",fontWeight:"600",fontSize:"17px"}}>Select Category</span>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"25px",marginBottom:'70px'}}>
          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{width:"15px",height:'15px',border:'1px solid lightblue'}}></span>
            <span style={{fontFamily:"Manrope",fontSize:"17px",marginLeft:'10px'}}>The Agric Clients</span>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{width:"15px",height:'15px',border:'1px solid lightblue'}}></span>
            <span style={{fontFamily:"Manrope",fontSize:"17px",marginLeft:'10px'}}>The Micro Techs</span>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{width:"15px",height:'15px',border:'1px solid lightblue'}}></span>
            <span style={{fontFamily:"Manrope",fontSize:"17px",marginLeft:'10px'}}>The Retail Techs</span>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{width:"15px",height:'15px',border:'1px solid lightblue'}}></span>
            <span style={{fontFamily:"Manrope",fontSize:"17px",marginLeft:'10px'}}>The Loyalists</span>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{width:"15px",height:'15px',border:'1px solid lightblue'}}></span>
            <span style={{fontFamily:"Manrope",fontSize:"17px",marginLeft:'10px'}}>The Corporates</span>
          </div>
      </div>

      <span style={{fontFamily:"Manrope",fontWeight:"600",fontSize:"17px",marginTop:'50px'}}>Select Loan Period</span>
      <div style={{display:"flex",width:"60%",justifyContent:"space-between",marginTop:"20px"}}>
        <div style={{}}>
          <span style={{fontFamily:'Manrope'}}>Start Date</span>
          <div style={{width:"250px",marginTop:'10px',height:"60px",border:"1px solid lightblue",fontFamily:"Manrope",fontSize:"20px",color:"grey",display:'flex',alignItems:"center",justifyContent:"left",paddingLeft:"15px"}}>mm-yyyy</div>
        </div>
        <div>
          <span style={{fontFamily:'Manrope'}}>End Date</span>
          <div style={{width:"250px",marginTop:'10px',height:"60px",border:"1px solid lightblue",fontFamily:"Manrope",fontSize:"20px",color:"grey",display:'flex',alignItems:"center",justifyContent:"left",paddingLeft:"15px"}}>mm-yyyy</div>
        </div>
      </div>

      <div onClick={()=>setSortState(false)} style={{fontFamily:"Manrope",cursor:'pointer',fontSize:"15px",width:'fit-content',marginTop:'25px',padding:'5px 14px',letterSpacing:"1.5px",backgroundColor:"#2F74DD",color:'white'}}>Apply filter</div>
    </div>
    </>:
    <div style={{width:"100%",height:"100%"}}>
        <p style={{fontFamily:"Manrope",fontSize:"25px",fontWeight:'700',color:'black',width:"90%",margin:"15px auto",marginTop:'15px'}}>All Customers</p> 
        <div style={{width:'90%',margin:"30px auto",display:"flex",flexDirection:width<1000?'column':'row',justifyContent:'space-between',alignItems:"center",height:width<1000?"150px":""}}>
            <div style={{position:'relative',width:'auto',letterSpacing:"1.5px",height:'40px',borderRadius:"10px",display:'flex',justifyContent:"space-between",alignItems:'center'}}>
               <div onClick={()=>setSegmentState(!segmentState)} style={{backgroundColor:"white",cursor:'pointer',display:"flex",justifyContent:"left",paddingLeft:"10px",alignItems:"center",height:'100%',width:"300px",margin:"0px auto"}}>
                  <img src={customerIcon}/>
                  <span style={{fontFamily:"Manrope",color:"grey"}}>Segment Customer</span>
               </div>
               <div style={{fontFamily:"Manrope",height:"40px",display:'flex',alignItems:"center",justifyContent:'center',marginLeft:"15px",padding:"5px 10px",fontSize:'12px',boxSizing:"border-box",color:'#407BFF',backgroundColor:"#DCE5FF"}}>
                Clear
               </div>
                {segmentState && <section style={{position:'absolute',padding:'15px 5px',display:"flex",boxShadow:'1px 0px 15px rgb(216, 214, 214)',flexDirection:"column",backgroundColor:'white',paddingLeft:'30px',justifyContent:"space-around",top:'70px',zIndex:"40",borderRadius:"10px",width:"300px",height:"auto"}}>
                                    <div style={{width:"90%",margin:"15px auto",height:'auto'}}>
                                        <span style={{color:'black',fontFamily:'Manrope',fontSize:'15px',fontWeight:'600'}} >Customer ID</span>
                                        <div style={{width:"50%",display:"flex",alignItems:"center",paddingLeft:"15px",fontFamily:'Manrope',justifyContent:"left",border:"0.3px solid lightblue",height:'45px'}}>1DN5FJS</div>
                                    </div>
                                    <div style={{width:"90%",margin:"15px auto"}}>
                                        <span style={{color:'black',fontFamily:'Manrope',fontSize:'15px',fontWeight:'600'}} >Select</span>
                                        <div style={{width:'80%',display:"flex"}}>
                                            <span style={{fontFamily:"Manrope"}}>Existing</span>
                                            <span style={{fontFamily:"Manrope",marginLeft:'20px'}}>New</span>
                                        </div>
                                    </div>
                                    <div style={{width:"85%",backgroundColor:"lightblue",fontFamily:"Manrope",display:"flex",padding:'15px 0px',color:"white",alignItems:"center",justifyContent:'center',margin:"15px auto"}}>
                                        Search
                                    </div>
                                </section>}
            </div>
            <div  style={{position:'relative',display:"flex",backgroundColor:'white',width:'100px',letterSpacing:"1.5px",height:'40px'}}>
                <div onClick={()=>setSortState(true)} style={{width:'100%',cursor:'pointer',backgroundColor:"#407BFF",height:'100%',display:"flex",justifyContent:"space-around",alignItems:"center",}}>
                    <img style={{cursor:'pointer'}} src={sortIcon}/>
                    <span style={{fontFamily:"Manrope",color:'white'}}>Sort</span>
                </div>

           
            </div>
          </div>

          <div style={{width:"90%",margin:"30px auto",marginTop:'50px',height:'auto',boxSizing:"border-box"}}>
            <section style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                <span style={{width:"20%",textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"20px",color:'black',letterSpacing:"1.5px",fontWeight:"650"}}>CUSTOMER NAME</span>
                <span style={{width:"20%",textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"20px",color:'black',letterSpacing:"1.5px",fontWeight:"650"}}>CUSTOMER ID</span>
                <span style={{width:"20%",textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"20px",color:'black',letterSpacing:"1.5px",fontWeight:"650"}}>CATEGORY</span>
                <span style={{width:"20%",textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"20px",color:'black',letterSpacing:"1.5px",fontWeight:"650"}}>LOAN PERIOD</span>
                <span style={{width:"20%",textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"20px",color:'black',letterSpacing:"1.5px",fontWeight:"650"}}>STATUS</span>
            </section>

            {CustomerData.map(datas=>
            <div style={{display:'flex',backgroundColor:"white",margin:"15px auto",padding:'15px 0px',width:'100%',boxShadow:'1px 0px 15px rgb(216, 214, 214)'}}>
                <span style={{width:"20%",display:"flex",alignItems:'center',justifyContent:'left',textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"15px",fontWeight:"500",color:'black'}}>{datas["CUSTOMER NAME"]}</span>
                <span style={{width:"20%",display:"flex",alignItems:'center',justifyContent:'left',textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"15px",fontWeight:"500",color:'black'}}>{datas["CUSTOMER ID"]}</span>
                <section style={{width:"20%",textAlign:"left",fontFamily:'Manrope',fontSize:"15px",fontWeight:"500",display:'flex',alignItems:'center',justifyContent:"left"}}><span style={{width:'50%',paddingLeft:"10px",padding:"10px",color:backgrounds[datas[ "CATEGORY"]].colo,backgroundColor:backgrounds[datas[ "CATEGORY"]].background,display:'flex',alignItems:'center',justifyContent:"center"}}>{datas["CATEGORY"]}</span></section>
                <span style={{width:"20%",display:"flex",alignItems:'center',justifyContent:'left',textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"15px",fontWeight:"500",color:'black'}}>{datas["LOAN PERIOD"]}</span>
                <section style={{width:"20%",display:"flex",alignItems:'center',justifyContent:'left',textAlign:"left",paddingLeft:"10px",fontFamily:'Manrope',fontSize:"15px",fontWeight:"500",color:'black'}}><img src={datas["STATUS"]==='DORMANT'?dormantIcon:activeIcon}/><span style={{marginLeft:'10px',color:datas["STATUS"]==='DORMANT'?"#FF5037":"#15CC93"}}>{datas["STATUS"]}</span></section>
            </div>)}
          </div>
    </div>
    }
    </>
  )
}

export default AllCustomers