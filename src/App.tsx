import { Outlet } from 'react-router-dom'
import HeaderComp from './components/layouts/Header'

function App() {
  return (
    <>
      <HeaderComp title='TO DO LIST APP' />
      <div className='container mt-[150px]' data-cy='activity-item'>
        <Outlet />
      </div>
    </>
  )
}

export default App
