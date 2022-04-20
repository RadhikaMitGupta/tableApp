import React, { useEffect, useState } from 'react'
import SingleTable from './SingleTable'

const Table = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:3001/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>Radhika Gupta</h1>
<table>
        <thead>
          <tr className='th'>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
            {users.map((e)=>{
                return <SingleTable name={e.name}/>
            })}
        </tbody>
       
      </table>
      
    </div>
  )
}

export default Table
