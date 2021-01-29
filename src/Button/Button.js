import React from 'react'
import cx from 'classnames'
import './Button.css'

//generic button element to be used throughout application
const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx('Button', className)} ref={ref} {...props} />
  )
})

export default Button
