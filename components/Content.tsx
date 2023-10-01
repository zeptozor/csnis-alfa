import React, { Children, ReactElement } from 'react'
import useStore from '@/store'
import topics from '@/api/content'
import Image from 'next/image'

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
        <h2 className='text-xl font-semibold mb-2 mt-1'>
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
    Children.forEach(children, (item, index) => {
        items.push(ReplaceApos(item))
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

export function Table({ children }: { children: React.ReactNode }) {
    const headings: React.ReactNode[] = []
    const rows: React.ReactNode[] = []

    Children.forEach(children, (row: React.ReactNode, index) => {
        if (index == 0)
            headings.push(...(row as ReactElement).props.children)
        else
            rows.push((row as ReactElement).props.children)
    })
    return (
        <table className='w-full'>
            <thead>
                <tr className='bg-primary-100'>
                    {
                        headings.map((h, index) => <th className='py-2 px-4' key={index}>{h}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        rows.map((row, index) => (
                            <tr key={index} className={`${ index % 2 == 1 ? 'bg-primary-100' : '' }`}>
                                {
                                    (row as React.ReactNode[]).map((i, index) => (
                                        <th className='py-2 px-4' key={index}>{i}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    )
}

export function Img({ name }: { name: string }) {
    return (
        <Image src={`/deploy/images/${name}`} alt='' width={300} height={200} />
    )
}

export function Container() {
    const topic = useStore.accordion(state => state.topic)
    return (
        <div className='bg-main-100 p-6 rounded-lg shadow-primary-100 shadow-sm'>
            {
                topics[(topic as string)]
                    ? React.cloneElement(topics[(topic as string)], {})
                    : 'No'
            }
        </div>
    )
}