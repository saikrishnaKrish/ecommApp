import React, { useEffect, useRef, useState } from 'react'
import IuseStateHook from './hooks/IuseStateHook'
import IuseEffectHook from './hooks/IuseEffectHook'

import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from './components/Layout/Layout'
import MyComponent from './ClassComponentExample'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputComponent from './components/InputComponent'
import PrimaryButton from './components/Button/PrimaryButton'
import CounterProvider from './components/ContextExample/CounterProvider'

const App = () => {

    const titles = ["Accessibility",
      "UX",
      "CSS",
      "JavaScript",
      "Performance",
      "Design",
      "Figma",
      "Wallpapers",
      "React",
      "Vue",
      "Round-Ups",
      "Web Design",
      "Guides",
      ]


     const prdId = useRef()
      // const handleInput=()=>{
      //   console.log(prdId.current.value)
      //   //bussiness logic
      // }
      // prdId.current ---> it is pointing to the target element

      // useEffect(()=>{
      //   prdId.current.focus()
      // })

      const [username,setUserName]=useState("Sirish");

      


  return (
    <div>
      <BrowserRouter>
        {/* <Header username={username}/> */}

        <div style={{marginTop: "15%",height:"100vh"}}>
        {/* <MyComponent/> */}
        {/* <InputComponent placeholder={"enter first name"} id="fname"/>
        <InputComponent placeholder={"enter last name"} id="lname"/> 
        <InputComponent placeholder={"enter address"}   />
        <InputComponent placeholder={"enter pincode"}/> */}

        {/* <PrimaryButton id={"btn1"} className="primaryBtn"
        text="React" disabled={true}
         handleBtnClick={(e)=>alert(e.target.innerText)}/> */}
          {/* {
              titles.length > 0 
              && 
              titles.map((title ,index)=><PrimaryButton id={index} className="primaryBtn"
              text={title} disabled={false}
               handleBtnClick={(e)=>alert(e.target.innerText)}/> )
          } */}


              {/* <input type='text' ref={prdId}
               placeholder='Enter a name'
               value={username}
              onChange={(e)=>setUserName(e.target.value)} 
                />

              <button onClick={handleInput}> Click</button> */}
              {/* {JSON.stringify(prdId.current)} */}
        {/* <InputComponent/>
        <InputComponent/>
        <InputComponent/>
        <InputComponent/> */}
        <CounterProvider>
            <Layout />
        </CounterProvider>
       
        </div>
      
        {/* <Footer /> */}

        {/* <MyComponent/> */}
      </BrowserRouter>
    </div>

  )
}

export default App



// Steps:
// 1. We have to add a route in router
// 2. we have to add the params in the Link tag
// 3. we have to useParams to get the params from the URL
// 4. Based on the params we have fetched the data.



// https://www.flipkart.com/
// hukf-hzs-ch720n-active-noise-cancelling-30-hrs-battery-life-multipoint-connection-bluetooth-wired-headset
// /p/itm0a5f1b8110c14
// ?pid=ACCH29XY4XN2XYGZ&lid=LSTACCH29XY4XN2XYGZYV3QFO&marketplace=FLIPKART
// &cmpid=content_headphone_8965229628_gmc



//Mui Installation
// https://mui.com/material-ui/getting-started/installation/
// CSS library
// npm install @mui/material @emotion/react @emotion/styled
// npm install @fontsource/roboto
// npm install @mui/icons-material


// https://codesandbox.io/s/login-form-material-ui-u1xjl?file=/src/components/CustomInput.js



