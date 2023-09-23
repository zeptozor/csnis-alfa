import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full px-6 h-[calc(100vh-76px)] bg-main-100'>
      <div className='w-full mt-20 sm:mt-32 flex flex-col items-center'>
        <h1 className='text-3xl mx-auto sm:text-5xl font-bold max-w-5xl tracking-tight text-center'>
          Prepare for exams and lessons with NIS Computer Science program
        </h1>
        <p className='text-onsurface mx-auto mt-10 text-center max-w-2xl sm:max-w-3xl'>
          Learn the material taught at NIS with easy navigation by learning objectives. Create groups and solve assignments under the supervision of a supervisor (todo).
        </p>
        <div className='hidden sm:flex items-center justify-between mt-10 space-x-6'>
            <Link className='px-5 flex items-center justify-center py-3 rounded-md bg-primary-100' href='/lo'>Get started</Link>
            {/* <Link className='px-5 flex items-center justify-center py-3 rounded-md border border-primary-100' href='/auth'>Log in</Link> */}
          </div>
      </div>
    </div>
  )
}
