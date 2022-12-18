import React from 'react'

type ButtonType = {
  children: React.ReactNode
  cy: string
  onClick?: () => void
  className?: string
  isDisabled?: boolean
  variant?: 'default' | 'danger' | 'secondary'
}

const Button: React.FC<ButtonType> = (props) => {
  let classes =
    'py-3 px-6 font-semibold text-lg fill-white items-center flex justify-center gap-1 rounded-full'

  switch (props.variant) {
    case 'danger':
      classes += ' text-white bg-rose-500'
      break
    case 'secondary':
      classes += ' text-slate-400 bg-slate-100'
      break

    default:
      classes += ' text-white bg-blue-dev'
      break
  }

  return (
    <button
      disabled={props.isDisabled ? props.isDisabled : false}
      data-cy={props.cy}
      className={`${classes} ${props.className ? props.className : ''} ${
        props.isDisabled ? 'opacity-70' : ''
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
