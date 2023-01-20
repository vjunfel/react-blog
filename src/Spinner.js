import spinner from "../src/assets/svg/timer.svg";

import React from 'react'

export default function Spinner() {
  return (
    <div className="spinner-page">
      <div className="spinner">
        <img src={spinner} alt="Loading..."/>
      </div>
    </div>
  )
}
