import { Children } from 'react'
import Software_categories from '@/api/content/Software_categories'
import useStore from '@/store'
import { usePathname } from 'next/navigation'

function ReplaceApos(children: React.ReactNode) {
    if (typeof children == 'string') {
        children = children.replace('\'', '&apos;')
    }
    return children
}

export function Title({ children }: { children: React.ReactNode }) {
    children = ReplaceApos(children)
    return (
        <div className='text-center text-4xl scroll-mt-6 font-bold mb-10 text-primary-100 scroll'>
            {children}
        </div>
    )
}

export function LO({ children }: { children: React.ReactNode }) {
    const { scrollTo, grade } = useStore.accordion(state => ({ scrollTo: state.scrollTo, grade: state.grade }))
    const { mobileNavOpened, setMobileNavOpened } = useStore.navigation(state => ({ mobileNavOpened: state.mobileNavOpened, setMobileNavOpened: state.setMobileNavOpened }))
    children = ReplaceApos(children)
    return (
        <div className={`mb-10 hover:underline cursor-pointer ${mobileNavOpened ? grade == null ? 'scroll-mt-[100px]' : 'scroll-mt-[500px]' : 'scroll-mt-6'} sm:scroll-mt-6 text-primary-100 text-3xl font-bold scroll`} onClick={() => { setMobileNavOpened(false); scrollTo((children as string).split(' ')[0]) }}>
            {children}
        </div>
    )
}

export function Div({ children }: { children: React.ReactNode }) {
    children = ReplaceApos(children)
    return (
        <div className='mb-6'>
            { children }
        </div>
    )
}

export function H2({ children }: { children: React.ReactNode }) {
    children = ReplaceApos(children)
    return (
        <h2 className='text-2xl font-semibold mb-4'>
            {children}
        </h2>
    )
}

export function H3({ children }: { children: React.ReactNode }) {
    children = ReplaceApos(children)
    return (
        <h2 className='text-xl font-semibold mb-2'>
            {children}
        </h2>
    )
}

export function P({ children }: { children: React.ReactNode }) {
    children = ReplaceApos(children)
    return (
        <p>
            {children}
        </p>
    )
}

export function List({ children }: { children: React.ReactNode }) {
    const items: React.ReactNode[] = []
    Children.forEach(children, (child, index) => {
        items.push(ReplaceApos(child))
    })
    return (
        <ul className='list-disc pl-8'>
            {items.map((i, index) => (
                <li key={index}>
                    {i}
                </li>
            ))}
        </ul>
    )
}

export function Container() {
    return (
        <div className='bg-main-100 p-6 rounded-lg shadow-primary-100 shadow-sm'>
            <Software_categories />
        </div>
    )
}