import Software_categories from './Software_categories'
import Operating_systems from './Operating_systems'
import { ReactElement } from 'react'
import Von_Neumann_Architecture from './Von_Neumann_Architecture'
import Memory_types from './Memory_types'

interface TopicsObject {
    [topic: string]: ReactElement
}


const topics: TopicsObject = {
    'Software categories': <Software_categories />,
    'Operating systems': <Operating_systems />,
    'Von Neumann Architecture': <Von_Neumann_Architecture />,
    'Memory types': <Memory_types />
}

export default topics