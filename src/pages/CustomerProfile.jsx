import React from 'react'
import customerIcon from '../iconHolder/Profile.png'
import totalIcon from '../iconHolder/totalTransaction.svg'
import walletIcon from '../iconHolder/Wallet.svg'

function CustomerProfile() {
  return (
    <div style={{width:'90%', margin:'15px auto'}}>
        <span style={{width:"100%",textAlign:"left",fontFamily:"Manrope",fontSize:"25px",fontWeight:"700",margin:'15px auto'}}>OVERVIEW</span>

        <section style={{width:"100%",backgroundColor:"white",boxShadow:'1px 0px 15px rgb(216, 214, 214)',margin:'30px auto',height:'auto',display:'flex'}}>
            <div style={{width:"33.3%",display:"flex",flexDirection:"column",alignItems:"left",justifyContent:'center',padding:'15px',height:"150px",border:'0.3px solid #407BFF',borderWidth:'0px 0.3px 0px 0px'}}>
                <img src={customerIcon} style={{width:'30px' ,height:"30px"}}/>
                <span style={{fontFamily:'Manrope',fontSize:"17px"}}>Total Customers</span>
                <span style={{fontFamily:'Manrope',fontSize:"25px",fontWeight:"700"}}>1.11 Million</span>
            </div>
            <div style={{width:"33.3%",display:"flex",flexDirection:"column",alignItems:"left",justifyContent:'center',padding:'15px',height:"150px",border:'0.3px solid #407BFF',borderWidth:'0px 0.3px 0px 0px'}}>
                <img src={totalIcon} style={{width:'30px' ,height:"30px"}}/>
                <span style={{fontFamily:'Manrope',fontSize:"17px"}}>Total Transactional Value</span>
                <span style={{fontFamily:'Manrope',fontSize:"25px",fontWeight:"700"}}>124 Billion</span>
            </div>
            <div style={{width:"33.3%",display:"flex",flexDirection:"column",alignItems:"left",justifyContent:'center',padding:'15px',height:"150px"}}>
                <img src={walletIcon} style={{width:'30px' ,height:"30px"}}/>
                <span style={{fontFamily:'Manrope',fontSize:"17px"}}>Average Monthly Balance</span>
                <span style={{fontFamily:'Manrope',fontSize:"25px",fontWeight:"700"}}>$ 34556</span>
            </div>
        </section>

        <section style={{width:'100%',margin:'40px auto',marginTop:"40px"}}>
                <span style={{width:"100%",textAlign:"left",fontFamily:"Manrope",fontSize:"25px",fontWeight:"700",margin:'15px auto'}}>PROFILE</span> 
                <section style={{width:'100%',heigh:'auto',marginTop:'20px'}}>
                    <div style={{width:"100%",height:'70px',border:'0.3px solid #407BFF',backgroundColor:"white",borderWidth:'0.3px 0.3px 0px 0.3px',display:'flex',alignItems:'center',fontFamily:"Manrope",fontSize:"17px",fontWeight:'600',justifyContent:"left",paddingLeft:'15px'}}>Status</div>
                    <div style={{width:"100%",height:'70px',border:'0.3px solid #407BFF',backgroundColor:"white",borderWidth:'0.3px 0.3px 0px 0.3px',display:'flex',alignItems:'center',fontFamily:"Manrope",fontSize:"17px",fontWeight:'600',justifyContent:"left",paddingLeft:'15px'}}>Gender</div>
                    <div style={{width:"100%",height:'70px',border:'0.3px solid #407BFF',backgroundColor:"white",borderWidth:'0.3px 0.3px 0px 0.3px',display:'flex',alignItems:'center',fontFamily:"Manrope",fontSize:"17px",fontWeight:'600',justifyContent:"left",paddingLeft:'15px'}}>Age</div>
                    <div style={{width:"100%",height:'70px',border:'0.3px solid #407BFF',backgroundColor:"white",borderWidth:'0.3px 0.3px 0px 0.3px',display:'flex',alignItems:'center',fontFamily:"Manrope",fontSize:"17px",fontWeight:'600',justifyContent:"left",paddingLeft:'15px'}}>Loan Uptake</div>
                    <div style={{width:"100%",height:'70px',border:'0.3px solid #407BFF',backgroundColor:"white",borderWidth:'0.3px 0.3px 0.3px 0.3px',display:'flex',alignItems:'center',fontFamily:"Manrope",fontSize:"17px",fontWeight:'600',justifyContent:"left",paddingLeft:'15px'}}>Tenure</div>
                </section>
        </section>
    </div>
  )
}

export default CustomerProfile