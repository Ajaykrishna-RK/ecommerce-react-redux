import React from 'react'

const Button = (props) => {
  return (
    <div>

<button className={props.className} id={props.id} onClick={props.onClick}> {props.children}</button>


    </div>
  )
}

export default Button