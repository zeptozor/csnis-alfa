import { Div, H2, H3, LO, List, P, Title } from '@/components/Content'
import useStore from '@/store'

export default function Von_Neumann_Architecture() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Von Neumann Architecture</Title>
            <LO>11.3.2.1 describe the interaction of CPU with peripheral devices</LO>
            <Div>
                <H3>Interaction between the CPU and Peripherals:</H3>
                <P>The CPU uses the address bus to specify the memory location or I/O address of the peripheral it wants to access.</P>
                <P>The CPU sets control signals on the control bus to indicate the type of operation (read or write) and selects the specific peripheral.</P>
                <P>For a write operation, the CPU puts the data onto the data bus.</P>
                <P>The peripheral receives the address and control signals and responds accordingly. In a read operation, the peripheral puts the requested data onto the data bus.</P>
                <P>The CPU then reads the data from the data bus or writes data to the peripheral, depending on the operation.</P>
                <P>The control signals may include synchronization mechanisms to ensure proper timing and coordination between the CPU and peripherals.</P>
            </Div>
            <LO>11.3.2.2 describe the purpose of CPU components, system bus and main memory</LO>
            <Div>
                <H3>Components of the CPU:</H3>
                <List>
                    <>ALU (Arithmetic Logic Unit) - Makes arithmetical and logical calculations</>
                    <>CU (Control Unit) - Coordinates and controls the activities of the CPU</>
                    <>
                        Registers:
                        <List>
                            <>General Purpose Registers - Allow users to use them as they wish</>
                            <>Address Registers - Used for storing addresses</>
                            <>Conditional Registers - Hold truth values for loop and selection</>
                        </List>
                    </>
                </List>
            </Div>
            <Div>
                <H3>System buses:</H3>
                <List>
                    <>Control Bus - bidirectional bus that transports control signals between the three components of the three-box model. It also carries interrupt signals</>
                    <>Address Bus - unidirectional bus that carries address signals from the CPU to main memory and I/O devices</>
                    <>Data Bus - bidirectional bus that transports data and instructions between the three components of the three-box model</>
                </List>
            </Div>
            <Div>
                <H3>Processor Clock:</H3>
                <P>A timing device connected to the processor that synchronizes when the fetch, decode, execute cycle runs</P>
            </Div>
            <Div>
                <H3>Clock Speed:</H3>
                <P>Clock speed is the amount of cycles that are performed by the CPU per second</P>
            </Div>
        </div>
    )
}