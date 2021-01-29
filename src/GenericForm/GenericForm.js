import React from 'react'
import './GenericForm.css'

//generic form to be used throughout application
export default function GenericForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['generic-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}
