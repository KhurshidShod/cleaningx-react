import React from 'react'
import styles from './CallUsNow.module.css'
import { BsFillTelephoneFill } from 'react-icons/bs'

const CallUsNow = (props) => {
  return (
    <div className={styles.call_us_now}>
    <button>
      <BsFillTelephoneFill color="#0075FF" size={30} />
    </button>
    <div>
      <p style={{color: props.color === 'white' && 'white'}}>CALL US NOW</p>
      <h1 style={{color: props.color === 'white' && 'white'}}>(414) 567 - 2109</h1>
    </div>
  </div>
  )
}

export default CallUsNow