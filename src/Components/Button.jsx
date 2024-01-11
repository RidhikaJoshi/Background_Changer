import React from 'react'

function Button({colour, background, text}) {
  return (
    
     <button className="{background} {text}">{colour}</button>
  )
}

export default Button