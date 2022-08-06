import React from 'react'
import { useParams } from 'react-router-dom'

const Plantprofile = () => {
  let { plantId } = useParams();
  return (
    <div>Plantprofile: {plantId}</div>
  )
}

export default Plantprofile;