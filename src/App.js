import React from 'react'
import FeedbackForm from './FeedbackForm'
import Navbar from './Navbar'
import Newshoriz from './Newshoriz'
import Vertical from './Vertical'
import { Route,Routes} from  "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
<Routes>

     
      <Route exact path ="/horizontal" element={<Newshoriz/>}/> 
      <Route exact path ="/vertical" element={<Vertical/>}/> 
      <Route exact path ="/form" element={<FeedbackForm/>}/> 
     
    </Routes>
      
  
      

 


     
      
    </>
  )
}

export default App

