import { Div, H2, H3, LO, List, P, Title } from '@/components/Content'
import useStore from '@/store'

export default function Software_categories() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Software categories</Title>
            <H2>Types of Software:</H2>
            <Div>
                <H3>Application Software:</H3>
                <P>Software designed to help the user perform specific tasks.</P>
            </Div>
            <Div>
                <H3>System Software:</H3>
                <P>Software designed to run a computer's hardware and provide a platformfor applications to run on top of.</P>
            </Div>
            <LO>11.3.1.1 justify the choice of applied software and choice criteria based on the goals</LO>
            <Div>
                <H2>Types of System Software:</H2>
                <List>
                    <>Library Programs - Compiled collection of reusable code. Examples: vector library in C++, fs library in Node.js</>
                    <>
                        Translators
                        <List>
                            <>Assembler - Translates assembly language programs into machine code</>
                            <>Compiler - Translates high-level language code into object code</>
                            <>Interpreter - Analyses and executes a high-level language program a line at a time</>
                        </List>
                    </>
                    <>Utility Programs - Small, powerful programs with limited capability that make the computer easy to use. Examples: file manager, problem diagnosing program, virus-checker program</>
                    <>Operating Systems - Collection of programs that make the computer hardware available to the user, hide the complexities of the computer's operation, and provide an interface between application software and the computer. Examples: Microsoft, MacOS, Linux</>
                </List>
            </Div>
            <Div>
                <H2>Common Utility Programs:</H2>
                <List>
                    <>File Conversion Program - Converts files from one format to another</>
                    <>Disk Formatting Program - Sets up a new disk</>
                    <>File Compression Program - Reduces the size of a file</>
                    <>Backup Program - Makes a copy of a file</>
                    <>Garbage-Collection and Defragmentation Programs - Remove unwanted data and files from the disk and close any gaps left on the disk</>
                </List>
            </Div>
            <LO>11.3.1.2 classify application software</LO>
            <H2>Types of Application Software:</H2>
            <Div>
                <H3>General Purpose Application:</H3>
                <P>Can be used for a variety of tasks. Examples: word processor, presentation software, spreadsheet.</P>
            </Div>
            <Div>
                <H3>Special Purpose Application:</H3>
                <P>Can be used to execute one specific task. Examples: camera application, chess game, calculators.</P>
            </Div>
            <Div>
                <H3>Bespoke Application:</H3>
                <P>Made for a specific user and purpose. Built to fulfill your precise needs, however, it is expensive and may be buggy. Examples: bank software, military software.</P>
            </Div>
        </div>
      )
}