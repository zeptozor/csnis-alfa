import Software_categories from './Software_categories'
import Operating_systems from './Operating_systems'
import { ReactElement } from 'react'
import Von_Neumann_Architecture from './Von_Neumann_Architecture'
import Memory_types from './Memory_types'
import Security_privacy_and_data_integrity from './Security_privacy_and_data_integrity'
import Safety_methods from './Safety_methods'
import Validation_and_verification from './Validation_and_verification'
import Blockchain_technology from './Bloackchain_technology'
import Ethics_and_ownership from './Ethics_and_ownership'

interface TopicsObject {
    [topic: string]: ReactElement
}


const topics: TopicsObject = {
    'Software categories': <Software_categories />,
    'Operating systems': <Operating_systems />,
    'Von Neumann Architecture': <Von_Neumann_Architecture />,
    'Memory types': <Memory_types />,
    'Security, privacy and data integrity': <Security_privacy_and_data_integrity />,
    'Safety methods': <Safety_methods />,
    'Validation and verification': <Validation_and_verification />,
    'Blockchain technology': <Blockchain_technology />,
    'Ethics and ownership': <Ethics_and_ownership />
}

export default topics