import React from 'react';

import "./Pricing.css"
import Nav from './Nav'; // Importing Nav
import Footer from './Footer'; // Importing Footer
import dido from "./checkmark.png"


const pricingData = {
 
  "10": { monthly: "15,99", totalMonthly: "159", monthlyDiscount: "13,5", yearlyDiscount: "1620" },
  "30": { monthly: "14,99", totalMonthly: "449", monthlyDiscount: "12,7", yearlyDiscount: "4572" },
  "50": { monthly: "13,99", totalMonthly: "699", monthlyDiscount: "11,8", yearlyDiscount: "7080" },
  "70": { monthly: "12,99", totalMonthly: "909", monthlyDiscount: "11", yearlyDiscount: "9240" },
  "100": { monthly: "11,99", totalMonthly: "1199", monthlyDiscount: "10,1", yearlyDiscount: "12120" },
  "150": { monthly: "10,99", totalMonthly: "1648", monthlyDiscount: "9,3", yearlyDiscount: "16740" },
  "200": { monthly: "9,99", totalMonthly: "1998", monthlyDiscount: "8,4", yearlyDiscount: "20160" },
  "250": { monthly: "8,99", totalMonthly: "2247", monthlyDiscount: "7,6", yearlyDiscount: "22800" },
  "300": { monthly: "7,99", totalMonthly: "2397", monthlyDiscount: "6,7", yearlyDiscount: "24120" },
  "400": { monthly: "6,99", totalMonthly: "2796", monthlyDiscount: "5,9", yearlyDiscount: "28320" },
  "500": { monthly: "5,99", totalMonthly: "2995", monthlyDiscount: "5", yearlyDiscount: "30000" },
  "More than 500": { monthly: "Contact Us", totalMonthly: "Contact Us", monthlyDiscount: "Contact Us", yearlyDiscount: "Contact Us" }
};
const findPricingBracket = (capacity) => {
  if (capacity > 500) {
    return "More than 500";
  }
  const brackets = [10, 30, 50, 70, 100, 150, 200, 250, 300, 400, 500];
  const foundBracket = brackets.find(bracket => capacity <= bracket);
  return foundBracket.toString();
};

const Pricing = () => {

  
  const capacity = 30
 

  const bracketKey = findPricingBracket(capacity); 
  const selectedPricing = pricingData[bracketKey];
  const token = localStorage.getItem('userToken');

  const priod="none"  //monthly,yearly,none

  const handleSubscribeClick = () => {
    // Assuming 'userInfo' contains 'token' and 'userId'
   
  
    if (!token ) {
      console.error("User token or ID is missing!");
      return; // Exit if no token or userId is available
    }
  
    // Construct the URL with query parameters
    const billingUrl = new URL('https://billing.dynamofleet.com');
    billingUrl.searchParams.append('token', token);
   
    // Navigate to the billing page in the same tab with parameters
    window.location.href = billingUrl.href;

  };

  return (
   <div>
    <Nav/>
    <div className='pmain'>
      <div className='pmain2'>
        <div>
        <div className='disprichishode'>All of our plans include complete access to our platform. The only difference in pricing depends on how many vehicles you would like to manage using our platform.</div>
        <div className='rangvp'>How many vehicles would you like to manage?</div>
        <div className='planicuroft'>
        Your plan will be:
        </div>
        
        <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            fontSize:"13px"
          }}>
          <thead>
            <tr>
              <th style={{  padding: '8px', background: '#0A0A8C',color:"white", height: '20px',border: "1px solid white" }}>Plan</th>
              <th style={{  padding: '8px', background: '#0A0A8C',color:"white", height: '20px',border: "1px solid white" }}>Cost Per vehicle if you pay monthly</th>
             
              <th style={{ padding: '8px', background: '#0A0A8C',color:"white", height: '20px' ,border: "1px solid white"}}>Cost Per vehicle if you pay yearly</th>
            
            </tr>
          </thead>
          <tbody>
            {Object.entries(pricingData).map(([amount, details]) => (
              <tr key={amount} style={{ backgroundColor: amount === bracketKey ? 'rgb(183, 229, 188)' : 'transparent',color: amount === bracketKey ? 'black' : 'white', height: '20px' }}>
                <td style={{ padding: '8px', textAlign: 'start', height: '20px',width:"190px" ,border: "1px solid rgb(206, 206, 206)" }}>Up to {amount} Vehicles</td>
                <td style={{ padding: '8px', textAlign: 'center', height: '20px',border: "1px solid rgb(206, 206, 206)" }}>{details.monthly}</td>
             
                <td style={{  padding: '8px', textAlign: 'center', height: '20px',border: "1px solid rgb(206, 206, 206)"}}>{details.monthlyDiscount}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
    </div>
     <div className='cards'>
       <div className='card1'>
          <div className='topnote'>
          <h1 id='justhdes1'>Free</h1>
            <h1><span>No Billing</span></h1>
         
            </div>
            <div className='topnoteop'></div>
          <div className='actpri'>
          Full Access (14-day free trial)
          </div>
          <div className='undercard'>
          <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <span className='checkm'>Comprehensive Dashboard.</span>
            </div>
            <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <span className='checkm'>Active Vehicle and Driver Monitoring.</span>
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Comprehensive Expense Tracking.</span>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Team Communication and Notes.</span>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Task Management and Responsibilities.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Equipment Management and Allocation.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Geographic Zoning.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Fine Management.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Comprehensive Reports.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Driver License Management.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Vehicle Inspection Management.</span>
     
            </div>
          </div>
          <div className='forfree1'>
         
  <button className='linkmainsdrr' onClick={handleSubscribeClick}>Upgrade Your Plan</button>


</div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
       <div className='card1'>
         
          <div className='topnote'>
         
            <h1 id='justhdes'>Monthly</h1>
            <div className='prititin'>
              <div className='prititin1'> <h1><span>{selectedPricing.monthly !== "N/A" ? "\u0024" : ""}  {selectedPricing.monthly !== "N/A" ? selectedPricing.monthly : "Select the range"}</span></h1><p>{selectedPricing.monthly !== "N/A" ? " Per vehicle /per month" : ""}</p></div>
              
               <div className='prititin2'><h1><span> {selectedPricing.totalMonthly !== "N/A" ? "\u0024" : ""}  {capacity* parseInt((selectedPricing.monthly !== "N/A" ? selectedPricing.monthly : "Select the range"))}</span></h1><p> {selectedPricing.totalMonthly !== "N/A" ? "Total Monthly" : ""} </p></div>
              
               </div>
          
            
            </div>
           
          <div className='actpri'>
          <p>Full Access </p>
          </div>

       
          <div className='undercard'>
          <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <span className='checkm'>Comprehensive Dashboard.</span>
            </div>
            <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <span className='checkm'>Active Vehicle and Driver Monitoring.</span>
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Comprehensive Expense Tracking.</span>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Team Communication and Notes.</span>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Task Management and Responsibilities.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Equipment Management and Allocation.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Geographic Zoning.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Fine Management.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Comprehensive Reports.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Driver License Management.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Vehicle Inspection Management.</span>
     
            </div>
          </div>
          <div className='forfree'>
          <button className='linkmainsdrr' onClick={handleSubscribeClick}>Upgrade Your Plan</button>
           
          </div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card1'>
        <div className='topnote'>
         
        <h1 id='justhdes'>Annually</h1>
         <div className='prititin'>
           <div className='prititin1'> <h1><span>{selectedPricing.monthlyDiscount !== "N/A" ? "\u0024" : ""} {selectedPricing.monthlyDiscount !== "N/A" ? selectedPricing.monthlyDiscount : "Select the range"} </span></h1><p> {selectedPricing.monthlyDiscount !== "N/A" ? " Per vehicle /per month" : ""}</p></div>
           
            <div className='prititin2'><h1><span>{selectedPricing.yearlyDiscount !== "N/A" ? "\u0024" : ""} {(capacity* parseInt(selectedPricing.monthlyDiscount !== "N/A" ? selectedPricing.monthlyDiscount : "Select the range"))*12}</span></h1><p>{selectedPricing.totalMonthly !== "N/A" ? "Total Annually" : ""}</p></div>
        
            </div>
       
         
         </div>
        
          <div className='actpri1'>
          <p>Full Access </p>
          </div>
       
          <div className='undercard'>
          <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <span className='checkm'>Comprehensive Dashboard.</span>
            </div>
            <div className='checkandtext'>
              <img className='iconprice' src={dido} alt="Checkmark Icon" /> <span className='checkm'>Active Vehicle and Driver Monitoring.</span>
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Comprehensive Expense Tracking.</span>

            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Team Communication and Notes.</span>
           
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Task Management and Responsibilities.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Equipment Management and Allocation.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Geographic Zoning.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Fine Management.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Comprehensive Reports.</span>
     
            </div>
          
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Driver License Management.</span>
     
            </div>
            <div className='checkandtext'>
            <img className='iconprice' src={dido} alt="Checkmark Icon"/> <span className='checkm'>Vehicle Inspection Management.</span>
     
            </div>
            
          
          </div>
          <div className='forfree'>
          <button className='linkmainsdrr' onClick={handleSubscribeClick}>Upgrade Your Plan</button>
           
          </div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
      </div>
     
      </div>
    </div>
    <Footer/>
    </div>
  );
};


export default Pricing;