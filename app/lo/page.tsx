'use client'

import Accordion from '@/components/Accordion'
import { Container } from '@/components/Content'

export default function LO() {
  return (
    <div className='w-full flex bg-main-100'>
      <Accordion className='hidden sm:block mb-6' />
      <div className='sm:w-5/7 w-full p-6 pt-0'>
        <Container />
        {/*
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