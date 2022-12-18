import { Outlet } from 'react-router-dom'
import HeaderComp from './components/layouts/Header'

function App() {
  return (
    <>
      <HeaderComp title='To Do List App' />
      <div className='container mt-[150px]'>
        <Outlet />
      </div>
    </>
  )
}

export default App
