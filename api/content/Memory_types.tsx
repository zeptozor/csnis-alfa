import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Memory_types() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Memory types</Title>
            <LO>11.3.4.1 explain the differences between RAM and ROM memory</LO>
            <Div>
                <H3>Types of Computer Memory:</H3>
                <List>
                    <>RAM (Random Access Memory) - type of computer memory that is used to store data and insuctions that are actively being used by the computer's CPU. It is a volatile memory, meaning that its contents are lost when the power is turned off or interrupted</>
                    <>ROM (Read Only Memory) - type of computer memory that stores data that cannot be modified or erased by normal computer operations. It contains permanent insuctions or data that are essential for the functioning of the computer system</>
                </List>
            </Div>
            <Div>
                <H3>RAM vs. ROM:</H3>
                <Table>
                    <>
                        <>Characterictics</>
                        <>RAM</>
                        <>ROM</>
                    </>
                    <>
                        <>Volatility</>
                        <>Volatile - contents are temporary, erased when power is turned off</>
                        <>Non-volatile - data remains intact even when power is off</>
                    </>
                    <>
                        <>Mutability</>
                        <>Supports both read and write operations. Data can be read and modified by the CPU</>
                        <>Primarily read-only. Contains data that is programmed during manufacturing and cannot be modified or erased by normal computer operations</>
                    </>
                    <>
                        <>Data Persistence</>
                        <>Data is not retained when power is off, unsuitable for long-term storage</>
                        <>Data is retained permanently, making it reliable for critical insuctions or data</>
                    </>
                    <>
                        <>Usage</>
                        <>Temporary storage for actively used data and insuctions. Improves system performance</>
                        <>Contains permanent insuctions or data essential for the functioning of the computer system</>
                    </>
                    <>
                        <>Accessibility</>
                        <>Provides fast and random access to data. Allows quick reieval and manipulation of data</>
                        <>Provides sequential access. Data is read from ROM sequentially rather than randomly</>
                    </>
                </Table>
            </Div>
            <LO>11.3.4.2 explain the purpose of virtual memory</LO>
            <Div>
                <H3>Virtual Memory:</H3>
                <P>Virtual memory is a memory management technique used by operating systems to provide an illusion of having more RAM than is actually available in a computer system.</P>
                <P>In virtual memory, the operating system slices the data into pages with a fixed size and stores it on the disk. When the data is required, the operating system copies its pages and pastes them into RAM. However, this process can be relatively slow and may reduce the overall speed of the computer's operation.</P>
            </Div>
            <LO>11.3.4.3 explain the purpose of cache memory</LO>
            <Div>
                <H3>Cache Memory:</H3>
                <P>Cache memory is a small and fast memory that helps the computer work faster. It stores frequently used data so that the CPU can access it quickly.</P>
                <P>Instead of going to the main memory every time, the CPU checks the cache first. Cache memory makes the computer run smoother by keeping important data close to the CPU.</P>
            </Div>
        </div>
    )
}