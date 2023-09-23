'use client'

import Accordion from '@/components/Accordion'
import { Container } from '@/components/Content'

export default function LO() {
  return (
    <div className='w-full flex bg-main-100'>
      <Accordion className='hidden sm:block mb-6' />
      <div className='sm:w-5/7 w-full p-6 pt-0'>
        <Container />
        {/* {
          lo == '11.3.1.1' &&
          (
            <div className="bg-main-100 p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Types of Software:</h2>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Application Software:</h3>
                <p>Software designed to help the user perform specific tasks.</p>
              </div>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">System Software:</h3>
                <p>
                  Software designed to run a computer&apos;s hardware and provide a platform
                  for applications to run on top of.
                </p>
              </div>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Types of System Software:</h3>
                <ul className="list-disc pl-8">
                  <li>
                    Library Programs - Compiled collection of reusable code. Examples:
                    vector library in C++, fs library in Node.js
                  </li>
                  <li>
                    Translators
                    <ul className="list-disc pl-8">
                      <li>Assembler - Translates assembly language programs into machine code</li>
                      <li>Compiler - Translates high-level language code into object code</li>
                      <li>Interpreter - Analyses and executes a high-level language program a line at a time</li>
                    </ul>
                  </li>
                  <li>
                    Utility Programs - Small, powerful programs with limited capability that make the computer easy to use. Examples: file manager, problem diagnosing program, virus-checker program
                  </li>
                  <li>
                    Operating Systems - Collection of programs that make the computer hardware available to the user, hide the complexities of the computer&apos;s operation, and provide an interface between application software and the computer. Examples: Microsoft, MacOS, Linux
                  </li>
                </ul>
              </div>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Common Utility Programs:</h3>
                <ul className="list-disc pl-8">
                  <li>File Conversion Program - Converts files from one format to another</li>
                  <li>Disk Formatting Program - Sets up a new disk</li>
                  <li>File Compression Program - Reduces the size of a file</li>
                  <li>Backup Program - Makes a copy of a file</li>
                  <li>Garbage-Collection and Defragmentation Programs - Remove unwanted data and files from the disk and close any gaps left on the disk</li>
                </ul>
              </div>
            </div>
          )
        }
        {
          lo == '11.3.1.2' &&
          (
            <div className="bg-primary p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Types of Application Software:</h2>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">General Purpose Application:</h3>
                <p>
                  Can be used for a variety of tasks. Examples: word processor, presentation software, spreadsheet.
                </p>
              </div>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Special Purpose Application:</h3>
                <p>
                  Can be used to execute one specific task. Examples: camera application, chess game, calculators.
                </p>
              </div>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Bespoke Application:</h3>
                <p>
                  Made for a specific user and purpose. Built to fulfill your precise needs, however, it is expensive and may be buggy. Examples: bank software, military software.
                </p>
              </div>
            </div>
          )
        }
        {
          lo == '11.3.1.3' &&
          (
            <div className="bg-primary p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Operating System:</h2>

              <p className='mb-6'>
                An operating system is a system software that acts as an interface between the user and hardware and controls the execution of programs.
              </p>
        
              <p className='mb-6'>
                The operating system manages all of the software and hardware on the computer. It performs basic tasks such as file, memory, and process management, handling input and output, and controlling peripheral devices such as disk drives and printers.
              </p>
        
              <p className='mb-6'>
                Most of the time, there are several different computer programs running at the same time, and they all need to access your computer’s central processing unit (CPU), memory, and storage. The operating system coordinates all of this to make sure each program gets what it needs.
              </p>
        
              <h3 className="text-xl font-semibold mb-2">Resources Managed by the Operating System:</h3>
              <ul className="list-disc pl-4">
                <li>Process - Keeping track of processor and status of processes, allocating the processor to a process.</li>
                <li>Memory - Managing program use of memory.</li>
                <li>File System - Managing files and directories.</li>
                <li>Networking - Handling communication between computers.</li>
                <li>Security - Providing security through user accounts and passwords.</li>
                <li>I/O - Managing peripheral hardware for input/output.</li>
              </ul>
            </div>
          )
        }
        {
          lo == '11.3.1.4' &&
          (
            <div className="bg-primary text-white p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Classification of Operating System:</h3>
              <ul className="list-disc pl-4">
                <li>Single-user OS - Allows only one user to use the computer at any time. Examples: MS-DOS, Windows 95.</li>
                <li>Multi-user OS - Allows more than one user to access a computer system at one time. Several terminals connect to the main computer with OS on it, and each terminal will have its own user. Examples: Linux & Unix distributed OS, Mainframes.</li>
              </ul>
        
              <h3 className="text-xl font-semibold mt-6 mb-2">Components of Multi-user Operating System:</h3>
              <ul className="list-disc pl-4">
                <li>Kernel - Core of a computer&apos;s operating system and generally has complete control over everything in the system.</li>
                <li>Interrupt - Signal emitted by hardware or software when a process or an event needs immediate attention. It alerts the processor to a high-priority process requiring interruption of the current working process.</li>
                <li>Virtual Memory - Storage scheme that provides the user an illusion of having a very big main memory. This is done by treating a part of secondary memory as the main memory.</li>
              </ul>
            </div>
          )
        }
        {
          lo == '11.3.1.5' &&
          (
            <div className="bg-primary text-white p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Classification of Operating System:</h2>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">On the Basis of Processing:</h3>
                <ul className="list-disc pl-4">
                  <li>
                    Multitasking OS:
                    <ul className="list-disc pl-4">
                      <li>Preemptive - OS allocates time slices to each program, and the CPU executes them in order. Example: Linux.</li>
                      <li>Cooperative - Each process provides time to another process to run. Example: Windows 3x.</li>
                    </ul>
                  </li>
                  <li>Single Tasking OS - Can support only one task at any time. Example: MS-DOS.</li>
                </ul>
              </div>
            </div>
          )
        }
        {
          lo == '11.3.2.1' &&
          (
            <div className="bg-primary text-white p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Interaction between the CPU and Peripherals:</h2>
        
              <p className="mb-6">
                The CPU uses the address bus to specify the memory location or I/O address of the peripheral it wants to access.
              </p>
        
              <p className="mb-6">
                The CPU sets control signals on the control bus to indicate the type of operation (read or write) and selects the specific peripheral.
              </p>
        
              <p className="mb-6">
                For a write operation, the CPU puts the data onto the data bus.
              </p>
        
              <p className="mb-6">
                The peripheral receives the address and control signals and responds accordingly. In a read operation, the peripheral puts the requested data onto the data bus.
              </p>
        
              <p className="mb-6">
                The CPU then reads the data from the data bus or writes data to the peripheral, depending on the operation.
              </p>
        
              <p className="mb-6">
                The control signals may include synchronization mechanisms to ensure proper timing and coordination between the CPU and peripherals.
              </p>
        
              <h2 className="text-2xl font-semibold mt-6 mb-4">System Buses:</h2>
        
              <p className="mb-6">
                Control Bus - A bidirectional bus that transports control signals between the three components of the three-box model. It also carries interrupt signals.
              </p>
        
              <p className="mb-6">
                Address Bus - A unidirectional bus that carries address signals from the CPU to main memory and I/O devices.
              </p>
        
              <p className="mb-6">
                Data Bus - A bidirectional bus that transports data and instructions between the three components of the three-box model.
              </p>
            </div>
          )
        }
        {
          lo == '11.3.2.2' &&
          (
            <div className="bg-primary text-white p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Components of CPU:</h2>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">ALU (Arithmetic Logic Unit):</h3>
                <p>Makes arithmetical and logical calculations.</p>
              </div>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">CU (Control Unit):</h3>
                <p>Coordinates and controls the activities of the CPU.</p>
              </div>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Registers:</h3>
                <ul className="list-disc pl-4">
                  <li>
                    General Purpose Registers - Allow users to use them as they wish.
                  </li>
                  <li>
                    Address Registers - Used for storing addresses.
                  </li>
                  <li>
                    Conditional Registers - Hold truth values for loop and selection.
                  </li>
                </ul>
              </div>
        
              <h2 className="text-2xl font-semibold mt-6 mb-4">Processor Clock:</h2>
        
              <p className="mb-6">
                A timing device connected to the processor that synchronizes when the fetch, decode, execute cycle runs.
              </p>
        
              <h2 className="text-2xl font-semibold mt-6 mb-4">Clock Speed:</h2>
        
              <p>
                Clock speed is the amount of cycles that are performed by the CPU per second.
              </p>
            </div>
          )
        }
        {
          lo == '11.3.4.1' &&
          (
            <div className="bg-primary text-white p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Types of Computer Memory:</h2>
        
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">RAM (Random Access Memory):</h3>
                <p>
                  RAM is a type of computer memory that is used to store data and instructions that are actively being used by the computer&apos;s CPU. It is a volatile memory, meaning that its contents are lost when the power is turned off or interrupted.
                </p>
              </div>
        
              <div>
                <h3 className="text-xl font-semibold mb-2">ROM (Read-Only Memory):</h3>
                <p>
                  ROM is a type of computer memory that stores data that cannot be modified or erased by normal computer operations. It contains permanent instructions or data that are essential for the functioning of the computer system.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-6">RAM vs. ROM:</h2>
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-darker text-white">
                    <th className="py-2 px-4">Characteristic</th>
                    <th className="py-2 px-4">RAM (Random Access Memory)</th>
                    <th className="py-2 px-4">ROM (Read-Only Memory)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">Volatility</td>
                    <td className="py-2 px-4">Volatile - Contents are temporary, erased when power is turned off.</td>
                    <td className="py-2 px-4">Non-volatile - Data remains intact even when power is off.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Mutability</td>
                    <td className="py-2 px-4">Supports both read and write operations. Data can be read and modified by the CPU.</td>
                    <td className="py-2 px-4">Primarily read-only. Contains data that is programmed during manufacturing and cannot be modified or erased by normal computer operations.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Data Persistence</td>
                    <td className="py-2 px-4">Data is not retained when power is off, unsuitable for long-term storage.</td>
                    <td className="py-2 px-4">Data is retained permanently, making it reliable for critical instructions or data.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Usage</td>
                    <td className="py-2 px-4">Temporary storage for actively used data and instructions. Improves system performance.</td>
                    <td className="py-2 px-4">Contains permanent instructions or data essential for the functioning of the computer system.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Accessibility</td>
                    <td className="py-2 px-4">Provides fast and random access to data. Allows quick retrieval and manipulation of data.</td>
                    <td className="py-2 px-4">Provides sequential access. Data is read from ROM sequentially rather than randomly.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        }
        {
          lo == '11.3.4.2' &&
          (
            <div className="bg-primary text-white p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Virtual Memory:</h2>

              <p className="mb-6">
                Virtual memory is a memory management technique used by operating systems to provide an illusion of having more RAM than is actually available in a computer system.
              </p>

              <p>
                In virtual memory, the operating system slices the data into pages with a fixed size and stores it on the disk. When the data is required, the operating system copies its pages and pastes them into RAM. However, this process can be relatively slow and may reduce the overall speed of the computer&apos;s operation.
              </p>
            </div>
          )
        }
        {
          lo == '11.3.4.3' &&
          (
            <div className=" text-white p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Cache Memory:</h2>
        
              <p className="mb-6">
                Cache memory is a small and fast memory that helps the computer work faster. It stores frequently used data so that the CPU can access it quickly.
              </p>
        
              <p>
                Instead of going to the main memory every time, the CPU checks the cache first. Cache memory makes the computer run smoother by keeping important data close to the CPU.
              </p>
            </div>
          )
        }
        {
          lo == '11.2.2.3' &&
          (
            <div className="text-white p-6 rounded-lg shadow-primary-100 shadow-sm">
              <h2 className="text-3xl font-bold mb-4">Characteristics of a Development Framework</h2>
              <p>
                A framework is a software application development platform that provides a foundation on which software developers can build programs for a specific platform.
              </p>
              <p>
                Frameworks may include predefined classes and functions that can be used to process input, manage hardware devices, and interact with system software. This optimizes the development process since programmers don't need to reinvent the wheel each time they develop a new application.
              </p>
              <p>Example frameworks: Bootstrap, React.js, Node.js</p>
              <h3 className="text-2xl font-bold mt-4">Types of Frameworks</h3>
              <ul className="list-disc ml-8">
                <li>Web Application Frameworks
                  <ul className="list-disc ml-8">
                    <li>Flask (Python)</li>
                    <li>Symfony (PHP)</li>
                  </ul>
                </li>
                <li>Application Frameworks
                  <ul className="list-disc ml-8">
                    <li>Visual Studio (C#)</li>
                    <li>Spring Boot (Java)</li>
                  </ul>
                </li>
                <li>Mobile Development Frameworks
                  <ul className="list-disc ml-8">
                    <li>Ionic (HTML, CSS, JS)</li>
                    <li>Xamarin (C#)</li>
                    <li>React Native (JavaScript)</li>
                    <li>Android Studio (Java)</li>
                    <li>Thunkable (Blocks)</li>
                  </ul>
                </li>
              </ul>
              <h3 className="text-2xl font-bold mt-4">Advantages of Using Frameworks</h3>
              <ul className="list-disc ml-8">
                <li>DEBUG: Applications built around a more rigid architecture are typically easier to separate out and test individually than those engineered using a custom solution.</li>
                <li>EFFICIENCY: Templates, for example, are an ideal tool for reducing the time on task to write boilerplate code. They allow application developers to shift their time towards implementing creative solutions to more pressing problems.</li>
                <li>TEAM WORK: For teams of engineers, a framework lays out a system’s design language in a way that everyone is instantly familiar with and can communicate and work on with ease.</li>
              </ul>
              <h3 className="text-2xl font-bold mt-4">Disadvantages of Using Frameworks</h3>
              <ul className="list-disc ml-8">
                <li>LANGUAGE: you should know the language behind the framework to operate with it (with only few exceptions)</li>
                <li>LIMITATIONS: The framework cannot be modified, therefore people should choose wisely the right framework.</li>
                <li>CODE IS PUBLIC: The framework code is public, so people with bad intentions could use your code against you.</li>
                <li>SECURITY: Weak protection against external threats due to the open source nature of most frameworks</li>
                <li>EDUCATION: It is not always possible to immediately understand what and how works in a particular framework because of the complexity of learning.</li>
              </ul>
            </div>
          )
        } */}
      </div>
    </div>
  )
}