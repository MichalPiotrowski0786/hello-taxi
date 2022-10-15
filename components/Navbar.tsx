import { MapIcon, ArrowTrendingUpIcon, UserIcon } from '@heroicons/react/24/outline'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex items-center justify-evenly text-center bg-slate-500 m-4 rounded-full'>
      <NavbarItem icon={MapIcon} href='' />
      <NavbarItem icon={ArrowTrendingUpIcon} href='trips' />
      <NavbarItem icon={UserIcon} href='user' />
    </div>
  )
}

export default Navbar
