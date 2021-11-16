import React,{useState,useMemo} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'


const FeedbackForm = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = (value) => {
        setValue(value)
      }
    
     
    
  
  
    return (
        <>
        
        <div className="form-container">
        <center>
          
         
          <h2 className="feedback-heading">ThankYou So much for taking the time!</h2>
          <h5>Please Provide the below details!</h5>
          <form>
              <label className="label">First Name</label>
              <input className="input" type="text" placeholder="Enter your First Name" />
              <label className="label">Last Name</label>
              <input className="input" type="text" placeholder="Enter your Last Name" />
              <label className="label">Address</label>
              <input  className="inputadd" type="text" placeholder="Enter your Address" />
              <label className="label">Country</label>
              <Select  className ="country-select" options={options} value={value} onChange={changeHandler} />
            <label className="label">Email</label>
            <input className="input" type="email" placeholder="Enter your email address" />
            <label className="label">Phone number</label>
            <input className="country-code" type="tel"/>
              <input className="input" type="tel" placeholder="Enter your Phone Number" /><br />
              <button className="form-btn"> Submit Feedback</button>
          
          </form>
         
          </center>
          </div>
        </>
    )
}

export default FeedbackForm
