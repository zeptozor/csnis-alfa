import { createRef, useRef } from 'react'
import { create } from 'zustand'

type AccordionGrade = '11' | '12' | null
type AccordionUnit = `${ 1 | 2 | 3 | 4 }.${ 'A' | 'B' | 'C' }` | null
export type AccordionTopic = string | null
export type AccordionLO = `${ '11' | '12' }.${ number }.${ number }.${ number }` | null

interface AccordionStoreStates {
    grade: AccordionGrade
    setGrade(newGrade: AccordionGrade): any
    unit: AccordionUnit
    setUnit(newUnit: AccordionUnit): any
    topic: AccordionTopic
    setTopic(newTopic: AccordionTopic): any
    lo: AccordionLO
    setLO(newLO: AccordionLO): any
    activeGrade: AccordionGrade
    activeUnit: AccordionUnit
    activeTopic: AccordionTopic
    currentTopic: AccordionTopic
    topicRef: React.MutableRefObject<HTMLDivElement>
    scrollTo(id: AccordionLO | AccordionTopic): any
}

const useAccordionStore = create<AccordionStoreStates>()(((set, get: () => AccordionStoreStates) => (
    {
        grade: null,
        setGrade: (grade) => {
            if (grade == get().grade)
                return
            set({ activeGrade: null, activeUnit: null, activeTopic: null })
            set({ grade, unit: null, topic: null, lo: null })
        },
        unit: null,
        setUnit: (unit) => {
            if (unit == get().unit)
                return
            set({ activeGrade: get().grade, activeTopic: null, activeUnit: null })
            set({ unit, topic: null, lo: null })
        },
        topic: null,
        setTopic: (topic) => {
            if (topic == get().topic)
                return
            set({ activeUnit: get().unit, activeTopic: null })
            set({ topic, lo: null })
        },
        lo: null,
        setLO: (lo) => {
            if (lo == get().lo)
                return
            set({ activeTopic: get().topic })
            set({ lo })
        },
        activeGrade: null,
        activeUnit: null,
        activeTopic: null,
        currentTopic: 'Software_categories',
        topicRef: createRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>,
        scrollTo: (id) => {
            const topicNode = get().topicRef.current
            if (!topicNode) return
            let LONode: any
            let initialized = false
            topicNode.querySelectorAll('.scroll').forEach((value) => {
                if ((value as HTMLDivElement).innerText.startsWith((id as string))) {
                    LONode = (value as HTMLDivElement)
                    initialized = true
                }
            })
            if (!initialized) return
            LONode.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
)))

export default useAccordionStore