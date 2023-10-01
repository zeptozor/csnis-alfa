import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Application_interface() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Application interface</Title>
            <LO>11.2.2.3 describe the characteristics of a development framework</LO>
            <Div>
                <H3>Framework:</H3>
                <P>A framework is a software application development platform that provides a foundation on which software developers can build programs for a specific platform.</P>
                <P>Framework may include predefined classes and functions that can be used to process input, manage hardware devices, and interact with system software. This optimizes the development process since programmers don't need to reinvent the wheel each time they develop a new application.</P>
                <P>Example frameworks: Bootstrap, React.js, Node.js</P>
            </Div>
            <Div>
                <H3>Types of frameworks:</H3>
                <List>
                    <>
                        Web Application Frameworks:
                        <List>
                            <>Flask (Python)</>
                            <>React (JavaScript)</>
                        </List>
                    </>
                    <>
                        Application Frameworks:
                        <List>
                            <>Nest.js (Node.js)</>
                            <>Spring Boot (Java)</>
                        </List>
                    </>
                    <>
                        Mobile Development Frameworks:
                        <List>
                            <>Ionic (HTML, CSS, JS)</>
                            <>Xamarin (C#)</>
                            <>React Native (JavaScript)</>
                            <>Android Studio (Java)</>
                            <>Thunkable (Blocks)</>
                        </List>
                    </>
                </List>
            </Div>
            <Div>
                <H3>Advantages of using frameworks:</H3>
                <List>
                    <>Debug - applications built around a more rigid architecture are typically easier to separate out and test individually than those engineered using a custom solution</>
                    <>Efficiency - templates, for example, are an ideal tool for reducing the time on task to write boilerplate code. They allow application developers to shift their time towards implementing creative solutions to more pressing problems</>
                    <>Team work - for teams of engineers, a framework lays out a system's design language in a way that everyone is instantly familiar with and can communicate and work on with ease</>
                </List>
            </Div>
            <Div>
                <H3>Disadvantages of using frameworks:</H3>
                <List>
                    <>Language - you should know the language behind the framework to operate with it (with only few exceptions)</>
                    <>Limitations - the framework can not be modified, therefore people should choose wisely the right framework</>
                    <>Code is public - the framework code is public, so people with bad intentions could use your code against you</>
                    <>Security - weak protection against external threats due to the open source of most frameworks</>
                    <>Education - it is not always possible to immediately understand what and how works in a particular framework, because of the complexity of learning</>
                </List>
            </Div>
        </div>
    )
}