import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function System_lifecycle_models() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>System lifecycle models</Title>
            <LO>11.2.1.2 analyse the advantages and disadvantages of cyclical, waterfall and spiral models</LO>
            <Div>
                <H3>Cyclical Model:</H3>
                <P>Advantages:</P>
                <List>
                    <>Iterative Development - the cyclical model allows for iterative development, where software is developed in cycles or iterations. This approach allows for feedback and refinement throughout the development process, making it easier to adapt to changing requirements</>
                    <>Flexibility - the model is flexible and can accommodate changes in requirements more easily than the Waterfall model. It's suitable for projects where the requirements are not well-defined initially</>
                    <>Rapid Prototyping - cyclical models often involve creating prototypes quickly, which can be beneficial for gathering user feedback early in the development process</>
                </List>
                <P>Disadvantages:</P>
                <List>
                    <>Complexity - managing multiple cycles and iterations can add complexity to the development process. This complexity can lead to challenges in tracking progress and maintaining consistency</>
                    <>Increased Cost and Time - the iterative nature of the Cyclical model may lead to increased development costs and time, especially if there are many iterations</>
                    <>Scope Creep - continuous changes and adaptations can result in scope creep if not managed properly, leading to a never-ending development cycle</>
                </List>
            </Div>
            <Div>
                <H3>Waterfall Model:</H3>
                <P>Advantages:</P>
                <List>
                    <>Structured Approach - the Waterfall model follows a structured and linear approach to development, making it easy to manage and understand</>
                    <>Clear Milestones - it defines clear milestones and phases, making it easier to track progress and ensure that each phase is completed before moving to the next</>
                    <>Documented Requirements - requirements are usually well-documented upfront, reducing the chances of misunderstandings and scope changes later in the project</>
                </List>
                <P>Disadvantages:</P>
                <List>
                    <>Rigidity - the Waterfall model is inflexible when it comes to accommodating changes in requirements. Once a phase is completed, it's challenging to go back and make significant alterations</>
                    <>Limited User Involvement - user feedback is typically collected at the end of the project, which can result in surprises or dissatisfaction if the requirements were not fully understood</>
                    <>Risk of Late Discoveries - issues and defects may not be discovered until late in the development process, making them more costly and time-consuming to address</>
                </List>
            </Div>
            <Div>
                <H3>Spiral Model:</H3>
                <P>Advantages:</P>
                <List>
                    <>Risk Management - the Spiral model places a strong emphasis on risk management. It allows for the early identification and mitigation of risks through iterative development and prototyping</>
                    <>Flexibility - like the Cyclical model, the Spiral model is flexible and can accommodate changes in requirements as it progresses through multiple iterations</>
                    <>User Involvement - the model encourages user involvement throughout the development process, helping to ensure that the product aligns with user needs</>
                </List>
                <P>Disadvantages:</P>
                <List>
                    <>Complexity - the Spiral model can be complex to manage due to its iterative and risk-driven nature. It may require more experienced project management</>
                    <>Cost and Time - depending on the number of iterations and the extent of risk analysis, the Spiral model can be costlier and take more time compared to other models</>
                    <>Documentation Overhead - managing documentation for each iteration can be burdensome, especially for large projects</>
                </List>
            </Div>
        </div>
    )
}