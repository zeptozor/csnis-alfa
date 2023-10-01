import { Div, H2, H3, LO, List, P, Title } from '@/components/Content'
import useStore from '@/store'

export default function Software_categories() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Software categories</Title>
            <Div>
                <H3>Types of Software:</H3>
                <List>
                    <>Application Software - designed to help the user perform specific tasks</>
                    <>System Software - designed to run a computer's hardware and provide a platformfor applications to run on top of it</>
                </List>
            </Div>
            <LO>11.3.1.1 justify the choice of applied software and choice criteria based on the goals</LO>
            <Div>
                <H3>Types of System Software:</H3>
                <List>
                    <>Library Programs - compiled collection of reusable code. Examples: vector library in C++, fs library in Node.js</>
                    <>
                        Translators:
                        <List>
                            <>Assembler - translates assembly language programs into machine code</>
                            <>Compiler - translates high-level language code into object code</>
                            <>Interpreter - analyses and executes a high-level language program a line at a time</>
                        </List>
                    </>
                    <>Utility Programs - small, powerful programs with limited capability that make the computer easy to use. Examples: file manager, problem diagnosing program, virus-checker program</>
                    <>Operating Systems - collection of programs that make the computer hardware available to the user, hide the complexities of the computer's operation, and provide an interface between application software and the computer. Examples: Microsoft, MacOS, Linux</>
                </List>
            </Div>
            <Div>
                <H3>Common Utility Programs:</H3>
                <List>
                    <>File Conversion Program - converts files from one format to another</>
                    <>Disk Formatting Program - sets up a new disk</>
                    <>File Compression Program - reduces the size of a file</>
                    <>Backup Program - makes a copy of a file</>
                    <>Garbage-Collection and Defragmentation Programs - remove unwanted data and files from the disk and close any gaps left on the disk</>
                </List>
            </Div>
            <LO>11.3.1.2 classify application software</LO>
            <Div>
                <H3>Types of Application Software:</H3>
                <List>
                    <>General Purpose Application - can be used for a variety of tasks. Examples: word processor, presentation software, spreadsheet</>
                    <>Special Purpose Application - can be used to execute one specific task. Examples: camera application, chess game, calculators</>
                    <>Bespoke Application - made for a specific user and purpose. Built to fulfill your precise needs, however, it is expensive and may be buggy. Examples: bank software, military software</>
                </List>
            </Div>
        </div>
      )
}