import { HandRaisedIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-center text-center bg-slate-800'>
        <HandRaisedIcon className='w-12 h-12 text-yellow-400 m-1' />
        <h1 className='text-3xl text-yellow-400 font-bold p-4'>Hello Taxi App!</h1>
      </div>
      <Navbar />
    </div>
  )
}

export default Header