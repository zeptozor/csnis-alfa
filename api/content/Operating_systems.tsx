import { Div, H2, H3, LO, List, P, Title } from '@/components/Content'
import useStore from '@/store'

export default function Operating_systems() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Operating systems</Title>
            <LO>11.3.1.3 describe the purpose and main functions of operating systems</LO>
            <Div>
                <H3>Operating System:</H3>
                <P>An operating system is a system software that acts as an interface between the user and hardware and controls the execution of programs, manages all of the software and hardware on the computer, performs basic tasks such as file, memory, and process management, handling input and output and controling peripheral devices such as disk drives and printers.</P>
                <P>Most of the time, there are several different computer programs running at the same time, and they all need to access your computer's central processing unit (CPU), memory, and storage. The operating system coordinates all of this to make sure each program gets what it needs.</P>
            </Div>
            <Div>
                <H3>Resources managed by the Operating System:</H3>
                <List>
                    <>Process - keeping track of processor and status of processes, allocating the processor to a process</>
                    <>Memory - managing program use of memory</>
                    <>File System - managing files and directories</>
                    <>Networking - handng communication between computers</>
                    <>Security - providing security through user accounts and passwords</>
                    <>I/O - managing peripheral hardware for input/output</>
                </List>
            </Div>
            <LO>11.3.1.4 compare single-user and multi-user operating systems</LO>
            <Div>
                <H3>Classification of Operating System:</H3>
                <List>
                    <>Single-user OS - allows only one user to use the computer at any time. Examples: MS-DOS, Windows 95</>
                    <>Multi-user OS - allows more than one user to access a computer system at one time. Several terminals connect to the main computer with OS on it, and each terminal will have its own user. Examples: Linux & Unix distributed OS, Mainframes</>
                </List>
            </Div>
            <Div>
                <H3>Components of Multi-user Operating System:</H3>
                <List>
                    <>Kernel - core of a computer's operating system and generally has complete control over everything in the system</>
                    <>Interrupt - signal emitted by hardware or software when a process or an event needs immediate attention. It alerts the processor to a high-priority process requiring interruption of the current working process</>
                    <>Virtual Memory - storage scheme that provides the user an illusion of having a very big main memory. This is done by treating a part of secondary memory as the main memory</>
                </List>
            </Div>
            <LO>11.3.1.5 compare one-task and multitasking operating systems</LO>
            <Div>
                <H3>Classification of Operating System on the basis of processing:</H3>
                <List>
                    <>
                        Multitasking OS:
                        <List>
                            <>Preemptive - OS allocates time slices to each program, and the CPU executes them in order. Example: Linux</>
                            <>Cooperative - each process provides time to another process to run. Example: Windows 3x</>
                        </List>
                    </>
                    <>Single Tasking OS - Can support only one task at any time. Example: MS-DOS</>
                </List>
            </Div>
        </div>
    )
}