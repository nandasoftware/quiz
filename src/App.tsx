import { useState } from 'react' 
import './App.css' 
import Dashboard from './Dashboard'
import Buttons from './ui/Buttons'

function App() {  


  const handleClick = () => {
    console.log("Button clicked!"); // Perform actions on button click
  };
 

  return (
    <> 
    <Buttons mainButton={{
    title: "Main Button red", 
    color: "red",  
    onClick:handleClick}} />
    <Buttons mainButton={{
    title: "Main Button green", 
    color: "green",  
    onClick:handleClick}} />
    <Buttons mainButton={{
    title: "Main Button blue",  
    onClick:handleClick}} />
    
    </>
  )
}

export default App
