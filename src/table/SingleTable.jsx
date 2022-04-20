import React, { useState } from 'react'
import "./table.css"
const SingleTable = ({name}) => {
    const [isData,setisData]=useState(false)
    const [isDataa,setisDataa]=useState(false)
    const handleClick=()=>{

        setisData(!isData)
    }
    const handleChange=()=>{
        // setisData(false)
    }
  return (
    <>
        
        <tr className={isData?"big":"small"} >
            <div  onClick={handleClick}>
            <th >{name}</th>
            <th >Email</th>
            </div>
            <th><a href="">link</a></th>
            <th><button onClick={handleChange}>click</button></th>
          </tr>
           
          {/* {isData &&       <tr>
            <td>
            </td>
            <th>{name}</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>} */}
        
    </>
  )
}

export default SingleTable
