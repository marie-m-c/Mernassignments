import { Outlet } from 'react-router-dom'

const Brand = () => {
  return (
    <>
        <h1 className='my-2'>Favourite authors</h1>
        <Outlet />
    </>
  )
}

export default Brand
