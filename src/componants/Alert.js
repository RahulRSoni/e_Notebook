import React from 'react'

function AlertBar(props) {
  const capital = (word) => {
    const lower = word.toLowerCase()
    return lower.word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <div style={{ height: '50px' }}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capital(props.alert.type)}</strong>{props.alert.msg}
      </div>
      }
    </div>
  )
}

export default AlertBar
