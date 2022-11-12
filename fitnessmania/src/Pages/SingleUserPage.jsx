import React from 'react'
import { useParams } from 'react-router-dom'

const SingleUserPage = () => {
    let params=useParams()
    console.log(params)
  return (
    <div>SingleUserPage</div>
  )
}

export default SingleUserPage