import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Security_privacy_and_data_integrity() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Security, privacy and data integrity</Title>
            <LO>11.1.2.1 explain the difference between the terms security, privacy and data integrity</LO>
            <Div>
                <H3>Computer security</H3>
                <P>Preservation of computing systems and the information that they save and / or retrieve.</P>
                <P>Information security skills are currently required by all users. Only 10% of security measures are technical, and the remaining 90% depend on how much the user cares about the security of their data.</P>
                <P>Every user of a computer or mobile device should be able to grasp how to keep their computer, devices, and data secure.</P>
            </Div>
            <Div>
                <H3>Types of computer security:</H3>
                <List>
                    <>Data security - the practice of protecting digital information from unauthorized access, corruption</>
                    <>Cyber security - the use of technology, working practices and precautions designed to protect networks, computers, programs, and data from attack, damage or unauthorized access</>
                </List>
            </Div>
            <Div>
                <H3>Privacy:</H3>
                <P>Information that should be available only to authorized users</P>
            </Div>
            <Div>
                <H3>Integrity:</H3>
                <P>Information cannot be lost or changed from its original state</P>
            </Div>
        </div>
    )
}