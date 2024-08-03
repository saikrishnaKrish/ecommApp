import React, { useState } from 'react'

const LoginForm = () => {
 const [uname, setUname] = useState("");
 const [contactNum,setContactNum] = useState("");

 const [errors, setErrors] = useState({ uname: '', contactNum: '' });

const [uDetails,setUDetails] =useState([])
  const handleSubmitFrom=(e)=>{
      e.preventDefault();
      setErrors({ uname: '', contactNum: '' });

    
      // Validation checks
    let valid = true;
    if (uname.trim() === '') {
      setErrors((prev) => ({ ...prev, uname: 'Username is required.' }));
      valid = false;
    }

    if (contactNum.trim() === '' ) {
      setErrors((prev) => ({ ...prev, contactNum: 'Contact number is required.' }));
      valid = false;
    }
    console.log("form Submitted");
    if (valid) {
      console.log('Form Submitted');
        let userDetails = []
        userDetails.push(uname,contactNum)
        setUDetails(userDetails)
         console.log(userDetails)
        // make an api call to send the data...
    }

  }

  return (
    <div>
      
      <fieldset>
        <legend>LoginForm</legend>
          <label>Enter user name</label>
          <input type='text'  onChange={(e)=>setUname(e.target.value)}/>
          {errors.uname!=="" && <p id='fNameError'>User name is required</p>}
          <br/>
          <label>Enter number</label>
          <input type='number' onChange={(e)=>setContactNum(e.target.value)} />
          {errors.contactNum!=="" && <p id='cNameError'>Contact number is required</p>}
          <br/>
          <button onClick={handleSubmitFrom}>
            Submit
          </button>
      {/* {JSON.stringify(uDetails)} */}
          {/* {obj && "form submitted"} */}

          {uDetails.length > 0 && <>
                <p>User Details</p>
                <p>Username : {uDetails[0]}</p>
                <p>ContactNumber : {uDetails[1]}</p>
          </>}
      </fieldset>


    </div>
  )
}

export default LoginForm