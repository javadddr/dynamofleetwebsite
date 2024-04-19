import React from 'react';
import Nav from './Nav'; // Importing Nav component
import Footer from './Footer'; // Importing Footer component
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./Pricing.css"

import dido from "./checkmark.png"

const options = ["Select Range","Up to 10", "Up to 30", "Up to 50", "Up to 70", "Up to 100", "Up to 150", "Up to 200", "Up to 250", "Up to 300", "Up to 400", "Up to 500", "More than 500"];
const pricingData = {
  "Select Range": { monthly: "N/A", totalMonthly: "N/A", monthlyDiscount: "N/A", yearlyDiscount: "N/A" },
  "Up to 10": { monthly: "15,99", totalMonthly: "159", monthlyDiscount: "13,5", yearlyDiscount: "1620" },
  "Up to 30": { monthly: "14,99", totalMonthly: "449", monthlyDiscount: "12,7", yearlyDiscount: "4572" },
  "Up to 50": { monthly: "13,99", totalMonthly: "699", monthlyDiscount: "11,8", yearlyDiscount: "7080" },
  "Up to 70": { monthly: "12,99", totalMonthly: "909", monthlyDiscount: "11", yearlyDiscount: "9240" },
  "Up to 100": { monthly: "11,99", totalMonthly: "1199", monthlyDiscount: "10,1", yearlyDiscount: "12120" },
  "Up to 150": { monthly: "10,99", totalMonthly: "1648", monthlyDiscount: "9,3", yearlyDiscount: "16740" },
  "Up to 200": { monthly: "9,99", totalMonthly: "1998", monthlyDiscount: "8,4", yearlyDiscount: "20160" },
  "Up to 250": { monthly: "8,99", totalMonthly: "2247", monthlyDiscount: "7,6", yearlyDiscount: "22800" },
  "Up to 300": { monthly: "7,99", totalMonthly: "2397", monthlyDiscount: "6,7", yearlyDiscount: "24120" },
  "Up to 400": { monthly: "6,99", totalMonthly: "2796", monthlyDiscount: "5,9", yearlyDiscount: "28320" },
  "Up to 500": { monthly: "5,99", totalMonthly: "2995", monthlyDiscount: "5", yearlyDiscount: "30000" },
  "More than 500": { monthly: "Contact Us", totalMonthly: "Contact Us", monthlyDiscount: "Contact Us", yearlyDiscount: "Contact Us" }
};

const Pricing = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
 
  const selectedPricing = pricingData[value] || pricingData["Select Range"];

  return (
    <div>
      <Nav/>
    <div className='pmain'>
      <div className='pmain2'>
      <div className='choosedfg'>
        <div className='rangvp'>How many vehicles would you like to manage?</div>

      <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              sx={{
                width: 300,
                "& .MuiInputBase-root": {
                  backgroundColor: 'white', // Set the background color of the input field
                  borderRadius: '4px', // Optional: adds rounded corners
                  color: 'black' // Optional: ensures the text color is black
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <div className='disprichishode'>All of our plans include complete access to our platform. The only difference in pricing depends on how many vehicles you would like to manage using our platform.</div>
          </div>
     <div className='cards'>
        <div className='card1'>
          <div className='topnote'>
            <h1>Free</h1>
            <h1><span>No Billing</span></h1>
         
            </div>
          <div className='topnote2'>
           
           
          </div>
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
          <a href="http://app.dynamofleet.com/register">
  <button className='linkmainsdrr'>Get Started</button>
</a>

</div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card1'>
         
          <div className='topnote'>
         
            <h1>Monthly</h1>
            <div className='prititin'>
              <div className='prititin1'> <h1><span>{selectedPricing.monthly !== "N/A" ? "\u0024" : ""}  {selectedPricing.monthly !== "N/A" ? selectedPricing.monthly : "Select the range"}</span></h1><p>{selectedPricing.monthly !== "N/A" ? " Per vehicle /per month" : ""}</p></div>
              
               <div className='prititin2'><h1><span> {selectedPricing.totalMonthly !== "N/A" ? "\u0024" : ""}  {selectedPricing.totalMonthly !== "N/A" ? selectedPricing.totalMonthly : ""}</span></h1><p> {selectedPricing.totalMonthly !== "N/A" ? "Total Monthly" : ""} </p></div>
              
               </div>
          
            
            </div>
            <div className='topnote2'>
            <p>Full Access </p>
          
          </div>
          <div className='actpri'>
           
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
          <a href="http://app.dynamofleet.com/login">
            <button className='linkmainsdrr'>Go to our app and subscribe there</button>
          </a>
           
          </div>
          <div className="greenSquare"></div>
          <div className="greenSquare2"></div>
        </div>
        <div className='card1'>
        <div className='topnote'>
         
         <h1>Annually</h1>
         <div className='prititin'>
           <div className='prititin1'> <h1><span>{selectedPricing.monthlyDiscount !== "N/A" ? "\u0024" : ""} {selectedPricing.monthlyDiscount !== "N/A" ? selectedPricing.monthlyDiscount : "Select the range"} </span></h1><p> {selectedPricing.monthlyDiscount !== "N/A" ? " Per vehicle /per month" : ""}</p></div>
           
            <div className='prititin2'><h1><span>{selectedPricing.yearlyDiscount !== "N/A" ? "\u0024" : ""} {selectedPricing.yearlyDiscount !== "N/A" ? selectedPricing.yearlyDiscount : ""}</span></h1><p>{selectedPricing.totalMonthly !== "N/A" ? "Total Annually" : ""}</p></div>
        
            </div>
       
         
         </div>
            <div className='topnote21'>
            <p>Full Access </p>

          </div>
          <div className='actpri1'>
          
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
          <a href="http://app.dynamofleet.com/login">
            <button className='linkmainsdrr'>Go to our app and subscribe there</button>
          </a>
           
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