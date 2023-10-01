import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Categories_and_classification_of_programming_languages() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Categories and classification of programming languages</Title>
            <LO>11.5.1.1 distinguish between generations of programming languages</LO>
            <Div>
                <H3>First Generation:</H3>
                <P>First-generation programming languages are also known as machine-level languages. They consist of binary code that directly communicates with the computer's hardware. They are low-level and hard to understand, as they involve a series of 0s and 1s.</P>
            </Div>
            <Div>
                <H3>Second Generation:</H3>
                <P>Second-generation programming languages are often referred to as assembly languages. They use symbolic names and mnemonics to represent machine-level instructions, making programming slightly more human-readable than first-generation languages.</P>
            </Div>
            <Div>
                <H3>Third Generation:</H3>
                <P>Third-generation programming languages are high-level languages like C, Java, and Python. They are more abstract and user-friendly than earlier generations. They use English-like syntax and allow for easier code development and maintenance.</P>
            </Div>
            <Div>
                <H3>Fourth Generation:</H3>
                <P>Fourth-generation programming languages are designed for specific applications and domains. They are often used for database management and data manipulation. Examples include SQL and MATLAB.</P>
            </Div>
            <Div>
                <H3>Fifth Generation:</H3>
                <P>Fifth-generation programming languages are still emerging and are focused on artificial intelligence and natural language processing. They aim to enable computers to understand and process human language more effectively.</P>
            </Div>
            <LO>11.5.1.2 classify programming languages into low and high-level</LO>
            <Div>
                <H3>Low-Level Languages:</H3>
                <P>Low-level programming languages are closer to the hardware and provide minimal abstraction from the computer's architecture. They include:</P>
                <List>
                    <>Machine Language - composed of binary code (0s and 1s) and is specific to a particular computer architecture</>
                    <>Assembly Language - uses symbolic names and mnemonics to represent machine-level instructions but is still closely tied to the hardware</>
                </List>
            </Div>
            <Div>
                <H3>High-Level Languages:</H3>
                <P>High-level programming languages provide a higher level of abstraction and are closer to human-readable language. They include languages like:</P>
                <List>
                    <>C</>
                    <>Python</>
                    <>Java</>
                    <>Ruby</>
                </List>
            </Div>
            <LO>11.5.1.5 advantages and disadvantages of high-level languages</LO>
            <Div>
                <H3>Advantages of High-Level Languages:</H3>
                <List>
                    <>Abstraction - high-level languages provide a higher level of abstraction, making it easier to express complex ideas and algorithms in a more human-readable form</>
                    <>Productivity - they enable faster development and reduce the amount of code required for a given task, leading to increased developer productivity</>
                    <>Portability - high-level languages are often platform-independent, allowing code to be run on different operating systems with minimal modifications</>
                    <>Maintenance - code written in high-level languages is generally easier to maintain, debug, and update, reducing the chances of errors and the cost of maintenance</>
                    <>Community and Libraries - high-level languages typically have active communities and extensive libraries, which can accelerate development by providing pre-built functions and modules</>
                </List>
            </Div>
            <Div>
                <H3>Disadvantages of High-Level Languages:</H3>
                <List>
                    <>Performance - high-level languages may sacrifice performance compared to low-level languages like C or assembly language because of the additional layers of abstraction</>
                    <>Resource Usage - they may consume more memory and processing power, which can be a concern for resource-constrained environments</>
                    <>Less Control - developers may have less control over low-level hardware operations, which can be important for certain applications like embedded systems or device drivers</>
                    <>Learning Curve - learning high-level languages can be easier for beginners, but understanding their underlying mechanisms may require a deeper understanding of computer science concepts</>
                </List>
            </Div>
            <LO>11.5.1.6 advantages and disadvantages of low-level languages</LO>
            <Div>
                <H3>Advantages of Low-Level Languages:</H3>
                <List>
                    <>Control - low-level languages provide precise control over hardware, making them suitable for tasks where fine-grained control is required, such as device drivers or embedded systems</>
                    <>Performance - programs written in low-level languages can be highly optimized for performance, as they are close to the hardware and can minimize resource usage</>
                    <>Efficiency - low-level languages allow for efficient memory management and resource utilization, which can be critical in resource-constrained environments</>
                    <>Platform-Specific - they can be tailored to specific hardware architectures and take full advantage of the capabilities of a particular machine</>
                    <>Learning Experience - learning a low-level language can deepen one's understanding of computer architecture and systems programming</>
                </List>
            </Div>
            <Div>
                <H3>Disadvantages of Low-Level Languages:</H3>
                <List>
                    <>Complexity - writing code in low-level languages can be challenging and error-prone due to the need to manage memory, registers, and hardware details manually</>
                    <>Portability - code written in low-level languages is often platform-specific and may require significant modifications to run on different architectures</>
                    <>Development Time - developing software in low-level languages is generally slower compared to high-level languages, as it involves more manual effort</>
                    <>Accessibility - low-level languages are less accessible to beginners and may have a steeper learning curve, requiring a deeper understanding of computer architecture</>
                </List>
            </Div>
            <LO>11.5.1.3 analyze a simple program written in the language of assembler</LO>
            <LO>11.5.1.4 use trace tables to find and verify the correctness of an algorithm</LO>
        </div>
    )
}