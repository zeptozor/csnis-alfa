import getLearningObjectives from '@/api/learningObjectivesApi'
import useStore from '@/store'
import { usePathname } from 'next/navigation'

const eleven = getLearningObjectives(require('@/api/eleven.json'))
const twelve = getLearningObjectives(require('@/api/twelve.json'))

interface AccordionItemProps {
    id: any
    level: number
    heading: string
    open: boolean
    active: boolean
    onClick: (id: any) => void
    children: React.ReactNode
}

function AccordionItem({ id, level, heading, open, active, onClick, children }: AccordionItemProps) {
    const mobileNavOpened = useStore.navigation(state => state.mobileNavOpened)

    return (
        <div className='w-full'>
            <div className={`w-full py-2 flex items-center sm:rounded-tr-lg sm:rounded-br-lg justify-between pr-6 cursor-pointer ${ active ? 'text-primary-200 hover:bg-main-300' : open ? 'bg-primary-100' : 'hover:bg-main-300' }`} style={{ paddingLeft: level * 20 + 24 }} onClick={() => { onClick(id) }}>
                <span className='text-inherit'>{heading}</span>
                {
                    level != 3 &&
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className={`${ mobileNavOpened ? 'block' : 'hidden' } sm:block duration-100 ease-in transition h-[20px] w-[20px] ${active ? 'rotate-0 fill-primary-200' : open ? 'rotate-0' : '-rotate-90'}`}>
                        <g fill='none' fillRule='evenodd' transform='translate(-446 -398)'>
                            <path className={active ? 'fill-primary-200' : 'fill-current'} fillRule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path>
                            <polygon points="446 418 466 418 466 398 446 398"></polygon>
                        </g>
                    </svg>
                }
            </div>
            <div className={'w-full ' + (open ? 'block' : 'hidden')}>
                { children }
            </div>
        </div>
    )
}

export default function Accordion({ className = '' }: { className?: string }) {
    const pathName = usePathname()
    const { grade, unit, topic, lo, setGrade, setUnit, setTopic, setLO, activeGrade, activeUnit, activeTopic, scrollTo } = useStore.accordion(state => ({
        grade: state.grade,
        unit: state.unit,
        topic: state.topic,
        lo: state.lo,
        setGrade: state.setGrade,
        setUnit: state.setUnit,
        setTopic: state.setTopic,
        setLO: state.setLO,
        activeGrade: state.activeGrade,
        activeUnit: state.activeUnit,
        activeTopic: state.activeTopic,
        scrollTo: state.scrollTo
    }))
    const setMobileNavOpened = useStore.navigation(state => state.setMobileNavOpened)

    return (
        <div className={`${ grade == null ? 'h-[80px]' : 'h-[500px]' } sm:sticky sm:top-[76px] sm:h-[calc(100vh-76px)] sm:w-2/5 w-full overflow-y-scroll ${className}`}>
            <AccordionItem id='11' level={0} heading='Grade 11' open={grade == '11'} active={activeGrade == '11'} onClick={setGrade}>
                {
                    eleven.map(IUnit => (
                        <AccordionItem key={IUnit.key} id={IUnit.key} level={1} heading={IUnit.heading} open={unit == IUnit.key} active={activeUnit == IUnit.key} onClick={setUnit}>
                            {
                                Object.entries(IUnit.topics).map(([ITopic, los]) => (
                                    <AccordionItem key={ITopic} id={ITopic} level={2} heading={ITopic} open={topic == ITopic} active={activeTopic == ITopic} onClick={(id) => { setTopic(id); if (activeTopic == ITopic) {scrollTo(ITopic)} }}>
                                        {
                                            los.map(ILO => (
                                                <AccordionItem key={ILO.split(' ')[0]} id={ILO.split(' ')[0]} level={3} heading={ILO} open={lo == ILO.split(' ')[0]} active={false} onClick={(id) => { setLO(id); setMobileNavOpened(false); scrollTo(id) }}>{null}</AccordionItem>
                                            ))
                                        }
                                    </AccordionItem>
                                ))
                            }
                        </AccordionItem>
                    ))
                }
            </AccordionItem>
{/*             <AccordionItem id='12' level={0} heading='Grade 12' open={grade == '12'} active={activeGrade == '12'} onClick={setGrade}>
                {
                    twelve.map(IUnit => (
                        <AccordionItem key={IUnit.key} id={IUnit.key} level={1} heading={IUnit.heading} open={unit == IUnit.key} active={activeUnit == IUnit.key} onClick={setUnit}>
                            {
                                Object.entries(IUnit.topics).map(([ITopic, los]) => (
                                    <AccordionItem key={ITopic} id={ITopic} level={2} heading={ITopic} open={topic == ITopic} active={activeTopic == ITopic} onClick={setTopic}>
                                        {
                                            los.map(ILO => (
                                                <AccordionItem key={ILO.split(' ')[0]} id={ILO.split(' ')[0]} level={3} heading={ILO} open={lo == ILO.split(' ')[0]} active={false} onClick={setLO}>{null}</AccordionItem>
                                            ))
                                        }
                                    </AccordionItem>
                                ))
                            }
                        </AccordionItem>
                    ))
                }
            </AccordionItem> */}
        </div>
    )
}
