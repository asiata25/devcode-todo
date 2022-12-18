import React from 'react'

type HeaderCompType = { title: string }

const HeaderComp: React.FC<HeaderCompType> = (props) => {
  return (
    <header
      data-cy='header-background'
      className='bg-blue-dev pt-[38px] pb-[31px] fixed top-0 inset-x-0 shadow-devcode-1'
    >
      <div className='container'>
        <h1
          data-cy='header-title'
          className='text-white uppercase text-2xl font-bold'
        >
          {props.title}
        </h1>
      </div>
    </header>
  )
}

export default HeaderComp
