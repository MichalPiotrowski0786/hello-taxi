import HeroIcon from '@heroicons/*'
import Link from 'next/link'

type NavbarItemType = {
  icon: typeof HeroIcon
  href: string
}

const NavbarItem = ({ icon, href }: NavbarItemType) => {
  const Icon = icon

  return (
    <div>
      <div className='text-center'>
        <Link href={`/${href}`} >
          <Icon className='w-12 h-12 text-yellow-400 m-1' />
        </Link>
      </div>
    </div>
  )
}

export default NavbarItem