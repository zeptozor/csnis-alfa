'use client'

import Link from 'next/link'
import '@/app/globals.css'
import { usePathname } from 'next/navigation'
import Accordion from '@/components/Accordion'
import useStore from '@/store'

function MenuIcon() {
  const { mobileNavOpened, setMobileNavOpened } = useStore.navigation(state => ({ mobileNavOpened: state.mobileNavOpened, setMobileNavOpened: state.setMobileNavOpened }))
  return (
      <div className='sm:hidden flex z-20 relative w-10 h-10' onClick={() => setMobileNavOpened()}>
          <div className='absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
              <span className={`absolute h-0.5 w-5 bg-textcolor transform transition duration-300 ease-in-out ${mobileNavOpened ? 'rotate-45 delay-100' : '-translate-y-1.5'}`}></span>
              <span className={`absolute h-0.5 bg-textcolor transform transition-all duration-200 ease-in-out ${mobileNavOpened ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-5 bg-textcolor transform transition duration-300 ease-in-out ${mobileNavOpened ? '-rotate-45 delay-100' : 'translate-y-1.5'}`}></span>
          </div>
      </div>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const grade = useStore.accordion(state => state.grade)
  const { mobileNavOpened, setMobileNavOpened } = useStore.navigation(state => ({ mobileNavOpened: state.mobileNavOpened, setMobileNavOpened: state.setMobileNavOpened }))
  const pathName = usePathname()

  return (
    <html lang="en">
      <head>
        <title>CS NIS</title>
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link>
        <link href='./images/logo.jpg' rel='shortcut icon' type='image/x-icon'></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <div className='w-full flex flex-col'>
          <div className='flex m-6 mt-3 h-10 items-center justify-between'>
            <div>
              <Link className='text-3xl font-extrabold' href='/'>CS NIS</Link><span>*alfa</span>
            </div>
            <MenuIcon />
            {
              pathName != '/lo' &&
              <div className='hidden sm:flex items-center gap-x-8'>
                <Link href='/lo'>Learning objectives</Link>
                {/* <Link href='/auth'>Log in</Link> */}
              </div>
            }
          </div>
          <div className={`w-full sm:hidden flex flex-col transition-all ease-out duration-500 ${mobileNavOpened ? pathName == '/lo' ? grade == null ? 'h-[100px]' : 'h-[500px]' : 'h-[50px]' : 'h-0'}`}>
            {
              pathName != '/lo' &&
              <div className='flex px-8 w-full'>
                <Link className='w-full text-center px-5 py-3 bg-primary-100 rounded-lg' href='/lo' onClick={() => setMobileNavOpened(false)}>Learning objectives</Link>
                {/* <Link className='px-5 py-3 border border-primary-100 rounded-lg' href='/auth' onClick={setMobileNavOpened}>Log in</Link> */}
              </div>
            }
            {
              pathName == '/lo' &&
              <div className='sm:hidden flex'>
                <Accordion />
              </div>
            }
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
