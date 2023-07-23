import React, { useState } from 'react'

function Button(props) {
  const [hover, setHover] = useState(false)
    const btnStyles = {
        padding: '1rem 1.5rem',
        backgroundColor: props.bg === 'transparent' ? `${props.bg}` : `${!hover ? 'var(--color-lightblue)' : 'var(--color-blue)'}`,
        color: props.bg === 'transparent' ? 'var(--color-blue)' : 'var(--color-white)',
        border: props.bg === 'transparent' ? '1px solid var(--border-color)' : 'none',
        borderRadius: '14px',
        cursor: 'pointer',
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        transition: '.1s linear'
    }
  return (
    <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={btnStyles}>
        {props.content}
    </button>
  )
}

export default Button