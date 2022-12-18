import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError() as any

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      {error.statusText || error.message}
    </div>
  )
}

export default ErrorPage
